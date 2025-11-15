"use client";

import React from 'react';
import { AnimatedContainer, TextStagger } from 'components/ui/hero-animated';
import { Search, Package, Building2, Globe, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from 'components/ui/button';
import { motion } from 'framer-motion';

export default function DataSampleSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(59, 130, 246, 0.15) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      {/* Floating Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl"
      />

      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <AnimatedContainer 
            transformDirection="bottom"
            transition={{ delay: 0, duration: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Live Search Platform</span>
            </div>
          </AnimatedContainer>

          <TextStagger
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            text="Search Vietnam Import Export Trade Data"
            as="h2"
          />
          
          <AnimatedContainer 
            transformDirection="bottom"
            transition={{ delay: 0.05, duration: 0.3 }}
          >
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access real-time shipment records, track competitors, and discover new business opportunities
            </p>
          </AnimatedContainer>
        </div>

        {/* Main Search Form */}
        <AnimatedContainer 
          transformDirection="bottom"
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10">
                <form className="space-y-6">
                  {/* Single Row Search */}
                  <div className="flex flex-col lg:flex-row gap-4">
                    {/* HS Code Input */}
                    <div className="flex-1 group">
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400 group-focus-within:text-blue-600 transition-colors">
                          <Package className="w-5 h-5" />
                        </div>
                        <input
                          type="text"
                          placeholder="Enter HS Code"
                          className="w-full pl-12 pr-5 py-4 text-gray-900 bg-white/50 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 font-medium placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    {/* Product Description Input */}
                    <div className="flex-1 group">
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 group-focus-within:text-purple-600 transition-colors">
                          <Search className="w-5 h-5" />
                        </div>
                        <input
                          type="text"
                          placeholder="Product Description (e.g., Coffee, Electronics)"
                          className="w-full pl-12 pr-5 py-4 text-gray-900 bg-white/50 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300 font-medium placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    {/* Import/Export Dropdown */}
                    <div className="lg:w-48 group">
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-green-400 group-focus-within:text-green-600 transition-colors pointer-events-none">
                          <TrendingUp className="w-5 h-5" />
                        </div>
                        <select className="w-full pl-12 pr-5 py-4 text-gray-900 bg-white/50 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100 outline-none transition-all duration-300 font-medium cursor-pointer appearance-none">
                          <option value="import">Import</option>
                          <option value="export">Export</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Search Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-stretch"
                    >
                      <Button
                        type="submit"
                        className="w-full lg:w-auto h-auto bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-700 hover:via-blue-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                      >
                        <Search className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                        Search
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </div>

                  {/* Info Banner */}
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-500 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Live Data</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>10M+ Records</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      <span>Secure & Private</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </AnimatedContainer>

        {/* Stats Footer */}
        <AnimatedContainer 
          transformDirection="bottom"
          transition={{ delay: 0.15, duration: 0.3 }}
        >
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { number: '10M+', label: 'Shipment Records', icon: Package, color: 'from-blue-500 to-cyan-500' },
              { number: '50K+', label: 'Active Companies', icon: Building2, color: 'from-purple-500 to-pink-500' },
              { number: '120+', label: 'Countries Covered', icon: Globe, color: 'from-orange-500 to-red-500' },
              { number: '24/7', label: 'Data Updates', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.03 * index, duration: 0.3 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 text-center">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${stat.color} p-2.5 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-full h-full text-white" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
}
