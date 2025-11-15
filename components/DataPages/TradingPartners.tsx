"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, TrendingUp, MapPin } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface TradingPartnersProps {
  type: 'import' | 'export';
}

const importPartners = [
  { country: 'China', value: 58, share: 27.7, color: '#3B82F6' },
  { country: 'South Korea', value: 46, share: 22.2, color: '#8B5CF6' },
  { country: 'Japan', value: 16, share: 7.9, color: '#EC4899' },
  { country: 'Taipei, Chinese', value: 12, share: 6.0, color: '#F59E0B' },
  { country: 'Thailand', value: 10, share: 5.0, color: '#10B981' },
  { country: 'United States of America', value: 9, share: 4.4, color: '#EF4444' },
  { country: 'Malaysia', value: 5, share: 2.8, color: '#06B6D4' },
  { country: 'Singapore', value: 5, share: 2.5, color: '#8B5CF6' },
  { country: 'India', value: 3, share: 1.8, color: '#F97316' },
  { country: 'Indonesia', value: 3, share: 1.7, color: '#14B8A6' },
];

const exportDestinations = [
  { country: 'United States of America', value: 41, share: 19.5, color: '#3B82F6' },
  { country: 'China', value: 35, share: 16.6, color: '#8B5CF6' },
  { country: 'Japan', value: 16, share: 7.9, color: '#EC4899' },
  { country: 'South Korea', value: 14, share: 6.9, color: '#F59E0B' },
  { country: 'Hong Kong', value: 7, share: 3.5, color: '#10B981' },
  { country: 'Netherlands', value: 7, share: 3.3, color: '#EF4444' },
  { country: 'Germany', value: 6, share: 3.0, color: '#06B6D4' },
  { country: 'United Kingdom', value: 5, share: 2.5, color: '#8B5CF6' },
  { country: 'United Arab Emirates', value: 5, share: 2.4, color: '#F97316' },
  { country: 'Thailand', value: 4, share: 2.2, color: '#14B8A6' },
];

export default function TradingPartners({ type }: TradingPartnersProps) {
  const isImport = type === 'import';
  const partners = isImport ? importPartners : exportDestinations;
  
  const title = isImport 
    ? "Which are Vietnam's Largest Import Sources?" 
    : "Which are Vietnam's Largest Export Destinations?";
  
  const description = isImport
    ? "As per import data of Vietnam, country's major import source is China from where it purchased goods worth US$ 58 billion in 2018. Vietnam's top 10 import partners shared more than 80% of the overall value. Import statistics of Vietnam reveals the following top ten import sources of the country."
    : "From a continental perspective, 52.8% of Vietnam exports by value were delivered to Asian countries while 21.8% were sold to North American countries. And remaining shipments were delivered in Europe, Latin America, Australia and Africa, customs data of Vietnam exports reveal. From a country perspective, Vietnam shipped goods to United States of America, followed by China, Japan, South Korea and Hong Kong. Check trade statistics of Vietnam recorded last year which shows trade figures of Vietnam's top 10 export destinations.";

  // Prepare data for pie chart
  const pieData = partners.map(p => ({
    name: p.country,
    value: p.share,
    fill: p.color
  }));

  const totalShare = partners.reduce((sum, p) => sum + p.share, 0);

  const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ name: string; value: number }> }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <p className="font-bold text-gray-900">{payload[0].name}</p>
          <p className="text-sm text-gray-600">
            Share: <span className="font-semibold text-blue-600">{payload[0].value.toFixed(1)}%</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.04, 0.06, 0.04],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute -top-40 right-1/4 w-96 h-96 ${isImport ? 'bg-blue-200' : 'bg-green-200'} rounded-full blur-3xl`}
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
            className={`inline-flex items-center gap-2 ${isImport ? 'bg-blue-50 text-blue-600 border-blue-100' : 'bg-green-50 text-green-600 border-green-100'} px-4 py-2 rounded-full text-sm font-medium mb-6 border`}
          >
            <Globe className="w-4 h-4" />
            Trading Partners
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

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Data Table */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
          >
            <div className={`${isImport ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 'bg-gradient-to-r from-green-500 to-green-600'} p-6`}>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <MapPin className="w-6 h-6" />
                Top 10 {isImport ? 'Import Sources' : 'Export Destinations'}
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b-2 border-gray-200">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      Country
                    </th>
                    <th className="text-right py-4 px-6 text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      Value (USD Billion)
                    </th>
                    <th className="text-right py-4 px-6 text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      Share (%)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {partners.map((partner) => (
                    <tr
                      key={partner.country}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-3 h-3 rounded-full flex-shrink-0"
                            style={{ backgroundColor: partner.color }}
                          />
                          <span className="text-gray-900 font-medium text-xs">
                            {partner.country}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-right text-gray-900 font-medium text-xs">
                        ${partner.value}B
                      </td>
                      <td className="py-3 px-4 text-right">
                        <span className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                          {partner.share.toFixed(1)}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className={`${isImport ? 'bg-gradient-to-r from-blue-50 to-indigo-50' : 'bg-gradient-to-r from-green-50 to-emerald-50'} p-6 border-t-2 border-gray-200`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Top 10 Share</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {totalShare.toFixed(1)}%
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 mb-1">Leading Partner</p>
                  <p className="text-xl font-bold text-gray-900">
                    {partners[0].country}
                  </p>
                  <p className="text-sm text-gray-500">
                    {partners[0].share}% share
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pie Chart Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              Market Share Distribution
            </h3>

            {/* Pie Chart */}
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ value }) => `${value.toFixed(1)}%`}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry) => (
                      <Cell key={`cell-${entry.name}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend 
                    verticalAlign="bottom" 
                    height={36}
                    formatter={(value) => {
                      const partner = partners.find(p => p.country === value);
                      return `${value} (${partner?.share}%)`;
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Summary Stats */}
            <div className="mt-8 pt-8 border-t border-gray-200 grid grid-cols-2 gap-4">
              <div className={`${isImport ? 'bg-gradient-to-br from-blue-50 to-indigo-50' : 'bg-gradient-to-br from-green-50 to-emerald-50'} rounded-xl p-4`}>
                <p className="text-sm text-gray-600 mb-1">Countries</p>
                <p className="text-2xl font-bold text-gray-900">{partners.length}</p>
                <p className="text-xs text-gray-500 mt-1">Top Partners</p>
              </div>
              <div className={`${isImport ? 'bg-gradient-to-br from-purple-50 to-pink-50' : 'bg-gradient-to-br from-blue-50 to-cyan-50'} rounded-xl p-4`}>
                <p className="text-sm text-gray-600 mb-1">Total Value</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${partners.reduce((sum, p) => sum + p.value, 0)}B
                </p>
                <p className="text-xs text-gray-500 mt-1">Combined Trade</p>
              </div>
            </div>

            {/* Top 3 Highlights */}
            <div className="mt-6 space-y-3">
              <p className="text-sm font-semibold text-gray-700 mb-3">Top 3 Partners:</p>
              {partners.slice(0, 3).map((partner, index) => (
                <div 
                  key={partner.country}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="font-semibold text-gray-900 text-sm">
                      {partner.country}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-blue-600">
                    {partner.share}%
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
