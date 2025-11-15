import { NextResponse } from 'next/server';
import { sendEmail } from 'lib/api/sendEmail';
import { validateContactForm } from 'utils/formValidation';
import { sanitizeHtml } from 'lib/sanitizer';
import { checkRateLimit } from 'lib/rateLimiter';

export async function POST(request: Request){
  try{
    const formData = await request.formData();
    const obj: Record<string, unknown> = {};
    for(const entry of formData.entries()){
      const k = entry[0];
      const v = entry[1];
      if(k === 'attachment' && v instanceof File){
        const arrayBuffer = await v.arrayBuffer();
        const b64 = Buffer.from(arrayBuffer).toString('base64');
        // sanitize filename
        obj.attachment = { filename: sanitizeHtml(v.name), content: b64 };
      } else {
        const val = typeof v === 'string' ? v : String(v);
        // sanitize simple values to prevent stored XSS in emails or logs
        const clean = sanitizeHtml(val);
        try{ obj[k] = JSON.parse(clean); } catch(_) { obj[k] = clean; }
      }
    }

    // Rate limiting: use email or IP as identifier
    const identifier = (obj.email && typeof obj.email === 'string' && obj.email) || request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'anon';
    if (!(await checkRateLimit(String(identifier), 6, 60_000))) {
      return NextResponse.json({ message: 'Rate limit exceeded' }, { status: 429 });
    }

    const validation = validateContactForm(obj);
    if(!validation.valid) return NextResponse.json({ message:'Validation failed', errors: validation.errors }, { status:400 });

    // Verify reCAPTCHA token if secret configured
    const recaptchaSecret = process.env.RECAPTCHA_SECRET;
    if(recaptchaSecret){
      const token = typeof obj.recaptchaToken === 'string' ? obj.recaptchaToken : undefined;
      if(!token) return NextResponse.json({ message: 'reCAPTCHA token missing' }, { status: 400 });
      try{
        const params = new URLSearchParams();
        params.append('secret', recaptchaSecret);
        params.append('response', token);
        const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', { method: 'POST', body: params });
        const j = await verifyRes.json() as { success?: boolean; score?: number; action?: string };
        const score = typeof j.score === 'number' ? j.score : 0;
        if(!j.success || score < 0.5) return NextResponse.json({ message: 'reCAPTCHA verification failed' }, { status: 400 });
      }catch(err){
        return NextResponse.json({ message: 'reCAPTCHA verification error' }, { status: 500 });
      }
    }

    const subject = `New contact form: ${String(obj.inquiryType ?? 'Contact')}`;
    const html = `<p>New contact submission</p><pre>${JSON.stringify(obj, null, 2)}</pre>`;

  const attachment = obj.attachment as { filename: string; content: string } | undefined;
  await sendEmail({ subject, html, attachments: attachment ? [attachment] : undefined });

    return NextResponse.json({ ok:true });
  }catch(err: unknown){
    // keep minimal logging
    return NextResponse.json({ message: (err instanceof Error ? err.message : 'Server error') }, { status:500 });
  }
}
