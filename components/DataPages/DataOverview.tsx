"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Package, 
  Ship, 
  Globe, 
  TrendingUp, 
  FileText, 
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { sampleImportData, sampleExportData } from './sampleData';

type Props = { pageType: 'import' | 'export' };

export default function DataOverview({pageType}:Props){
  const isImport = pageType === 'import';
  const rows = isImport ? sampleImportData.slice(0,6) : sampleExportData.slice(0,6);

  const features = isImport ? [
    {
      icon: Building2,
      title: 'Importer Details',
      description: 'Company name, address, contact information',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Package,
      title: 'Product Information',
      description: 'HS codes, product descriptions, quantities',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Ship,
      title: 'Shipment Details',
      description: 'Weight, value, unit price, currency',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Origin Data',
      description: 'Exporter country, supplier details, port of loading',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: TrendingUp,
      title: 'Logistics Info',
      description: 'Mode of transport, shipping lines, container details',
      gradient: 'from-rose-500 to-orange-500'
    },
    {
      icon: FileText,
      title: 'Customs Data',
      description: 'Duty rates, customs value, entry date',
      gradient: 'from-orange-500 to-amber-500'
    }
  ] : [
    {
      icon: Building2,
      title: 'Exporter Details',
      description: 'Vietnamese company name, location, registration',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Package,
      title: 'Product Specifications',
      description: 'HS codes, descriptions, packaging details',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Ship,
      title: 'Shipment Metrics',
      description: 'Quantity, FOB value, unit measurements',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Destination Info',
      description: 'Importer country, buyer details, destination port',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: TrendingUp,
      title: 'Trade Routes',
      description: 'Transportation mode, carrier information',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Invoice details, customs clearance dates',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section className={`py-20 ${isImport ? 'bg-gradient-to-br from-blue-50 via-white to-indigo-50' : 'bg-gradient-to-br from-green-50 via-white to-emerald-50'}`}>
      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
            isImport ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
          } mb-4 font-semibold text-sm`}>
            <Sparkles className="w-4 h-4" />
            Comprehensive Data Fields
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What&apos;s Included in Vietnam {isImport ? 'Import' : 'Export'} Data?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our {isImport ? 'import' : 'export'} dataset contains granular shipment and company-level fields to help you discover partners, validate volumes, and analyze market flows with precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Features Grid */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                      {feature.title}
                      <CheckCircle2 className={`w-4 h-4 ${isImport ? 'text-blue-500' : 'text-green-500'} opacity-0 group-hover:opacity-100 transition-opacity`} />
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className={`mt-6 bg-gradient-to-r ${
                isImport 
                  ? 'from-blue-600 to-indigo-600' 
                  : 'from-green-600 to-emerald-600'
              } rounded-2xl p-6 text-white shadow-xl`}
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold mb-1">5M+</div>
                  <div className="text-sm opacity-90">Records</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">50+</div>
                  <div className="text-sm opacity-90">Data Fields</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">Daily</div>
                  <div className="text-sm opacity-90">Updates</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sample Data Table */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="lg:sticky lg:top-8"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Table Header */}
              <div className={`${
                isImport 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600' 
                  : 'bg-gradient-to-r from-green-600 to-emerald-600'
              } px-6 py-4`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-lg flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      Sample {isImport ? 'Import' : 'Export'} Records
                    </h3>
                    <p className="text-white/80 text-sm mt-1">
                      Real data format preview
                    </p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-semibold">
                    Live Data
                  </div>
                </div>
              </div>

              {/* Table Content */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                      <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                      <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Company</th>
                      <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Product</th>
                      <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Qty</th>
                      <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {rows.map((r) => (
                      <tr 
                        key={r.id} 
                        className="hover:bg-gray-50 transition-colors duration-150"
                      >
                        <td className="px-3 py-2 text-xs text-gray-600 whitespace-nowrap">{r.date}</td>
                        <td className="px-3 py-2 text-xs font-normal text-gray-900">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${isImport ? 'bg-blue-500' : 'bg-green-500'}`}></div>
                            {r.name.substring(0, 10)}***
                          </div>
                        </td>
                        <td className="px-3 py-2 text-xs text-gray-600">{r.product}</td>
                        <td className="px-3 py-2 text-xs text-gray-600 whitespace-nowrap">{r.quantity}</td>
                        <td className="px-3 py-2 text-xs font-medium text-gray-900 whitespace-nowrap">${r.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Table Footer */}
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <button className={`w-full ${
                  isImport 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700' 
                    : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700'
                } text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl group`}>
                  Explore Full Sample Data
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center text-xs text-gray-500 mt-3">
                  Access complete sample dataset with all fields
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
