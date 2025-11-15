"use client";

import React from 'react';

const testimonials = [
  {quote:'VietnamTradeData transformed our sourcing strategy.', name:'James Wilson', company:'TechImports Inc.'},
  {quote:'We found 50+ suppliers within the first month.', name:'Lina Perez', company:'Global Sourcing'},
  {quote:'Excellent data quality and support.', name:'Ozan Kaya', company:'Logistics Pro'}
];

export default function ClientTestimonials(){
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold mb-6">What Our Clients Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t,i)=> (
            <div key={i} className="bg-white p-6 rounded shadow">
              <div className="text-2xl text-ttblue-500 mb-2">“</div>
              <p className="mb-4">{t.quote}</p>
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-ttgray-600">{t.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
