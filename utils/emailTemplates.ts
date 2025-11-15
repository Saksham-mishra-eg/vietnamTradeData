export function buildAdminEmail(form: Record<string, any>){
  const subject = `New contact form: ${form.inquiryType || 'Contact'}`;
  const htmlParts: string[] = [];
  htmlParts.push(`<h2>New contact submission</h2>`);
  htmlParts.push('<ul>');
  for(const k of Object.keys(form)){
    if(k === 'attachment') continue;
    htmlParts.push(`<li><strong>${k}:</strong> ${Array.isArray(form[k]) ? JSON.stringify(form[k]) : String(form[k] ?? '')}</li>`);
  }
  htmlParts.push('</ul>');
  if(form.attachment && form.attachment.filename){
    htmlParts.push(`<div>Attachment: ${form.attachment.filename}</div>`);
  }
  const html = htmlParts.join('\n');
  const plain = `New contact submission\n\n${JSON.stringify(form, null, 2)}`;
  return { subject, html, plain };
}

export function buildUserAutoResponse(form: Record<string, any>){
  const subject = `We've received your message - VietnamTradeData`;
  const html = `<p>Hi ${form.firstName || ''},</p><p>Thanks for contacting VietnamTradeData. We have received your message and will respond within 2-4 hours during business hours.</p><p>Summary:</p><pre>${JSON.stringify(form, null, 2)}</pre>`;
  const plain = `Hi ${form.firstName || ''},\n\nThanks for contacting VietnamTradeData. We have received your message and will respond within 2-4 hours.\n\nSummary:\n${JSON.stringify(form, null, 2)}`;
  return { subject, html, plain };
}
