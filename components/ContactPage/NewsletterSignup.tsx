"use client";
import React, { useState } from 'react';

export default function NewsletterSignup(){
  const [email, setEmail] = useState('');
  const [ok, setOk] = useState<string | null>(null);

  async function subscribe(e:React.FormEvent){
    e.preventDefault();
    // placeholder: integrate with mailing list provider
    setOk('Subscribed! Check your inbox.');
    setEmail('');
  }

  return (
    <section className="py-12 bg-ttblue-50">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-2xl font-semibold">Stay Informed</h3>
          <p className="text-ttgray-600">Get trade insights and product updates delivered to your inbox.</p>
        </div>
        <form onSubmit={subscribe} className="flex gap-2">
          <input value={email} onChange={e=>setEmail(e.target.value)} className="border px-3 py-2 rounded flex-1" placeholder="you@company.com" required />
          <button className="tt-cta-gradient text-white px-4 py-2 rounded">Subscribe</button>
        </form>
        {ok && <div className="text-green-700">{ok}</div>}
      </div>
    </section>
  );
}
