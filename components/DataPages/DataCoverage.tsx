"use client";

import React from 'react';

export default function DataCoverage(){
  return (
    <section className="py-16 bg-gray-50">
      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-3">Coverage & Data Freshness</h3>
          <ul className="space-y-2 text-ttgray-700">
            <li>Import Data: 150+ source countries</li>
            <li>Export Data: 200+ destination countries</li>
            <li>Historical: 2014 - Present</li>
            <li>Updated daily from Vietnamese customs (average delay 24-48 hours)</li>
            <li>Quality assurance: 99.9% accuracy</li>
          </ul>
        </div>
        <div>
          <div className="h-56 bg-white rounded shadow flex items-center justify-center">[Map visualization placeholder]</div>
        </div>
      </div>
    </section>
  );
}
