"use client";

import React, { useState } from 'react';

export default function ROICalculator(){
  const [savings, setSavings] = useState(5000);
  const [costPerMonth, setCostPerMonth] = useState(399);

  const annualSavings = savings * 12;
  const annualCost = costPerMonth * 12;
  const roi = ((annualSavings - annualCost) / annualCost) * 100 || 0;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mb-3">ROI Calculator</h3>
          <p className="text-sm mb-4">Estimate yearly ROI by entering expected monthly savings unlocked by our data.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <label className="space-y-1">
              <div className="text-sm">Estimated monthly savings (USD)</div>
              <input type="number" value={savings} onChange={e=>setSavings(Number(e.target.value))} className="w-full border px-2 py-2 rounded" />
            </label>
            <label className="space-y-1">
              <div className="text-sm">Selected plan monthly cost (USD)</div>
              <input type="number" value={costPerMonth} onChange={e=>setCostPerMonth(Number(e.target.value))} className="w-full border px-2 py-2 rounded" />
            </label>
            <div className="flex items-end">
              <div>
                <div className="text-sm">Estimated annual ROI</div>
                <div className="text-2xl font-bold">{roi.toFixed(0)}%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded p-4 shadow">
          <div className="text-sm text-ttgray-600">Annual savings</div>
          <div className="text-xl font-semibold">${annualSavings.toLocaleString()}</div>
          <div className="text-sm text-ttgray-600 mt-2">Annual cost</div>
          <div className="text-xl font-semibold">${annualCost.toLocaleString()}</div>
        </div>
      </div>
    </section>
  );
}
