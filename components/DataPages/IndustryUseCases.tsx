"use client";

import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import FlightIcon from '@mui/icons-material/Flight';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GovernmentIcon from '@mui/icons-material/Domain';
import FactoryIcon from '@mui/icons-material/Factory';

const cases = [
  {title:'Importers & Exporters', icon:<LocalShippingIcon/>, desc:'Find reliable trading partners and expand market reach'},
  {title:'Market Research Firms', icon:<AssessmentIcon/>, desc:'Conduct comprehensive trade analysis and industry reports'},
  {title:'Logistics Companies', icon:<FlightIcon/>, desc:'Track shipment volumes and optimize route planning'},
  {title:'Financial Institutions', icon:<AccountBalanceIcon/>, desc:'Assess trade finance risks and opportunities'},
  {title:'Government Agencies', icon:<GovernmentIcon/>, desc:'Monitor trade compliance and policy effectiveness'},
  {title:'Manufacturers', icon:<FactoryIcon/>, desc:'Source raw materials and identify distribution channels'}
];

export default function IndustryUseCases(){
  return (
    <section className="py-16 bg-gray-50">
      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6">Who Uses This Data?</h2>
        <div className="flex gap-4 overflow-x-auto py-2">
          {cases.map((c,i)=> (
            <div key={i} className="min-w-[260px] bg-white p-6 rounded-lg shadow">
              <div className="text-2xl text-ttblue-600 mb-3">{c.icon}</div>
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-sm text-ttgray-600 mt-2">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
