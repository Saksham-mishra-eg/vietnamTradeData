"use client";

import React from 'react';

export default function ComparisonTable(){
  return (
    <section className="py-16">
      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h3 className="text-2xl font-bold mb-4">Compare Our Data Plans</h3>
        <div className="overflow-x-auto bg-white rounded shadow">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Feature</th>
                <th className="p-3">Basic</th>
                <th className="p-3">Professional</th>
                <th className="p-3">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t"><td className="p-3">Search Queries</td><td className="p-3">1,000/month</td><td className="p-3">10,000/month</td><td className="p-3">Unlimited</td></tr>
              <tr className="border-t"><td className="p-3">Data History</td><td className="p-3">1 year</td><td className="p-3">5 years</td><td className="p-3">10+ years</td></tr>
              <tr className="border-t"><td className="p-3">Export Formats</td><td className="p-3">Excel</td><td className="p-3">Excel, CSV, PDF</td><td className="p-3">All + API</td></tr>
              <tr className="border-t"><td className="p-3">Real-time Alerts</td><td className="p-3">❌</td><td className="p-3">✅</td><td className="p-3">✅</td></tr>
              <tr className="border-t"><td className="p-3">Custom Reports</td><td className="p-3">❌</td><td className="p-3">✅</td><td className="p-3">✅</td></tr>
              <tr className="border-t"><td className="p-3">API Access</td><td className="p-3">❌</td><td className="p-3">Limited</td><td className="p-3">Full</td></tr>
              <tr className="border-t"><td className="p-3">Support</td><td className="p-3">Email</td><td className="p-3">Priority</td><td className="p-3">Dedicated Manager</td></tr>
              <tr className="border-t"><td className="p-3">Price</td><td className="p-3">$99/mo</td><td className="p-3">$299/mo</td><td className="p-3">Custom</td></tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-right"><button className="px-4 py-2 border rounded">View Detailed Pricing</button></div>
      </div>
    </section>
  );
}
