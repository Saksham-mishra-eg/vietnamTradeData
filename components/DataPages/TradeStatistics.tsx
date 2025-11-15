"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3 } from 'lucide-react';

interface TradeStatisticsProps {
  type: 'import' | 'export';
}

const importData = [
  { year: '2009', value: 69948 },
  { year: '2010', value: 84838 },
  { year: '2011', value: 106749 },
  { year: '2012', value: 113780 },
  { year: '2013', value: 132032 },
  { year: '2014', value: 147839 },
  { year: '2015', value: 165775 },
  { year: '2016', value: 174978 },
  { year: '2017', value: 210625 },
  { year: '2018', value: 258207 },
];

const exportData = [
  { year: '2009', value: 57096 },
  { year: '2010', value: 72236 },
  { year: '2011', value: 96905 },
  { year: '2012', value: 114529 },
  { year: '2013', value: 132032 },
  { year: '2014', value: 150217 },
  { year: '2015', value: 162016 },
  { year: '2016', value: 176580 },
  { year: '2017', value: 213931 },
  { year: '2018', value: 290395 },
];

export default function TradeStatistics({ type }: TradeStatisticsProps) {
  const data = type === 'import' ? importData : exportData;
  const maxValue = Math.max(...data.map(d => d.value));
  
  const title = type === 'import' 
    ? 'Vietnam Imports in the Last 10 Years' 
    : 'Vietnam Exports in the Last 10 Years';
  
  const description = type === 'import'
    ? 'Our Vietnam import data reveal that the country recorded a rise in the total value in the last five years. The highest value of about US$ 250,000 million registered in 2018. Check Vietnam\'s total imports recorded in the last ten years below.'
    : 'Vietnam recorded a constant rise in total exports during the last five years. Major increase in the value of total export commodities recorded in the last two years when Vietnam did above US$ 200,000 million of export business in the world. Let\'s check Vietnam export statistics of the last ten years.';

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl"
        />
      </div>

      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-100"
          >
            <TrendingUp className="w-4 h-4" />
            Historical Statistics
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Data Table */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <BarChart3 className="w-6 h-6" />
                Annual Trade Values
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      Year
                    </th>
                    <th className="text-right py-4 px-6 text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      Value (USD Million)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <motion.tr
                      key={item.year}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.03 }}
                      className="border-b border-gray-100 hover:bg-blue-50 transition-colors"
                    >
                      <td className="py-3 px-4 text-gray-900 font-medium text-xs">
                        {item.year}
                      </td>
                      <td className="py-3 px-4 text-right text-gray-900 font-medium text-xs">
                        {item.value.toLocaleString()}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">10-Year Growth</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {Math.round(((data[data.length - 1].value - data[0].value) / data[0].value) * 100)}%
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 mb-1">Peak Year</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {data[data.length - 1].year}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Chart Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              Growth Trend Visualization
            </h3>

            {/* Bar Chart */}
            <div className="space-y-4">
              {data.map((item, index) => {
                const percentage = (item.value / maxValue) * 100;
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-gray-700 w-16">
                        {item.year}
                      </span>
                      <span className="font-bold text-gray-900">
                        ${(item.value / 1000).toFixed(0)}B
                      </span>
                    </div>
                    <div className="relative h-8 bg-gray-100 rounded-lg overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 + index * 0.05, ease: "easeOut" }}
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-md"
                      />
                      <div className="absolute inset-0 flex items-center px-3">
                        <span className="text-xs font-medium text-white drop-shadow-md">
                          {percentage.toFixed(0)}%
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Summary Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="mt-8 pt-8 border-t border-gray-200 grid grid-cols-2 gap-4"
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4">
                <p className="text-sm text-gray-600 mb-1">Average Annual</p>
                <p className="text-xl font-bold text-blue-600">
                  ${(data.reduce((sum, d) => sum + d.value, 0) / data.length / 1000).toFixed(1)}B
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4">
                <p className="text-sm text-gray-600 mb-1">Latest Value</p>
                <p className="text-xl font-bold text-green-600">
                  ${(data[data.length - 1].value / 1000).toFixed(1)}B
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
