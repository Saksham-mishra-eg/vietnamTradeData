"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, Shirt, Cog, FlaskConical, Wheat, Car, 
  Building2, Zap
} from 'lucide-react';

export default function SearchCategories() {
  const categories = [
    { icon: Cpu, label: 'Electronics & Technology', color: 'from-blue-500 to-blue-600' },
    { icon: Shirt, label: 'Textiles & Apparel', color: 'from-pink-500 to-pink-600' },
    { icon: Cog, label: 'Machinery & Equipment', color: 'from-gray-600 to-gray-700' },
    { icon: FlaskConical, label: 'Chemicals & Pharmaceuticals', color: 'from-green-500 to-green-600' },
    { icon: Wheat, label: 'Food & Agriculture', color: 'from-yellow-500 to-yellow-600' },
    { icon: Car, label: 'Automotive & Parts', color: 'from-red-500 to-red-600' },
    { icon: Building2, label: 'Construction Materials', color: 'from-orange-500 to-orange-600' },
    { icon: Zap, label: 'Energy & Petroleum', color: 'from-purple-500 to-purple-600' }
  ];

  return (
    <section className="py-16 md:py-20 bg-white relative">
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
            Search by Industry
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Browse trade data across major industries and sectors
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-ttblue-400 hover:shadow-xl transition-all text-center"
              >
                <div
                  className={`w-16 h-16 mx-auto rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-4 shadow-md group-hover:shadow-lg transition-shadow`}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <div className="font-semibold text-slate-900 group-hover:text-ttblue-600 transition-colors">
                  {category.label}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8"
        >
          <button className="px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg transition-colors">
            View All Categories
          </button>
        </motion.div>
      </div>
    </section>
  );
}
