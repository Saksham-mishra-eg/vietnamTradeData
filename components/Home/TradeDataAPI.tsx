"use client";

import React from 'react';
import { motion } from 'framer-motion';
import DatabaseWithRestApi from 'components/ui/database-with-rest-api';
import { Database, TrendingUp, Users, Globe } from 'lucide-react';

const features = [
  {
    icon: Database,
    title: "Real-Time Data Access",
    description: "Access 70M+ shipment records updated daily via RESTful API endpoints",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    title: "Market Intelligence",
    description: "Query trade trends, pricing analytics, and market insights programmatically",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Supplier Discovery",
    description: "Search and filter 2.2M+ buyers and 314K+ suppliers with advanced filters",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Integrate data from 190+ countries with standardized API responses",
    color: "from-orange-500 to-red-500"
  }
];

export default function TradeDataAPI() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6 py-2 text-sm font-medium shadow-lg">
              ✨ Developer-First API
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Global Trade Intelligence API
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Seamlessly integrate Vietnam trade data into your applications with our powerful REST API. 
            Real-time access to customs records, supplier networks, and market analytics.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - API Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center h-full"
          >
            <div className="w-full h-full flex items-center justify-center" style={{ minHeight: '600px' }}>
              <DatabaseWithRestApi
                badgeTexts={{
                  first: "Imports",
                  second: "Exports",
                  third: "Suppliers",
                  fourth: "Analytics"
                }}
                buttonTexts={{
                  first: "Company Profile",
                  second: "Dashboard Visualization",
                  third: "Company Contacts",
                  fourth: "Supply Chain"
                }}
                title="Real-time customs data"
                lightColor="#2f98ff"
              />
            </div>
          </motion.div>

          {/* Right Side - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 group hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-gray-700">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
