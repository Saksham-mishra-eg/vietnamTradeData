"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Globe, Database } from 'lucide-react';

const stats = [
  {num: '10+', label: 'Years', sub: 'Industry Experience', icon: TrendingUp, color: 'from-blue-400 to-blue-600'},
  {num: '5,000+', label: 'Clients', sub: 'Worldwide', icon: Users, color: 'from-purple-400 to-purple-600'},
  {num: '150+', label: 'Countries', sub: 'Data Coverage', icon: Globe, color: 'from-green-400 to-green-600'},
  {num: '10M+', label: 'Records', sub: 'Updated Daily', icon: Database, color: 'from-orange-400 to-orange-600'}
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

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  }
};

export default function CompanyStats(){
  return (
    <section className="py-16 bg-gradient-to-r from-ttblue-600 to-ttblue-500 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, 90, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
          rotate: [0, -90, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"
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
            className="text-4xl font-bold mb-10"
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
                className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-colors group relative overflow-hidden"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 mb-4 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Number with counter animation */}
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.05, duration: 0.3, type: "spring" }}
                  className="text-3xl font-bold relative z-10"
                >
                  {s.num}
                </motion.div>

                <div className="font-semibold mt-1 relative z-10">{s.label}</div>
                <div className="text-sm opacity-90 mt-2 relative z-10">{s.sub}</div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm"
        >
          {[
            { value: '99.9%', label: 'Accuracy' },
            { value: '24/7', label: 'Support' },
            { value: '50+', label: 'Industries' },
            { value: 'API', label: 'Access' }
          ].map((badge, i) => (
            <motion.div 
              key={i}
              variants={badgeVariants}
              className="bg-white/10 p-4 rounded-lg text-center backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors"
            >
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.05 }}
                className="font-bold text-lg"
              >
                {badge.value}
              </motion.div>
              <div className="opacity-80 mt-1">{badge.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
