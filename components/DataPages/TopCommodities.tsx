"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Package, TrendingUp, Globe } from 'lucide-react';

interface TopCommoditiesProps {
  type: 'import' | 'export';
}

const importCommodities = [
  { hsCode: '68', description: 'Electrical Machinery and Equipment', value: 26.39 },
  { hsCode: '24', description: 'Machinery, Mechanical Appliances, etc.', value: 9.50 },
  { hsCode: '13', description: 'Plastics', value: 5.38 },
  { hsCode: '11', description: 'Mineral Fuels and Oils', value: 4.64 },
  { hsCode: '11', description: 'Iron and Steel', value: 4.42 },
  { hsCode: '09', description: 'Optical, Photographic, Medical, Equipment, etc.', value: 3.68 },
  { hsCode: '06', description: 'Knitted or Crocheted Fabrics', value: 2.53 },
  { hsCode: '06', description: 'Vehicles', value: 2.50 },
  { hsCode: '05', description: 'Cotton', value: 1.97 },
  { hsCode: '04', description: 'Fish and Crustaceans', value: 1.75 },
];

const exportCommodities = [
  { hsCode: '117', description: 'Electrical Machinery and Equipment', value: 40.00 },
  { hsCode: '22', description: 'Footwear, Gaiters, etc.', value: 7.83 },
  { hsCode: '15', description: 'Machinery, Mechanical Appliances, etc.', value: 5.48 },
  { hsCode: '15', description: 'Not Knitted or Crocheted Apparel & Clothing Accessories', value: 5.46 },
  { hsCode: '14', description: 'Knitted or Crocheted Apparel & Clothing Accessories', value: 5.10 },
  { hsCode: '10', description: 'Furniture, Bedding, Mattresses, etc.', value: 3.38 },
  { hsCode: '09', description: 'Optical, Photographic, Medical, Equipment, etc.', value: 2.15 },
  { hsCode: '06', description: 'Fish and Crustaceans', value: 1.94 },
  { hsCode: '05', description: 'Coffee, Tea, Mate and Spices', value: 1.52 },
  { hsCode: '04', description: 'Articles of Leather, Saddlery & Harness, Travel Goods, etc.', value: 1.45 },
];

export default function TopCommodities({ type }: TopCommoditiesProps) {
  const commodities = type === 'import' ? importCommodities : exportCommodities;
  const maxValue = Math.max(...commodities.map(c => c.value));
  
  const title = type === 'import' 
    ? 'What Vietnam Mostly Imports?' 
    : 'What Vietnam Mostly Exports?';
  
  const description = type === 'import'
    ? 'Vietnam purchased goods worth US$ 258 billion in 2018 up by 21.5% from the previous year, as per Vietnam import statistics. Vietnam\'s top 10 imports approach almost 60% of the overall value of the country\'s total commodities purchased from the foreign suppliers. Check Vietnam trade statistics of country\'s main import commodities.'
    : 'As per Vietnam trade statistics, the country shipped goods worth US$ 290 billion in 2018. Vietnam\'s top 10 exports accounted for more than 70% of the overall export shipments. Check export statistics of Vietnam recorded last year which shows trade figures of top 10 export commodities.';

  const totalPercentage = commodities.reduce((sum, c) => sum + c.value, 0);

  // Color schemes for different rank positions
  const getGradientColors = (index: number) => {
    const gradients = [
      'from-blue-500 to-blue-600',
      'from-indigo-500 to-indigo-600',
      'from-purple-500 to-purple-600',
      'from-pink-500 to-pink-600',
      'from-rose-500 to-rose-600',
      'from-orange-500 to-orange-600',
      'from-amber-500 to-amber-600',
      'from-yellow-500 to-yellow-600',
      'from-green-500 to-green-600',
      'from-teal-500 to-teal-600',
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.04, 0.06, 0.04],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 left-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-40 right-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl"
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-purple-100"
          >
            <Package className="w-4 h-4" />
            Top 10 Commodities
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

        {/* Statistics Overview Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center">
                <Package className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-600">{type === 'import' ? 'Import Shipments' : 'Export Shipments'}</p>
                <p className="text-2xl font-bold text-gray-900">
                  {type === 'import' ? '38M+' : '32M+'}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-purple-500 text-white flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Buyers</p>
                <p className="text-2xl font-bold text-gray-900">
                  {type === 'import' ? '1.23M+' : '969.79K'}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-green-500 text-white flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Exporters</p>
                <p className="text-2xl font-bold text-gray-900">
                  {type === 'import' ? '204.89K+' : '109.16K+'}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content - Table and Visualization */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Table Section */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
                  <th className="text-left py-5 px-6 text-sm font-bold text-gray-700 uppercase tracking-wider">
                    HS Code
                  </th>
                  <th className="text-left py-5 px-6 text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Product Description
                  </th>
                  <th className="text-right py-5 px-6 text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Value Share (%)
                  </th>
                  <th className="text-left py-5 px-6 text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Distribution
                  </th>
                </tr>
              </thead>
              <tbody>
                {commodities.map((commodity, index) => {
                  const percentage = (commodity.value / maxValue) * 100;
                  return (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors group"
                    >
                      <td className="py-3 px-4">
                        <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-lg font-mono font-medium text-xs">
                          {commodity.hsCode}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-gray-900 font-medium text-xs">
                          {commodity.description}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <span className="text-lg font-bold text-gray-900">
                          {commodity.value.toFixed(2)}%
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="relative h-6 bg-gray-100 rounded-lg overflow-hidden w-full max-w-xs">
                          <div
                            style={{ width: `${percentage}%` }}
                            className={`absolute inset-y-0 left-0 bg-gradient-to-r ${getGradientColors(index)} rounded-lg`}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Summary Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 p-8 border-t-2 border-gray-200"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-600 mb-2">
                  Top {commodities.length} commodities represent
                </p>
                <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {totalPercentage.toFixed(1)}%
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  of total {type === 'import' ? 'import' : 'export'} value
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-center bg-white rounded-xl px-6 py-4 shadow-md">
                  <p className="text-xs text-gray-500 mb-1">Leading Category</p>
                  <p className="text-lg font-bold text-gray-900">
                    {commodities[0].value.toFixed(1)}%
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    {commodities[0].description.substring(0, 20)}...
                  </p>
                </div>

                <div className="text-center bg-white rounded-xl px-6 py-4 shadow-md">
                  <p className="text-xs text-gray-500 mb-1">Categories</p>
                  <p className="text-lg font-bold text-gray-900">
                    {commodities.length}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    Top Commodities
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
