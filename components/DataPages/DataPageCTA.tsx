"use client";

import React from 'react';

type Props = { pageType: 'import' | 'export' };

export default function DataPageCTA({pageType}:Props){
  return (
    <section className="py-16 bg-gradient-to-r from-ttblue-600 to-ttblue-500 text-white">
      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-2xl font-bold">Ready to Access Vietnam {pageType==='import' ? 'Import' : 'Export'} Data?</h3>
          <ul className="mt-3">
            <li>✓ Instant access to sample data</li>
            <li>✓ No credit card required</li>
            <li>✓ 7-day free trial</li>
          </ul>
        </div>
        <div>
          <form className="bg-white p-4 rounded shadow">
            <input aria-label="Name" placeholder="Name" className="w-full border p-2 mb-2 rounded" />
            <input aria-label="Email" placeholder="Email" className="w-full border p-2 mb-2 rounded" />
            <input aria-label="Company" placeholder="Company" className="w-full border p-2 mb-2 rounded" />
            <input aria-label="Phone" placeholder="Phone" className="w-full border p-2 mb-2 rounded" />
            <div className="flex gap-2">
              <button className="tt-cta-gradient text-white px-4 py-2 rounded">Get Sample Data</button>
              <button className="border px-4 py-2 rounded">Schedule Demo</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
