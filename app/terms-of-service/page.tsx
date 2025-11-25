"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, Lock, AlertCircle, CreditCard, UserX, Gavel, Mail, Phone } from 'lucide-react';
import SEO from 'components/SEO';

export default function TermsOfServicePage() {
  const sections = [
    {
      title: "Agreement to Terms",
      icon: FileText,
      content: `By accessing our services, you agree to be bound by these Terms of Service. If you do not agree with any part of the terms, you should not access the site or use the services.`
    },
    {
      title: "Acceptable Use",
      icon: Shield,
      content: `You agree not to misuse the data provided, violate applicable export control laws, resell or redistribute our data without authorization, or use automated means (bots, scrapers) to harvest data. We reserve the right to suspend or terminate accounts that violate this policy.`
    },
    {
      title: "Account and Billing",
      icon: CreditCard,
      content: `You are responsible for maintaining the confidentiality of your account credentials. All fees are payable in advance unless otherwise specified. We reserve the right to update pricing with notice.`
    },
    {
      title: "Limitation of Liability",
      icon: Lock,
      content: `We provide trade data "as is" and make no warranties regarding accuracy, availability or fitness for any particular purpose. To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of our services.`
    },
    {
      title: "Refund Policy",
      icon: AlertCircle,
      content: `Refunds may be considered on a case-by-case basis. Please contact us with your concerns within 14 days of purchase.`
    },
    {
      title: "Termination",
      icon: UserX,
      content: `We may suspend or terminate your account if you breach these terms. Upon termination, you must cease all use of our services and may lose access to data.`
    },
    {
      title: "Dispute Resolution",
      icon: Gavel,
      content: `These terms are governed by the laws of Vietnam. Any disputes will be resolved through binding arbitration or in the courts of Vietnam.`
    },
    {
      title: "Contact",
      icon: Mail,
      content: `For questions regarding these terms, please contact us at legal@vietnamtradedata.com.`
    }
  ];

  return (
    <>
      <SEO
        title="Terms of Service | Vietnam Trade Data"
        description="Terms of Service for using Vietnam Trade Data's trade intelligence platform."
        canonical="/terms-of-service"
      />

      <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),rgba(239,246,255,0.6))]" />
          
          <motion.div
            className="absolute top-20 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        <div className="relative z-10 container mx-auto max-w-5xl px-4 md:px-6 lg:px-8 py-20 md:py-32">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-300 text-blue-700 font-medium text-xs uppercase tracking-widest mb-6"
            >
              <FileText className="w-4 h-4" />
              Terms of Service
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">Terms of </span>
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
                Service
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Last updated: November 11, 2025
            </p>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 md:p-8 shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                      <p className="text-gray-600 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 rounded-2xl p-8 md:p-10 text-white shadow-2xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Legal Inquiries</h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              For questions about these terms or legal matters, contact us at:
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:legal@vietnamtradedata.com"
                className="inline-flex items-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-lg px-6 py-3 rounded-xl transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>legal@vietnamtradedata.com</span>
              </a>
              
              <a
                href="tel:+842400000000"
                className="inline-flex items-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-lg px-6 py-3 rounded-xl transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>+84-24-000-0000</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
