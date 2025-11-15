"use client";

import React from 'react';

type Plan = {
  id: string;
  name: string;
  priceMonthly: number;
  priceAnnual?: number;
  features: string[];
};

const plans: Plan[] = [
  { id:'starter', name:'Starter', priceMonthly:99, priceAnnual:990, features:['Access to sample data','Up to 10k queries/mo','Email support'] },
  { id:'growth', name:'Growth', priceMonthly:399, priceAnnual:3990, features:['Full dataset access','50k queries/mo','Priority support','API access'] },
  { id:'enterprise', name:'Enterprise', priceMonthly:1499, priceAnnual:14990, features:['Unlimited queries','Dedicated account manager','SLA & onboarding','Custom integrations'] }
];

export default function PricingCards({monthly}:{monthly:boolean}){
  return (
    <section id="plans" className="py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map(plan=> (
          <div key={plan.id} className="bg-white rounded-lg p-6 shadow">
            <h4 className="text-xl font-semibold mb-2">{plan.name}</h4>
            <div className="text-3xl font-bold mb-4">${monthly ? plan.priceMonthly : plan.priceAnnual}</div>
            <ul className="mb-4 space-y-2 text-sm">
              {plan.features.map((f,i)=> <li key={i}>• {f}</li>)}
            </ul>
            <button className="tt-cta-gradient text-white px-4 py-2 rounded">Start {plan.name}</button>
          </div>
        ))}
      </div>
    </section>
  );
}
