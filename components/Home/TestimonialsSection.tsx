"use client";

import React from 'react';

const testimonials = [
  {quote:'VietnamTradeData gave us the edge to identify new suppliers quickly.', name:'Nguyen T.', company:'GlobalTrade Co.'},
  {quote:'Accurate, fast, and reliable — essential for our sourcing team.', name:'Tran M.', company:'Importers Inc.'},
  {quote:'The API integration saved us weeks of manual work.', name:'Le H.', company:'Logistics Ltd.'}
];

export default function TestimonialsSection(){
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t,i)=> (
            <div key={i} className="bg-white p-6 rounded-lg shadow">
              <div className="text-2xl text-ttblue-500 mb-3">“</div>
              <p className="mb-4">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-ttblue-600 flex items-center justify-center text-white">{t.name.split(' ')[0][0]}</div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-ttgray-500">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
