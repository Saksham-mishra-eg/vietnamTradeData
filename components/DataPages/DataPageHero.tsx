"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Database, Globe, Calendar, TrendingUp } from 'lucide-react';

type Props = { pageType: 'import' | 'export' };

export default function DataPageHero({pageType}:Props){
  const title = pageType === 'import' ? 'Vietnam Import Data' : 'Vietnam Export Data';
  const recordStat = pageType === 'import' ? '5M+ Import Records' : '5M+ Export Records';
  const countryStat = pageType === 'import' ? '150+ Origin Countries' : '200+ Destination Countries';

  const stats = [
    { icon: Database, label: recordStat, delay: 0.2 },
    { icon: Globe, label: countryStat, delay: 0.3 },
    { icon: Calendar, label: 'Updated Daily', delay: 0.4 },
    { icon: TrendingUp, label: '10+ Years Historical Data', delay: 0.5 }
  ];

  return (
    <section className="relative bg-gradient-to-r from-ttblue-600 to-ttblue-500 text-white py-16 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"
      />

      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm opacity-90 mb-4"
        >
          Home &gt; {title}
        </motion.nav>

        <div className="text-center">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg max-w-2xl mx-auto opacity-90"
          >
            Access comprehensive Vietnamese {pageType} records with detailed shipment information to power sourcing, risk assessment and market intelligence.
          </motion.p>

          {/* Stats Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: stat.delay }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20 hover:bg-white/20 transition-colors group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3"
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </motion.div>
                <div className="font-semibold text-lg">{stat.label}</div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="#sample" 
                className="inline-block bg-white text-ttblue-700 px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Request Sample Data
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="#pricing" 
                className="inline-block border-2 border-white/40 px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Pricing
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
