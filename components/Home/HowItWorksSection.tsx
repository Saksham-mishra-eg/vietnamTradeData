"use client";

import React from 'react';
import { ArrowUp, ArrowDown, Database, TrendingUp, Users, Globe } from 'lucide-react';

const stats = [
  {
    title: 'Total Shipment Records',
    value: 10200000,
    delta: 15.1,
    lastMonth: 8850000,
    positive: true,
    icon: Database,
    format: (v: number) => `${(v / 1_000_000).toFixed(1)}M`,
  },
  {
    title: 'Active Users',
    value: 5420,
    delta: 12.3,
    lastMonth: 4830,
    positive: true,
    icon: Users,
  },
  {
    title: 'Countries Covered',
    value: 120,
    delta: 8.5,
    lastMonth: 110,
    positive: true,
    icon: Globe,
  },
  {
    title: 'Data Updates (Daily)',
    value: 50000,
    delta: 5.2,
    lastMonth: 47500,
    positive: true,
    icon: TrendingUp,
    format: (v: number) => `${(v / 1000).toFixed(0)}K`,
  },
];

function formatNumber(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
  if (n >= 1_000) return n.toLocaleString();
  return n.toString();
}

export default function HowItWorksSection(){
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Vietnam Trade Data at Scale</h2>
          <p className="text-gray-600">Real-time statistics powering your trade intelligence</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                    stat.positive 
                      ? 'bg-green-50 text-green-700' 
                      : 'bg-red-50 text-red-700'
                  }`}>
                    {stat.positive ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                    {stat.delta}%
                  </div>
                </div>
                
                <div className="space-y-1 mb-3">
                  <p className="text-sm text-gray-600 font-medium">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.format ? stat.format(stat.value) : formatNumber(stat.value)}
                  </p>
                </div>
                
                <div className="text-xs text-gray-500 pt-3 border-t border-gray-100">
                  Vs last month: <span className="font-semibold text-gray-700">
                    {stat.format ? stat.format(stat.lastMonth) : formatNumber(stat.lastMonth)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
