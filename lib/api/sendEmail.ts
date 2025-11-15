import { buildAdminEmail, buildUserAutoResponse } from 'utils/emailTemplates';

const SENDGRID_API = process.env.SENDGRID_API_KEY;
const TO_EMAIL = process.env.SENDGRID_TO_EMAIL || process.env.FROM_EMAIL || 'info@VietnamTradeData.com';
const FROM_EMAIL = process.env.FROM_EMAIL || 'no-reply@VietnamTradeData.com';

type Attachment = { filename: string; content: string };

type SendGridBody = {
  personalizations: Array<{ to: Array<{ email: string }> }>;
  from: { email: string };
  subject: string;
  content: Array<{ type: string; value: string }>;
  attachments?: Array<{ content: string; filename: string }>;
};

async function sendViaSendGrid(payload: { subject: string; html: string; plain?: string; attachments?: Attachment[] }){
  const body: SendGridBody = {
    personalizations:[{ to:[{email:TO_EMAIL}] }],
    from: { email: FROM_EMAIL },
    subject: payload.subject,
    content: [ { type:'text/plain', value: payload.plain || '' }, { type:'text/html', value: payload.html } ]
  };
  if(payload.attachments){
    // SendGrid expects base64 content
    // attachments array items should be: { content: base64string, filename, type(optional) }
    body.attachments = payload.attachments.map(a=>({ content: a.content, filename: a.filename }));
  }

  const res = await fetch('https://api.sendgrid.com/v3/mail/send', { method:'POST', headers:{ Authorization:`Bearer ${SENDGRID_API}`, 'Content-Type':'application/json' }, body: JSON.stringify(body) });
  if(!res.ok) throw new Error('SendGrid error: ' + await res.text());
  return { ok:true };
}

type ContactForm = {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  inquiryType?: string;
  dataInterest?: string[] | string;
  businessSize?: string;
  message?: string;
  privacyAccepted?: boolean;
  attachment?: { filename?: string; content?: string } | null;
  [key:string]: unknown;
};

export async function sendEmail(form: ContactForm){
  // Build admin email and user autoresponse
  const admin = buildAdminEmail(form);
  const user = buildUserAutoResponse(form);

  const attachments: Attachment[] | undefined = form.attachment && form.attachment.filename && form.attachment.content ? [{ filename: String(form.attachment.filename), content: String(form.attachment.content) }] : undefined;

  if(SENDGRID_API){
    // send to internal team
    await sendViaSendGrid({ subject: admin.subject, html: admin.html, plain: admin.plain, attachments });
    // send auto-response to user if email provided (using personalizations.to set to user)
    if(form.email && typeof form.email === 'string'){
      const body: SendGridBody = {
        personalizations:[{ to:[{email: form.email}] }],
        from: { email: FROM_EMAIL },
        subject: user.subject,
        content:[{ type:'text/plain', value: user.plain }, { type:'text/html', value: user.html }]
      };
      await fetch('https://api.sendgrid.com/v3/mail/send', { method:'POST', headers:{ Authorization:`Bearer ${SENDGRID_API}`, 'Content-Type':'application/json' }, body: JSON.stringify(body) });
    }
    return { ok:true };
  }

  // fallback: development - log limited info
  if(process.env.NODE_ENV !== 'production'){
    // eslint-disable-next-line no-console
    console.info('Email not sent (no SENDGRID configured). Admin subject:', admin.subject);
    // eslint-disable-next-line no-console
    if(form.email) console.info('Would send auto-response to:', String(form.email));
  }
  return { ok:true };
}
