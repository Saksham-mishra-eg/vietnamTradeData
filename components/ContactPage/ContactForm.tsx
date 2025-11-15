"use client";

import React, { useEffect, useState, useRef } from 'react';
import { validateContactForm } from 'utils/formValidation';

declare global {
  interface Window {
    grecaptcha?: {
      execute: (siteKey: string, opts: { action?: string }) => Promise<string>;
    };
  }
}
type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  inquiryType: string;
  dataInterest: string[];
  businessSize: string;
  message: string;
  hearAbout?: string;
  preferredContact?: string;
  bestTime?: string;
  timezone?: string;
};

export default function ContactForm(){
  const [form, setForm] = useState<FormState>({
    firstName:'', lastName:'', email:'', phone:'', company:'', jobTitle:'', inquiryType:'', dataInterest:[], businessSize:'', message:'', hearAbout:'', preferredContact:'Email', bestTime:'Morning', timezone:Intl.DateTimeFormat().resolvedOptions().timeZone
  });
  const [errors, setErrors] = useState<Record<string,string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const honeypotRef = useRef<HTMLInputElement | null>(null);

  useEffect(()=>{
    const draft = localStorage.getItem('contactDraft');
    if(draft) setForm(JSON.parse(draft));
  },[]);

  useEffect(()=>{
    localStorage.setItem('contactDraft', JSON.stringify(form));
  },[form]);

  function update<K extends keyof FormState>(key:K, value:FormState[K]){
    setForm(prev=>({ ...prev, [key]: value }));
  }

  async function handleSubmit(e:React.FormEvent){
    e.preventDefault();
    setErrors({});
    const validation = validateContactForm(form);
    if(!validation.valid){
      setErrors(validation.errors);
      return;
    }

    // honeypot
    if(honeypotRef.current && honeypotRef.current.value){
      return; // silently ignore
    }

    setLoading(true);
    setSuccess(null);

    try{
      const payload = new FormData();
      // If reCAPTCHA site key is provided via NEXT_PUBLIC_RECAPTCHA_SITE_KEY, request a token
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
      if(siteKey){
        // load grecaptcha if not present
        if(!window.grecaptcha){
          const script = document.createElement('script');
          script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
          script.async = true;
          document.body.appendChild(script);
          // wait a short time for script to load
          await new Promise(resolve => setTimeout(resolve, 500));
        }
        try{
          const token = await window.grecaptcha!.execute(siteKey, { action: 'contact' });
          payload.append('recaptchaToken', String(token));
        }catch(err: unknown){ /* ignore and continue without token */ }
      }
      Object.entries(form).forEach(([k,v])=>{
        if(Array.isArray(v)) payload.append(k, JSON.stringify(v)); else payload.append(k, String(v));
      });
      if(file) payload.append('attachment', file);

      const res = await fetch('/api/contact', { method:'POST', body: payload });
      const data = await res.json();
      if(res.ok){
        setSuccess('Thank you! We will be in touch soon.');
        localStorage.removeItem('contactDraft');
        setForm({ firstName:'', lastName:'', email:'', phone:'', company:'', jobTitle:'', inquiryType:'', dataInterest:[], businessSize:'', message:'', hearAbout:'', preferredContact:'Email', bestTime:'Morning', timezone:Intl.DateTimeFormat().resolvedOptions().timeZone });
        setFile(null);
      } else {
        setErrors({ form: (data && typeof data.message === 'string') ? data.message : 'An error occurred' });
      }
    }catch(err: unknown){
      const msg = err instanceof Error ? err.message : 'Network error';
      setErrors({ form: msg });
    }finally{ setLoading(false); }
  }

  function toggleInterest(value:string){
    setForm(prev=>({ ...prev, dataInterest: prev.dataInterest.includes(value) ? prev.dataInterest.filter(i=>i!==value) : [...prev.dataInterest, value] }));
  }

  return (
    <section aria-labelledby="contact-form" className="bg-white p-6 rounded-lg shadow">
      <h3 id="contact-form" className="text-xl font-semibold mb-4">Your Details</h3>
      {errors.form && <div className="bg-red-50 text-red-700 p-2 rounded mb-3">{errors.form}</div>}
      {success ? (
        <div className="bg-green-50 p-6 rounded text-green-800">
          <div className="font-bold">Thank You! We will be in touch soon</div>
          <div className="mt-2">A confirmation email has been sent to you.</div>
          <button className="mt-4 tt-cta-gradient text-white px-4 py-2 rounded" onClick={()=>setSuccess(null)}>Submit Another Request</button>
        </div>
      ) : (
      <form onSubmit={handleSubmit} className="space-y-4">
        <input ref={honeypotRef} name="hp_field" className="hidden" aria-hidden />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <label className="flex flex-col"><span className="text-sm font-medium">First Name*</span><input value={form.firstName} onChange={e=>update('firstName', e.target.value)} className="border px-3 py-2 rounded" required minLength={2} /></label>
          <label className="flex flex-col"><span className="text-sm font-medium">Last Name*</span><input value={form.lastName} onChange={e=>update('lastName', e.target.value)} className="border px-3 py-2 rounded" required minLength={2} /></label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <label className="flex flex-col"><span className="text-sm font-medium">Email Address*</span><input type="email" value={form.email} onChange={e=>update('email', e.target.value)} className="border px-3 py-2 rounded" required /></label>
          <label className="flex flex-col"><span className="text-sm font-medium">Phone Number</span><input value={form.phone} onChange={e=>update('phone', e.target.value)} className="border px-3 py-2 rounded" placeholder="+84 ..." /></label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <label className="flex flex-col"><span className="text-sm font-medium">Company Name*</span><input value={form.company} onChange={e=>update('company', e.target.value)} className="border px-3 py-2 rounded" required minLength={2} /></label>
          <label className="flex flex-col"><span className="text-sm font-medium">Job Title</span><input value={form.jobTitle} onChange={e=>update('jobTitle', e.target.value)} className="border px-3 py-2 rounded" /></label>
        </div>

        <h4 className="text-lg font-semibold mt-4">Your Inquiry</h4>
        <label className="flex flex-col"><span className="text-sm">I am interested in*</span>
          <select value={form.inquiryType} onChange={e=>update('inquiryType', e.target.value)} className="border px-3 py-2 rounded" required>
            <option value="">Select...</option>
            <option>Getting a Demo</option>
            <option>Starting a Free Trial</option>
            <option>Enterprise Solutions</option>
            <option>Partnership Opportunities</option>
            <option>Technical Support</option>
            <option>General Inquiry</option>
            <option>Other</option>
          </select>
        </label>

        <div>
          <div className="text-sm font-medium mb-2">Which data are you interested in?*</div>
          <div className="grid grid-cols-2 gap-2">
            {['Vietnam Import Data','Vietnam Export Data','API Access','Custom Reports','All of the above'].map(item=> (
              <label key={item} className="inline-flex items-center gap-2"><input type="checkbox" checked={form.dataInterest.includes(item)} onChange={()=>toggleInterest(item)} /> <span className="text-sm">{item}</span></label>
            ))}
          </div>
        </div>

        <label className="flex flex-col"><span className="text-sm font-medium">Current Business Size*</span>
          <select value={form.businessSize} onChange={e=>update('businessSize', e.target.value)} className="border px-3 py-2 rounded" required>
            <option value="">Select...</option>
            <option>Startup (1-10 employees)</option>
            <option>Small Business (11-50)</option>
            <option>Medium Business (51-200)</option>
            <option>Large Enterprise (200+)</option>
          </select>
        </label>

        <label className="flex flex-col"><span className="text-sm font-medium">Message*</span><textarea value={form.message} onChange={e=>update('message', e.target.value)} rows={5} className="border px-3 py-2 rounded" minLength={10} maxLength={1000} required placeholder="Tell us about your requirements, questions, or how we can help..." /></label>
        <div className="text-sm text-ttgray-500">{form.message.length}/1000</div>

        <label className="flex flex-col"><span className="text-sm font-medium">Attach file (optional)</span><input type="file" onChange={e=>setFile(e.target.files?.[0] || null)} accept=".pdf,.doc,.docx,.xls,.xlsx" /></label>

        <details className="bg-gray-50 p-3 rounded">
          <summary className="cursor-pointer">Additional Info (optional)</summary>
          <div className="mt-3 grid grid-cols-1 gap-3">
            <label className="flex flex-col"><span className="text-sm">How did you hear about us?</span>
              <select value={form.hearAbout} onChange={e=>update('hearAbout', e.target.value)} className="border px-3 py-2 rounded">
                <option value="">Select...</option>
                <option>Google Search</option>
                <option>LinkedIn</option>
                <option>Referral</option>
                <option>Trade Show</option>
                <option>Advertisement</option>
                <option>Other</option>
              </select>
            </label>

            <div>
              <div className="text-sm">Preferred Contact Method</div>
              <div className="flex gap-3 mt-2">
                {['Email','Phone','WhatsApp'].map(m=> <label key={m} className="inline-flex items-center gap-2"><input type="radio" name="pref" checked={form.preferredContact===m} onChange={()=>update('preferredContact', m)} /> {m}</label>)}
              </div>
            </div>

            <label className="flex flex-col"><span className="text-sm">Best time to contact</span>
              <select value={form.bestTime} onChange={e=>update('bestTime', e.target.value)} className="border px-3 py-2 rounded">
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>
            </label>
          </div>
        </details>

        <div className="flex items-start gap-3">
          <label className="inline-flex items-center gap-2"><input type="checkbox" required /> <span>I agree to receive marketing communications</span></label>
        </div>
        <div className="flex items-start gap-3">
          <label className="inline-flex items-center gap-2"><input type="checkbox" required /> <span>I agree to the <a href="#" className="text-ttblue-700">Privacy Policy</a> and Terms of Service</span></label>
        </div>

        <div className="flex items-center gap-3">
          <button className="tt-cta-gradient text-white px-6 py-2 rounded" type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
          {loading && <div className="text-sm">Processing...</div>}
        </div>
      </form>
      )}
    </section>
  );
}
