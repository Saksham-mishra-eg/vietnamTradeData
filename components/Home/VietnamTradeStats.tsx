"use client";

import React from 'react';
import { TrendingUp, ArrowUpRight, Sparkles, Globe2, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const industries = [
  { name: 'Electronics & Electrical', value: '35%', trend: '+12%', color: 'from-blue-500 to-cyan-500' },
  { name: 'Textiles & Apparel', value: '18%', trend: '+8%', color: 'from-purple-500 to-pink-500' },
  { name: 'Machinery & Equipment', value: '15%', trend: '+15%', color: 'from-orange-500 to-red-500' },
  { name: 'Footwear & Leather', value: '12%', trend: '+6%', color: 'from-green-500 to-emerald-500' },
  { name: 'Seafood & Agriculture', value: '10%', trend: '+9%', color: 'from-yellow-500 to-orange-500' },
  { name: 'Furniture & Wood', value: '10%', trend: '+11%', color: 'from-indigo-500 to-purple-500' },
];

export default function VietnamTradeStats() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <Globe2 className="w-4 h-4" />
            Vietnam Trade Overview
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Leading <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Global Trade</span> Partner
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive import-export data from one of Asia&apos;s fastest-growing economies
          </p>
        </motion.div>
      

        {/* Major Industries Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-10" />
          <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                  <h3 className="text-3xl font-bold text-gray-900">Major Industries</h3>
                </div>
                <p className="text-gray-600">Key sectors driving Vietnam&apos;s trade growth</p>
              </div>
              <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all group">
                View All
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Industries Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  whileHover={{ scale: 1.03 }}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all cursor-pointer"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                  
                  {/* Content */}
                  <div className="relative">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                          {industry.name}
                        </h4>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500">Market Share</span>
                        </div>
                      </div>
                      <div className={`p-2 rounded-xl bg-gradient-to-br ${industry.color} shadow-sm`}>
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-3xl font-bold text-gray-900">{industry.value}</div>
                        <div className="text-sm text-green-600 font-medium flex items-center gap-1 mt-1">
                          <TrendingUp className="w-3 h-3" />
                          {industry.trend} YoY
                        </div>
                      </div>
                    </div>

                    {/* Mini Progress Bar */}
                    <div className="mt-4 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: industry.value }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 + index * 0.05 }}
                        className={`h-full bg-gradient-to-r ${industry.color} rounded-full`}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile View All Button */}
            <button className="md:hidden w-full mt-6 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all group">
              View All Industries
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}