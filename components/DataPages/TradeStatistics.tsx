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
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              Growth Trend Visualization
            </h3>

            {/* Line Chart Visualization */}
            <div className="relative h-80 mb-8">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 bottom-8 w-16 flex flex-col justify-between text-right pr-3 text-xs text-gray-500">
                <span>${(maxValue / 1000).toFixed(0)}B</span>
                <span>${(maxValue * 0.75 / 1000).toFixed(0)}B</span>
                <span>${(maxValue * 0.5 / 1000).toFixed(0)}B</span>
                <span>${(maxValue * 0.25 / 1000).toFixed(0)}B</span>
                <span>$0</span>
              </div>

              {/* Chart area */}
              <div className="ml-16 h-full relative">
                {/* Horizontal grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between pb-8">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-full border-t border-gray-200" />
                  ))}
                </div>

                {/* Line and area chart */}
                <svg className="absolute inset-0 w-full h-full pb-8" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  
                  {/* Area under the line */}
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    d={`
                      M ${data.map((d, i) => `${(i / (data.length - 1)) * 100}% ${100 - (d.value / maxValue) * 100}%`).join(' L ')}
                      L 100% 100%
                      L 0% 100%
                      Z
                    `}
                    fill="url(#areaGradient)"
                  />
                  
                  {/* Line path */}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    d={`M ${data.map((d, i) => `${(i / (data.length - 1)) * 100}% ${100 - (d.value / maxValue) * 100}%`).join(' L ')}`}
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="3"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>

                {/* Data points */}
                {data.map((item, index) => {
                  const x = (index / (data.length - 1)) * 100;
                  const y = 100 - (item.value / maxValue) * 100;
                  return (
                    <motion.div
                      key={item.year}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                      className="absolute w-3 h-3 -ml-1.5 -mt-1.5 group cursor-pointer"
                      style={{ left: `${x}%`, top: `${y}%` }}
                    >
                      <div className="w-full h-full bg-blue-600 rounded-full border-2 border-white shadow-lg" />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block">
                        <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded-lg shadow-xl whitespace-nowrap">
                          <div className="font-semibold">{item.year}</div>
                          <div className="text-blue-300">${(item.value / 1000).toFixed(1)}B</div>
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

                {/* X-axis labels */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 pt-2">
                  {data.map((item, index) => (
                    index % 2 === 0 ? (
                      <span key={item.year}>{item.year}</span>
                    ) : (
                      <span key={item.year} className="md:inline hidden">{item.year}</span>
                    )
                  ))}
                </div>
              </div>
            </div>

            {/* Key Insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="space-y-3"
            >
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4">
                  <p className="text-xs text-gray-600 mb-1">Average Annual</p>
                  <p className="text-lg font-bold text-blue-600">
                    ${(data.reduce((sum, d) => sum + d.value, 0) / data.length / 1000).toFixed(1)}B
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4">
                  <p className="text-xs text-gray-600 mb-1">Latest Value</p>
                  <p className="text-lg font-bold text-green-600">
                    ${(data[data.length - 1].value / 1000).toFixed(1)}B
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4">
                <p className="text-xs text-gray-600 mb-1">Year-over-Year Growth Rate</p>
                <p className="text-lg font-bold text-purple-600">
                  {((data[data.length - 1].value - data[data.length - 2].value) / data[data.length - 2].value * 100).toFixed(1)}%
                </p>
                <p className="text-xs text-gray-500 mt-1">From {data[data.length - 2].year} to {data[data.length - 1].year}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
