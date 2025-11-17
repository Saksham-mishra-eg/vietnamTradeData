"use client";

import React from 'react';
import { AnimatedContainer, TextStagger } from 'components/ui/hero-animated';
import { Search, BarChart3, Users } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Track Shipment Information',
    description: 'Track information of shipments which depart from or enter into Vietnam with real-time updates',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: BarChart3,
    title: 'Search Trade Data Online',
    description: 'Search trade data online and information about Vietnam imports and exports with advanced filters',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Users,
    title: 'Competitor Intelligence',
    description: 'Access actual market intelligence information of your competitors and analyze their strategies',
    color: 'from-orange-500 to-red-500'
  }
];

export default function DashboardShowcase() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <AnimatedContainer 
            transformDirection="bottom"
            transition={{ duration: 0.3 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-blue-500/20 text-blue-300 font-medium text-sm uppercase tracking-wider mb-4">
              Dashboard & Reports
            </span>
          </AnimatedContainer>
          
          <TextStagger
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            text="Powerful Analytics Dashboard"
            as="h2"
          />
          
          <AnimatedContainer 
            transformDirection="bottom"
            transition={{ delay: 0.05, duration: 0.3 }}
          >
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Interactive filters, real-time data, export capabilities and customizable views for comprehensive market intelligence
            </p>
          </AnimatedContainer>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <AnimatedContainer 
              key={index}
              transformDirection="bottom"
              transition={{ delay: 0.1 + index * 0.03, duration: 0.3 }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 group">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
