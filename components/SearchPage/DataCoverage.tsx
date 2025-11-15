"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Database, RefreshCw, Calendar } from 'lucide-react';

function AnimatedCounter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function DataCoverage() {
  const stats = [
    {
      icon: Globe,
      value: 150,
      suffix: '+',
      label: 'Countries Covered',
      description: 'Global trade data access',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Database,
      value: 10000000,
      suffix: '+',
      label: 'Shipment Records',
      description: 'Verified trade transactions',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: RefreshCw,
      value: 24,
      suffix: '/7',
      label: 'Live Updates',
      description: 'Continuous data refresh',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Calendar,
      value: 10,
      suffix: '+',
      label: 'Years of History',
      description: 'Historical trade data',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-ttblue-100/50 rounded-full blur-3xl"
      />

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
            Comprehensive Data Coverage
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Access the most extensive trade database with unparalleled coverage
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-ttblue-300 hover:shadow-2xl transition-all group overflow-hidden"
              >
                {/* Gradient overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.05 }}
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color}`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mb-4 shadow-lg mx-auto`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 text-center">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  
                  <div className="text-lg font-semibold text-slate-800 mb-1 text-center">
                    {stat.label}
                  </div>
                  
                  <div className="text-sm text-slate-600 text-center">
                    {stat.description}
                  </div>
                </div>

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.color} opacity-10 rounded-bl-full`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
