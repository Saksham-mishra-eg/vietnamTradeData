"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Globe, Database } from 'lucide-react';
import { DottedSurface } from 'components/ui/dotted-surface';
import { cn } from 'lib/utils';

const stats = [
  {num: '70M+', label: 'Shipments', sub: 'Import & Export Records', icon: Database, color: 'from-blue-400 to-blue-600'},
  {num: '2.2M+', label: 'Buyers', sub: 'Worldwide', icon: Users, color: 'from-purple-400 to-purple-600'},
  {num: '314K+', label: 'Exporters', sub: 'Total Suppliers', icon: Globe, color: 'from-green-400 to-green-600'},
  {num: '5.72T+', label: 'Turnover', sub: 'Total Trade Value', icon: TrendingUp, color: 'from-orange-400 to-orange-600'}
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15
    }
  }
};

const statVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

export default function CompanyStats(){
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Three.js Dotted Surface Background Animation */}
      <DottedSurface className="absolute inset-0 opacity-40" />

      {/* Subtle Gradient Overlay */}
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-0',
          'bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_60%)]',
        )}
      />

      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-4xl font-bold mb-10 text-white"
          >
            Our Impact in Numbers
          </motion.h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div 
                key={i} 
                variants={statVariants}
                className="p-6 bg-gray/95 backdrop-blur-md rounded-2xl border border-white/30 hover:shadow-2xl hover:scale-105 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon */}
                <div
                  className={`w-12 h-12 mb-4 bg-gradient-to-br ${s.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Number with counter animation */}
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.05, duration: 0.3, type: "spring" }}
                  className={`text-3xl font-bold relative z-10 bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}
                >
                  {s.num}
                </motion.div>

                <div className="font-semibold mt-1 relative z-10 text-black-900">{s.label}</div>
                <div className="text-sm text-black-600 mt-2 relative z-10">{s.sub}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
