export function validateContactForm(form:any){
  const errors:any = {};
  if(!form.firstName || String(form.firstName).trim().length < 2) errors.firstName = 'Please enter a first name (2+ chars)';
  if(!form.lastName || String(form.lastName).trim().length < 2) errors.lastName = 'Please enter a last name (2+ chars)';
  if(!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Please enter a valid email';
  if(!form.company || String(form.company).trim().length < 2) errors.company = 'Please enter a company name';
  if(!form.inquiryType) errors.inquiryType = 'Please select an inquiry type';
  if(!form.dataInterest || (Array.isArray(form.dataInterest) && form.dataInterest.length===0)) errors.dataInterest = 'Select at least one data interest';
  if(!form.businessSize) errors.businessSize = 'Select your business size';
  if(!form.message || String(form.message).trim().length < 10) errors.message = 'Please enter a message (10+ chars)';
  if(!form.privacyAccepted && form.privacyAccepted !== undefined) errors.privacy = 'You must accept the Privacy Policy';
  return { valid: Object.keys(errors).length === 0, errors };
}
