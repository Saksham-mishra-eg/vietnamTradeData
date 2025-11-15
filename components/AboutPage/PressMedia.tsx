"use client";

import React from 'react';

const press = [
  {pub:'TradeWeekly', title:'How VietnamTradeData is Revolutionizing Global Trade', date:'2025-06-12'},
  {pub:'MarketWatch', title:'Top Data Platforms for Import-Export Businesses', date:'2024-11-02'},
  {pub:'LogisticsToday', title:'VietnamTradeData Expands Coverage to 150+ Countries', date:'2024-03-18'}
];

export default function PressMedia(){
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold mb-6">In The News</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {press.map((p,i)=> (
            <div key={i} className="bg-white p-4 rounded shadow">
              <div className="font-semibold">{p.pub}</div>
              <div className="mt-2">{p.title}</div>
              <div className="text-sm text-ttgray-600 mt-2">{p.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
