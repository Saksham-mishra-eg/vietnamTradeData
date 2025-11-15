"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, Users, FileText, BarChart3, TrendingUp, Globe,
  Shield, Zap
} from 'lucide-react';

export default function KeyFeatures() {
  const features = [
    {
      icon: Clock,
      title: 'Real-Time Tracking',
      description: 'Monitor shipments as they happen with live updates from customs databases',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Buyer-Seller Intelligence',
      description: 'Access detailed profiles, contact information, and trade histories',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FileText,
      title: 'HS Code Classification',
      description: 'Comprehensive HS code database with detailed product descriptions',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Custom Reports',
      description: 'Generate detailed analytics and export data in multiple formats',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: TrendingUp,
      title: 'Price Analysis',
      description: 'Track pricing trends and market dynamics across regions',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Globe,
      title: 'Market Intelligence',
      description: 'Discover new opportunities and competitive insights globally',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Shield,
      title: 'Verified Data',
      description: 'All data sourced directly from official customs authorities',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Zap,
      title: 'Instant Access',
      description: 'Search and retrieve results in seconds, not hours or days',
      color: 'from-yellow-500 to-yellow-600'
    }
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
            Powerful Features at Your Fingertips
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to make informed trade decisions
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-ttblue-300 hover:shadow-xl transition-all group"
              >
                <div
                  className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-4 shadow-md`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
