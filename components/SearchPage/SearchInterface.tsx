"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Package, Building2, Globe, SlidersHorizontal, Calendar, MapPin, ChevronDown } from 'lucide-react';
import { Button } from 'components/ui/button';
import { Input } from 'components/ui/input';
import { Label } from 'components/ui/label';

export default function SearchInterface() {
  const [activeTab, setActiveTab] = useState('hsCode');

  const tabs = [
    { id: 'hsCode', label: 'HS Code', icon: Package },
    { id: 'product', label: 'Product', icon: Search },
    { id: 'company', label: 'Company', icon: Building2 },
    { id: 'country', label: 'Country', icon: Globe },
    { id: 'advanced', label: 'Advanced', icon: SlidersHorizontal },
  ];

  const countries = [
    'Vietnam', 'United States', 'China', 'India', 'Germany', 'United Kingdom', 
    'Japan', 'South Korea', 'Singapore', 'Thailand', 'Malaysia', 'Indonesia'
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50 relative">
      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Start Your Search
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose your search method and access millions of verified trade records
          </p>
        </motion.div>

        {/* Search Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            {/* Tabs */}
            <div className="border-b border-slate-200 bg-slate-50">
              <div className="flex overflow-x-auto">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-6 py-4 font-medium transition-all relative whitespace-nowrap ${
                        activeTab === tab.id
                          ? 'text-ttblue-600 bg-white'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {tab.label}
                      {activeTab === tab.id && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-1 bg-ttblue-600"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Search Form */}
            <div className="p-8 md:p-10">
              <div className="space-y-6">
                {/* Main Search Input */}
                <div className="space-y-2">
                  <Label className="text-slate-700 font-medium text-base">
                    {activeTab === 'hsCode' && 'Enter HS Code'}
                    {activeTab === 'product' && 'Enter Product Name or Description'}
                    {activeTab === 'company' && 'Enter Company Name'}
                    {activeTab === 'country' && 'Select Country'}
                    {activeTab === 'advanced' && 'Advanced Search Criteria'}
                  </Label>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <Input
                      placeholder={
                        activeTab === 'hsCode' ? 'e.g., 8471.30.00' :
                        activeTab === 'product' ? 'e.g., Electronic Components' :
                        activeTab === 'company' ? 'e.g., ABC Trading Company' :
                        'Search...'
                      }
                      className="pl-12 h-14 text-lg border-slate-300 focus:border-ttblue-500 focus:ring-ttblue-500"
                    />
                  </div>
                  {activeTab === 'hsCode' && (
                    <p className="text-sm text-slate-500">
                      Enter 2, 4, 6, or 8 digit HS code for best results
                    </p>
                  )}
                </div>

                {/* Filter Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Trade Type */}
                  <div className="space-y-2">
                    <Label className="text-slate-700 font-medium">Trade Type</Label>
                    <div className="relative">
                      <select className="w-full h-12 px-4 border border-slate-300 rounded-lg appearance-none bg-white focus:border-ttblue-500 focus:ring-2 focus:ring-ttblue-500 focus:ring-opacity-20">
                        <option>Import</option>
                        <option>Export</option>
                        <option>Both</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Country */}
                  <div className="space-y-2">
                    <Label className="text-slate-700 font-medium">Country</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 z-10" />
                      <select className="w-full h-12 pl-10 pr-4 border border-slate-300 rounded-lg appearance-none bg-white focus:border-ttblue-500 focus:ring-2 focus:ring-ttblue-500 focus:ring-opacity-20">
                        <option>All Countries</option>
                        {countries.map((country) => (
                          <option key={country}>{country}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Date Range */}
                  <div className="space-y-2">
                    <Label className="text-slate-700 font-medium">Date Range</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 z-10" />
                      <select className="w-full h-12 pl-10 pr-4 border border-slate-300 rounded-lg appearance-none bg-white focus:border-ttblue-500 focus:ring-2 focus:ring-ttblue-500 focus:ring-opacity-20">
                        <option>Last 30 Days</option>
                        <option>Last 3 Months</option>
                        <option>Last 6 Months</option>
                        <option>Last Year</option>
                        <option>Custom Range</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Search Button */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all">
                    <Search className="w-5 h-5 mr-2" />
                    Search Live Data
                  </Button>
                </motion.div>

                {/* Popular Searches */}
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-sm text-slate-600 mb-3">Popular Searches:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Electronics', 'Textiles', 'Machinery', 'Chemicals', 'Agriculture'].map((term) => (
                      <button
                        key={term}
                        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm rounded-full transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center text-sm text-slate-600"
        >
          🔒 SSL Secure • ✓ Verified Data • 📊 Updated Daily
        </motion.div>
      </div>
    </section>
  );
}
