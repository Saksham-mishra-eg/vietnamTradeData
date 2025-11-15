"use client";

import React from 'react';
import { AnimatedContainer, TextStagger } from 'components/ui/hero-animated';
import { TrendingUp, Eye, Lightbulb, BarChart3, Download } from 'lucide-react';

const capabilities = [
  {
    icon: TrendingUp,
    text: 'Find Real Importers, Exporters, Manufacturers in Vietnam'
  },
  {
    icon: Eye,
    text: 'Monitor shipment details and analyze competitor imports & exports'
  },
  {
    icon: Lightbulb,
    text: 'Determine factors for driving success in your import-export business'
  },
  {
    icon: BarChart3,
    text: 'Help financial institutions and logistics companies find best prospects'
  }
];

export default function WhatWeDo() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <AnimatedContainer 
          transformDirection="bottom"
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-blue-900/95 to-purple-900/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>

            <div className="relative z-10">
              {/* Section Header */}
              <div className="text-center mb-10">
                <TextStagger
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
                  text="What We Do?"
                  as="h2"
                />
                <AnimatedContainer 
                  transformDirection="bottom"
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                    We provide Vietnam import export data and trade information which can help you in many ways.
                  </p>
                </AnimatedContainer>
              </div>

              {/* Capabilities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {capabilities.map((capability, index) => (
                  <AnimatedContainer 
                    key={index}
                    transformDirection={index % 2 === 0 ? 'left' : 'right'}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/10 hover:border-white/20 group">
                      <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <capability.icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-gray-100 leading-relaxed pt-1 text-base">{capability.text}</p>
                    </div>
                  </AnimatedContainer>
                ))}
              </div>

              {/* CTA Section */}
              <AnimatedContainer 
                transformDirection="bottom"
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <div className="text-center pt-6 border-t border-white/20">
                  <p className="text-blue-100 mb-6 text-lg">
                    Ready to explore comprehensive Vietnam trade data?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="/vietnam-export-import-sample.xls" 
                      download
                      className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-900 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <Download className="w-5 h-5" />
                      Download Sample Report
                    </a>
                    <a 
                      href="/explore-data"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-white/20"
                    >
                      <BarChart3 className="w-5 h-5" />
                      Explore Live Data
                    </a>
                  </div>
                </div>
              </AnimatedContainer>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
}
