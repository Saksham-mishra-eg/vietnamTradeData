"use client";

import React from 'react';

export default function TrustSection(){
  return (
    <section className="py-12 bg-gray-50">
      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 text-center">
        <h4 className="text-xl font-semibold mb-4">Trusted & Compliant</h4>
        <div className="flex items-center justify-center gap-6 flex-wrap text-ttgray-700">
          <div>✓ Legal Data Source</div>
          <div>✓ GDPR Compliant</div>
          <div>✓ Encrypted & Secure</div>
          <div>✓ ISO Certified</div>
          <div>✓ 99.9% Uptime</div>
        </div>
      </div>
    </section>
  );
}
