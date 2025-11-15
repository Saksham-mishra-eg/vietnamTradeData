"use client";
import React from 'react';

export default function SpecialInquiries(){
  const cards = [
    {title:'Become a Partner', email:'partners@VietnamTradeData.com', cta:'Partnership Inquiry'},
    {title:'Media Relations', email:'press@VietnamTradeData.com', cta:'Media Inquiry'},
    {title:'Career Opportunities', email:'careers@VietnamTradeData.com', cta:'View Openings'},
    {title:'Investor Information', email:'investors@VietnamTradeData.com', cta:'Investor Inquiry'},
  ];

  return (
    <div className="bg-white rounded-lg p-4 shadow mb-6">
      <h4 className="font-semibold mb-3">Special Inquiries</h4>
      <div className="grid grid-cols-1 gap-3">
        {cards.map((c,i)=> (
          <div key={i} className="p-3 border rounded">
            <div className="font-semibold">{c.title}</div>
            <div className="text-sm text-ttgray-600">{c.email}</div>
            <button className="mt-2 text-ttblue-700">{c.cta}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
