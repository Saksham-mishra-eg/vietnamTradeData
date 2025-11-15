"use client";

import React from 'react';
import { DataRow, sampleImportData, sampleExportData } from 'components/DataPages/sampleData';

type Props = { record: DataRow | null; onClose: ()=>void };

function smallLinePath(values: number[], width = 300, height = 80){
  if(values.length === 0) return '';
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  return values.map((v,i)=>{
    const x = Math.round((i/(values.length-1)) * width);
    const y = Math.round(height - ((v-min)/range) * height);
    return `${i===0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');
}

export default function DetailsPanel({ record, onClose }: Props){
  if(!record) return (
    <div className="sticky top-24 bg-white p-4 border rounded">Select a row to see details</div>
  );

  // derive analytics from sample data (client-demo)
  const source = [...sampleImportData, ...sampleExportData];
  const sameProduct = source.filter(s => s.product === record.product && s.id !== record.id);
  const prices = sameProduct.map(s => s.value / Math.max(1, s.quantity));
  const avgPrice = prices.length ? (prices.reduce((a,b)=>a+b,0)/prices.length) : 0;
  const currentPrice = record.value / Math.max(1, record.quantity);
  const priceChange = avgPrice ? ((currentPrice - avgPrice)/avgPrice)*100 : 0;

  // build a tiny monthly series from sample source for the same product
  const byMonth: Record<string, number[]> = {};
  source.forEach(s => {
    if(s.product !== record.product) return;
    const m = s.date.slice(0,7); // YYYY-MM
    byMonth[m] = byMonth[m] || [];
    byMonth[m].push(s.value / Math.max(1, s.quantity));
  });
  const months = Object.keys(byMonth).sort();
  const monthAvg = months.map(m => Math.round((byMonth[m].reduce((a,b)=>a+b,0)/byMonth[m].length)*100)/100);

  return (
    <div className="sticky top-24 bg-white p-4 border rounded">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="text-lg font-semibold">Shipment Details</h4>
          <div className="text-sm text-ttgray-500">ID #{record.id} • {record.product} • {record.hs}</div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onClose} className="text-sm">Close</button>
        </div>
      </div>

      <div className="mt-3 space-y-3 text-sm">
        <div><strong>Company:</strong> {record.name}</div>
        <div><strong>Product:</strong> {record.product}</div>
        <div className="flex gap-3">
          <div><strong>HS Code:</strong> {record.hs}</div>
          <div><strong>Country:</strong> {record.country}</div>
        </div>
        <div className="flex gap-3">
          <div><strong>Quantity:</strong> {record.quantity.toLocaleString()}</div>
          <div><strong>Value:</strong> ${record.value.toLocaleString()}</div>
        </div>
        <div><strong>Date:</strong> {record.date}</div>
      </div>

      {/* Analytics & Insights (compact) */}
      <div className="mt-4 border-t pt-4">
        <h5 className="text-md font-semibold">Analytics & Insights</h5>
        <div className="mt-2">
          <div className="flex items-center gap-4">
            <div className="w-40">
              <svg width="300" height="80" viewBox="0 0 300 80" className="block">
                <path d={smallLinePath(monthAvg, 300, 80)} fill="none" stroke="#2563eb" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="flex-1 text-sm">
              <div className="flex items-center gap-3">
                <div>
                  <div className="text-2xl font-bold">${currentPrice.toFixed(2)}</div>
                  <div className="text-ttgray-500">Current Price / Unit</div>
                </div>
                <div>
                  <div className="text-xl">{avgPrice ? `$${avgPrice.toFixed(2)}` : '—'}</div>
                  <div className="text-ttgray-500">6-Month Average</div>
                </div>
                <div className={`text-sm font-medium ${priceChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)}%
                </div>
              </div>

              <div className="mt-3 text-sm text-ttgray-600">This product&apos;s current unit price is {priceChange >= 0 ? 'above' : 'below'} the 6-month average.</div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h6 className="font-semibold">Supplier Snapshot</h6>
          <div className="grid grid-cols-3 gap-2 text-sm mt-2">
            <div className="p-2 border rounded">
              <div className="text-2xl font-bold">{sameProduct.length + 1}</div>
              <div className="text-ttgray-500">Total Shipments (sample)</div>
            </div>
            <div className="p-2 border rounded">
              <div className="text-2xl font-bold">{(avgPrice || 0).toFixed(2)}</div>
              <div className="text-ttgray-500">Avg Unit Price</div>
            </div>
            <div className="p-2 border rounded">
              <div className="text-2xl font-bold">{Math.round(priceChange)}%</div>
              <div className="text-ttgray-500">Price Change</div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h6 className="font-semibold">Similar Shipments</h6>
          <div className="mt-2 space-y-2 text-sm">
            {sameProduct.slice(0,3).map(s => (
              <div key={s.id} className="p-2 border rounded flex items-center justify-between">
                <div>
                  <div className="font-medium">{s.name}</div>
                  <div className="text-ttgray-500">{s.date} • ${s.value.toLocaleString()}</div>
                </div>
                <div><button className="text-sm text-ttblue-700">View</button></div>
              </div>
            ))}
            {sameProduct.length === 0 && <div className="text-ttgray-500">No similar shipments in sample data.</div>}
          </div>
        </div>
      </div>

      {/* Footer actions */}
      <div className="mt-4 border-t pt-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 border rounded">Previous</button>
          <button className="px-3 py-1 border rounded">Next</button>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 border rounded">Watchlist</button>
          <button className="px-3 py-1 border rounded">Compare</button>
          <button className="tt-cta-gradient text-white px-3 py-1 rounded">Export</button>
        </div>
      </div>
    </div>
  );
}
