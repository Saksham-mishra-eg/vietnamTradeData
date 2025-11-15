"use client";
import React from 'react';

export default function ContactCTA(){
  return (
    <section className="py-12 bg-gradient-to-r from-ttblue-700 to-ttblue-500 text-white text-center">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold">Ready to Get Started?</h3>
  <p className="mt-2">Do not wait. Our team is standing by to help you unlock Vietnam trade intelligence.</p>
        <div className="mt-4 flex items-center justify-center gap-4">
          <button className="bg-white text-ttblue-700 px-6 py-3 rounded font-semibold">Start Free Trial</button>
          <button className="border border-white/40 px-6 py-3 rounded">Schedule a Demo</button>
        </div>
      </div>
    </section>
  );
}
