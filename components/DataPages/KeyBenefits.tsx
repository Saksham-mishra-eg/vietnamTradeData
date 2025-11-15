"use client";

import React from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HandshakeIcon from '@mui/icons-material/Handshake';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SecurityIcon from '@mui/icons-material/Security';
import BusinessIcon from '@mui/icons-material/Business';

const benefits = [
  {title:'Find New Suppliers/Buyers', icon:<HandshakeIcon/>, desc:'Discover verified Vietnamese importers/exporters actively trading your products'},
  {title:'Market Intelligence', icon:<TrendingUpIcon/>, desc:'Analyze market trends, pricing patterns, and demand forecasts'},
  {title:'Competitor Analysis', icon:<CompareArrowsIcon/>, desc:'Track competitor shipments, volumes, and market strategies'},
  {title:'Price Benchmarking', icon:<AttachMoneyIcon/>, desc:'Access real transaction prices to negotiate better deals'},
  {title:'Risk Assessment', icon:<SecurityIcon/>, desc:'Verify company credentials and trading history before partnering'},
  {title:'Business Development', icon:<BusinessIcon/>, desc:'Identify new market opportunities and expand your network'}
];

export default function KeyBenefits(){
  return (
    <section className="py-16">
      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6">How This Data Powers Your Business</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b,i)=> (
            <div key={i} className="bg-white p-6 rounded-lg border-t-4 border-ttblue-500 hover:shadow-lg">
              <div className="text-3xl text-ttblue-500 mb-3">{b.icon}</div>
              <h3 className="font-semibold mb-2">{b.title}</h3>
              <p className="text-sm text-ttgray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
