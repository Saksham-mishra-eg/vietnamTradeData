"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, RefreshCw, Download, DollarSign, 
  Users, LineChart, CheckCircle2
} from 'lucide-react';

export default function SearchBenefits() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Verified & Authentic Data',
      description: 'All data sourced directly from official customs authorities ensuring 100% accuracy and reliability'
    },
    {
      icon: RefreshCw,
      title: 'Updated Daily',
      description: 'Fresh data added every day from multiple sources to keep you ahead of the competition'
    },
    {
      icon: Download,
      title: 'Easy Export Options',
      description: 'Download reports in Excel, PDF, or CSV formats for seamless integration with your workflow'
    },
    {
      icon: DollarSign,
      title: 'Pricing Intelligence',
      description: 'Track market prices, identify trends, and make competitive pricing decisions with confidence'
    },
    {
      icon: Users,
      title: 'Find Buyers & Suppliers',
      description: 'Discover new business opportunities and connect with verified importers and exporters globally'
    },
    {
      icon: LineChart,
      title: 'Market Analysis',
      description: 'Access comprehensive analytics, trends, and insights to inform your business strategy'
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
            Why Choose Our Platform?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join thousands of businesses making smarter trade decisions
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="flex gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-ttblue-500 to-ttblue-600 flex items-center justify-center text-white shadow-lg"
                  >
                    <Icon className="w-7 h-7" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-ttblue-600 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="h-1 bg-gradient-to-r from-ttblue-500 to-ttblue-300 mt-6 origin-left"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-gradient-to-br from-ttblue-50 to-blue-50 rounded-2xl p-8 md:p-10"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Everything You Need to Succeed
              </h3>
              <p className="text-slate-600 mb-6">
                Our platform provides comprehensive tools and insights to help you navigate global trade with confidence.
              </p>
              <div className="space-y-3">
                {[
                  'Real-time shipment tracking',
                  'Advanced filtering & search',
                  'Custom report generation',
                  'API access available',
                  'Dedicated support team'
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="bg-white rounded-xl p-6 shadow-xl"
              >
                <div className="text-sm text-slate-600 mb-2">Success Rate</div>
                <div className="text-4xl font-bold text-ttblue-600 mb-4">98.5%</div>
                <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '98.5%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 1 }}
                    className="h-full bg-gradient-to-r from-ttblue-500 to-ttblue-600"
                  />
                </div>
                <div className="mt-4 text-sm text-slate-600">
                  Customer Satisfaction Score
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
