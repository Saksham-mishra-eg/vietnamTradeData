"use client";

import React from 'react';
import Image from 'next/image';

export default function Culture(){
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold mb-4">Life at VietnamTradeData</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Array.from({length:8}).map((_,i)=> (
                  <div key={i} className="h-32 bg-white rounded-lg overflow-hidden relative">
                    <Image src="/images/logo.svg" alt={`Team ${i+1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
        <div className="mt-6 text-center">
          <h4 className="font-semibold">Join Our Team</h4>
          <p className="text-ttgray-600">We are always looking for talented individuals passionate about trade and technology.</p>
          <button className="mt-3 border px-4 py-2 rounded">View Open Positions</button>
        </div>
      </div>
    </section>
  );
}
