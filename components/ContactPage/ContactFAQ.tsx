"use client";

import React from 'react';
import { contactFaqs as faqs } from 'components/Shared/faqs';

export default function ContactFAQ() {
  return (
    <section className="py-12 container mx-auto px-4">
      <h3 className="text-2xl font-semibold mb-4">Common Questions About Contacting Us</h3>
      <div className="space-y-2">
        {faqs.map((f, idx) => (
          <div key={idx}>
            <dt className="text-lg font-medium">{f.q}</dt>
            <dd className="mt-2 text-gray-600">{f.a}</dd>
          </div>
        ))}
      </div>
    </section>
  );
}
