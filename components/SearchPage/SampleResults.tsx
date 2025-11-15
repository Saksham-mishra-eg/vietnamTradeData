"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Download, ArrowRight } from 'lucide-react';

export default function SampleResults() {
  const sampleData = [
    {
      date: '2025-01-10',
      product: 'Laptop Computers',
      hsCode: '8471.30.00',
      exporter: 'Tech Solutions Ltd.',
      importer: 'Global Electronics Co.',
      origin: 'China',
      destination: 'Vietnam',
      quantity: '500 Units',
      value: '$375,000',
      port: 'Shanghai → Ho Chi Minh'
    },
    {
      date: '2025-01-09',
      product: 'Cotton Fabric',
      hsCode: '5208.32.00',
      exporter: 'Textile Export Corp',
      importer: 'Fashion Industries',
      origin: 'India',
      destination: 'Vietnam',
      quantity: '10,000 KG',
      value: '$45,000',
      port: 'Mumbai → Haiphong'
    },
    {
      date: '2025-01-08',
      product: 'Industrial Machinery',
      hsCode: '8479.89.00',
      exporter: 'Machinery International',
      importer: 'Manufacturing Corp.',
      origin: 'Germany',
      destination: 'Vietnam',
      quantity: '25 Units',
      value: '$1,250,000',
      port: 'Hamburg → Da Nang'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white relative">
      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Sample Search Results
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Preview of the detailed information you&apos;ll receive with each search
          </p>
        </motion.div>

        {/* Results Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
        >
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Product</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">HS Code</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Exporter</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Importer</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Route</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Value</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-slate-100 hover:bg-blue-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-slate-600 whitespace-nowrap">{row.date}</td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-900">{row.product}</div>
                      <div className="text-xs text-slate-500">{row.quantity}</div>
                    </td>
                    <td className="px-6 py-4 text-sm font-mono text-ttblue-600">{row.hsCode}</td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-slate-900">{row.exporter}</div>
                      <div className="text-xs text-slate-500">{row.origin}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-slate-900">{row.importer}</div>
                      <div className="text-xs text-slate-500">{row.destination}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{row.port}</td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-green-600">{row.value}</div>
                    </td>
                    <td className="px-6 py-4">
                      <button className="p-2 hover:bg-ttblue-100 rounded-lg transition-colors group">
                        <Eye className="w-5 h-5 text-slate-400 group-hover:text-ttblue-600" />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden p-4 space-y-4">
            {sampleData.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-lg p-4 space-y-3"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-semibold text-slate-900">{row.product}</div>
                    <div className="text-sm text-slate-600">{row.date}</div>
                  </div>
                  <div className="font-semibold text-green-600">{row.value}</div>
                </div>
                <div className="text-sm space-y-1">
                  <div><span className="text-slate-500">HS Code:</span> <span className="font-mono text-ttblue-600">{row.hsCode}</span></div>
                  <div><span className="text-slate-500">From:</span> {row.exporter}</div>
                  <div><span className="text-slate-500">To:</span> {row.importer}</div>
                  <div><span className="text-slate-500">Route:</span> {row.port}</div>
                </div>
                <button className="w-full px-4 py-2 bg-ttblue-600 text-white rounded-lg text-sm font-medium hover:bg-ttblue-700 transition-colors flex items-center justify-center gap-2">
                  <Eye className="w-4 h-4" />
                  View Details
                </button>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
            <div className="text-sm text-slate-600">
              Showing 3 of 10,000+ results
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-ttblue-600 text-white rounded-lg text-sm font-medium hover:bg-ttblue-700 transition-colors">
              <Download className="w-4 h-4" />
              Export Results
            </button>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8"
        >
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
            Start Searching Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
