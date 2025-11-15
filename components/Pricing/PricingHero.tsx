"use client";

import React from 'react';
import Link from 'next/link';

export default function PricingHero(){
  return (
    <section id="pricing" className="bg-gradient-to-r from-ttblue-600 to-ttblue-500 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <nav className="text-sm opacity-80 mb-4">Home &gt; Pricing</nav>
        <h1 className="text-4xl font-bold">Pricing Built for Teams of All Sizes</h1>
        <p className="mt-4 max-w-3xl mx-auto">Choose between flexible monthly plans or save with annual billing. Start with a free trial and scale as your data needs grow.</p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="#plans" className="bg-white text-ttblue-700 px-6 py-3 rounded font-semibold">See Plans</Link>
          <Link href="#contact" className="border border-white/40 px-6 py-3 rounded">Contact Sales</Link>
        </div>
      </div>
    </section>
  );
}
