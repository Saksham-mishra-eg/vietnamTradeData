"use client";

import React from 'react';
import { TrendingUp, TrendingDown, Factory, Cpu, Package, Building2, Zap, Coffee, Wheat, Ship, Hammer, Factory as FactoryIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const industries = [
  { name: 'Electronics', icon: Cpu },
  { name: 'Food Processing', icon: Package },
  { name: 'Construction', icon: Building2 },
  { name: 'Mining', icon: Hammer },
  { name: 'Footwear', icon: Package },
  { name: 'Seafood', icon: Ship },
  { name: 'Crude Oil', icon: Zap },
  { name: 'Rice', icon: Wheat },
  { name: 'Coffee', icon: Coffee },
  { name: 'Steel', icon: FactoryIcon }
];

export default function VietnamTradeStats() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* 50-50 Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* LEFT SIDE: Vietnam Import Export Data Online */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-ttblue-100"
          >
            {/* Section Title */}
            <div className="mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05, duration: 0.3 }}
                className="text-3xl font-bold text-gray-900 mb-3"
              >
                Vietnam Import Export Data Online
              </motion.h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="w-24 h-1 bg-gradient-to-r from-ttblue-600 to-ttblue-500"
              />
            </div>

            {/* Vietnam Exports */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.3 }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Vietnam Exports</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                  <div className="text-xs font-medium text-gray-600 mb-1">Global Ranking</div>
                  <div className="text-3xl font-bold text-green-700">20th</div>
                  <div className="text-xs text-gray-500 mt-1">in Global Exports</div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                  <div className="text-xs font-medium text-gray-600 mb-1">Total Value (2018)</div>
                  <div className="text-3xl font-bold text-green-700">$290B</div>
                  <div className="text-xs text-gray-500 mt-1">US Dollars</div>
                </div>
              </div>
            </motion.div>

            {/* Vietnam Imports */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-ttblue-500 to-ttblue-600 p-3 rounded-xl">
                  <TrendingDown className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Vietnam Imports</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-ttblue-50 to-ttblue-100 rounded-xl p-4 border border-ttblue-200">
                  <div className="text-xs font-medium text-gray-600 mb-1">Global Ranking</div>
                  <div className="text-3xl font-bold text--700">19th</div>
                  <div className="text-xs text-gray-500 mt-1">in Global Imports</div>
                </div>
                
                <div className="bg-gradient-to-br from-ttblue-50 to-ttblue-100 rounded-xl p-4 border border-ttblue-200">
                  <div className="text-xs font-medium text-gray-600 mb-1">Total Value (2018)</div>
                  <div className="text-3xl font-bold text-ttblue-700">$258B</div>
                  <div className="text-xs text-gray-500 mtttblue-1">US Dollars</div>
                </div>
              </div>
            </motion.div>

            {/* Bottom Note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-6 pt-6 border-t border-gray-200"
            >
              <p className="text-sm text-gray-600 text-center">
                Leading global trade partner with comprehensive data coverage
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Vietnam Major Industries */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-ttblue-100"
          >
            {/* Section Title */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-gradient-to-br from-ttblue-600 to-ttblue-800 p-3 rounded-xl">
                  <Factory className="w-6 h-6 text-white" />
                </div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05, duration: 0.3 }}
                  className="text-3xl font-bold text-gray-900"
                >
                  Vietnam Major Industries
                </motion.h2>
              </div>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="w-24 h-1 bg-gradient-to-r from-ttblue-600 to-ttblue-500"
              />
            </div>

            {/* Industries Grid */}
            <div className="grid grid-cols-2 gap-4">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.03 * index, duration: 0.3 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-br from-ttblue-50 to-white rounded-xl p-4 border border-ttblue-200 hover:border-ttblue-400 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-gradient-to-br from-ttblue-500 to-ttblue-600 p-2 rounded-lg group-hover:from-ttblue-600 group-hover:to-ttblue-800 transition-all duration-300">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-sm font-semibold text-gray-700 group-hover:text-ttblue-700 transition-colors">
                        {industry.name}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Bottom Note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.3 }}
              className="mt-6 pt-6 border-t border-gray-200"
            >
              <p className="text-sm text-gray-600 text-center">
                Vietnam&apos;s diverse industrial landscape drives its position as a leading global trade partner
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
