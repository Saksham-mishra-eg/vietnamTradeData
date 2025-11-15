"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, CheckCircle, MessageCircle } from 'lucide-react';
import { importDataFaqs, exportDataFaqs } from 'components/Shared/faqs';

interface DataFAQsProps {
  type: 'import' | 'export';
}

export default function DataFAQs({ type }: DataFAQsProps){
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const isImport = type === 'import';
  const faqs = isImport ? importDataFaqs : exportDataFaqs;
  
  const title = isImport 
    ? 'Vietnam Import Data FAQs' 
    : 'Vietnam Export Data FAQs';
  
  const description = isImport
    ? 'Find answers to common questions about Vietnam import data, importer information, and how our data can help you find buyers'
    : 'Get answers to frequently asked questions about Vietnam export data, exporter details, and how to find reliable suppliers';

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12"
        >
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${
            isImport 
              ? 'bg-gradient-to-br from-blue-500 to-indigo-600' 
              : 'bg-gradient-to-br from-green-500 to-emerald-600'
          } mb-6 shadow-lg`}>
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 md:px-8 md:py-6 flex items-start justify-between gap-4 text-left group"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className={`flex-shrink-0 mt-1 transition-colors duration-300 ${
                    openIndex === index 
                      ? isImport ? 'text-blue-600' : 'text-green-600'
                      : isImport 
                        ? 'text-gray-400 group-hover:text-blue-500' 
                        : 'text-gray-400 group-hover:text-green-500'
                  }`}>
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                      openIndex === index 
                        ? isImport ? 'text-blue-600' : 'text-green-600'
                        : isImport 
                          ? 'text-gray-900 group-hover:text-blue-600' 
                          : 'text-gray-900 group-hover:text-green-600'
                    }`}>
                      {faq.q}
                    </h3>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex-shrink-0 transition-colors duration-300 ${
                    openIndex === index 
                      ? isImport ? 'text-blue-600' : 'text-green-600'
                      : isImport 
                        ? 'text-gray-400 group-hover:text-blue-500' 
                        : 'text-gray-400 group-hover:text-green-500'
                  }`}
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 md:px-8 md:pb-8 pl-16 md:pl-20">
                      <div className={`${
                        isImport 
                          ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-500' 
                          : 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-500'
                      } rounded-xl p-5 border-l-4`}>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 inline-block">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageCircle className={`w-6 h-6 ${isImport ? 'text-blue-600' : 'text-green-600'}`} />
              <h3 className="text-xl font-bold text-gray-900">Still have questions?</h3>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Our support team is here to help you with any additional questions
            </p>
            <a
              href="/contact-us"
              className={`inline-flex items-center gap-2 px-8 py-3 ${
                isImport 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700' 
                  : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700'
              } text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl`}
            >
              Contact Support
              <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
            </a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
