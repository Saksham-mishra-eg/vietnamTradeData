"use client";

import React from 'react';

export default function Certifications(){
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-xl font-bold mb-4">Trusted & Certified</h3>
        <div className="flex gap-4 flex-wrap items-center">
          <div className="w-32 h-16 bg-white rounded flex items-center justify-center">ISO 9001</div>
          <div className="w-32 h-16 bg-white rounded flex items-center justify-center">ISO 27001</div>
          <div className="w-32 h-16 bg-white rounded flex items-center justify-center">GDPR</div>
          <div className="w-32 h-16 bg-white rounded flex items-center justify-center">SOC 2</div>
        </div>
        <div className="mt-6">
          <h4 className="font-semibold mb-2">Our Partners</h4>
          <div className="flex gap-4 flex-wrap items-center">
            <div className="w-32 h-12 bg-white rounded flex items-center justify-center">Partner A</div>
            <div className="w-32 h-12 bg-white rounded flex items-center justify-center">Partner B</div>
            <div className="w-32 h-12 bg-white rounded flex items-center justify-center">Partner C</div>
          </div>
        </div>
      </div>
    </section>
  );
}
