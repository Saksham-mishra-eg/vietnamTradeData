"use client";

import React from 'react';

const offices = [
  {city:'Hanoi, Vietnam', addr:'123 Trade Street, Levent, Hanoi', phone:'+84 212 XXX XXXX', email:'Hanoi@VietnamTradeData.com'},
  {city:'London, UK', addr:'45 Business Avenue, London EC1', phone:'+44 20 XXXX XXXX', email:'london@VietnamTradeData.com'},
  {city:'New York, USA', addr:'789 Trade Plaza, NY 10001', phone:'+1 212 XXX XXXX', email:'newyork@VietnamTradeData.com'},
  {city:'Singapore', addr:'101 Marina Bay, Singapore', phone:'+65 XXXX XXXX', email:'singapore@VietnamTradeData.com'}
];

export default function OfficeLocations(){
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold mb-6">Our Global Presence</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offices.map((o,i)=> (
            <div key={i} className="bg-white p-4 rounded shadow">
              <div className="font-semibold">{o.city}</div>
              <div className="text-sm text-ttgray-600">{o.addr}</div>
              <div className="text-sm mt-2">{o.phone}</div>
              <div className="text-sm">{o.email}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
