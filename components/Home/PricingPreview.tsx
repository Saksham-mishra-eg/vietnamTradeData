"use client";

import React from 'react';

const plans = [
  {name:'Basic', price:'$99', subtitle:'/month', features:['1,000 searches/month','Basic filters','Email support']},
  {name:'Professional', price:'$299', subtitle:'/month', popular:true, features:['10,000 searches/month','Advanced analytics','Priority support','API access']},
  {name:'Enterprise', price:'Custom', subtitle:'/contact', features:['Unlimited searches','Custom reports','Dedicated account manager','White-label options']}
];

export default function PricingPreview(){
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p,idx)=> (
            <div key={idx} className={`p-6 rounded-lg shadow ${p.popular? 'scale-105 border-2 border-ttblue-500':''}`}>
              {p.popular && <div className="text-xs uppercase bg-ttblue-500 text-white inline-block px-3 py-1 rounded mb-3">Popular</div>}
              <h3 className="text-2xl font-semibold">{p.name}</h3>
              <div className="text-3xl font-bold my-3">{p.price} <span className="text-sm">{p.subtitle}</span></div>
              <ul className="text-left mb-4">
                {p.features.map((f,i)=> <li key={i} className="py-1">• {f}</li>)}
              </ul>
              <button className={`w-full ${p.popular? 'tt-cta-gradient text-white':'border border-ttblue-500 text-ttblue-700'} py-2 rounded`}>Choose Plan</button>
            </div>
          ))}
        </div>
        <div className="mt-4"><a href="#" className="text-ttblue-600">View All Plans</a></div>
      </div>
    </section>
  );
}
