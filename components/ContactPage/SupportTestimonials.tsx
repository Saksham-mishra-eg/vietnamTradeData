"use client";
import React from 'react';

const testimonials = [
  {quote:'The team was incredibly helpful in setting up our account. Response was within hours!', name:'Sarah Chen, CTO, GlobalTrade Solutions'},
  {quote:'Support integrated our API quickly and professionally.', name:'Ozan Yilmaz, LogiCorp'},
  {quote:'Fast, accurate data and excellent service.', name:'Maria Gomez, Importers Inc.'}
];

export default function SupportTestimonials(){
  return (
    <div className="bg-white rounded-lg p-4 shadow mb-6">
      <h4 className="font-semibold mb-3">What Our Clients Say About Our Support</h4>
      <div className="space-y-3">
        {testimonials.map((t,i)=> (
          <div key={i} className="p-3 border rounded">
            <div className="italic">&ldquo;{t.quote}&rdquo;</div>
            <div className="text-sm font-medium mt-2">{t.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
