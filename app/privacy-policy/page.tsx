"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Database, Lock, Eye, Users, FileText, Mail, Phone } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const siteEmail = 'privacy@vietnamtradedata.com';

  const sections = [
    {
      title: "Introduction",
      icon: Shield,
      content: `Vietnam Trade Data ("we", "our", "us") provides trade intelligence services and is committed to protecting the privacy of our users. This policy explains what data we collect, why we collect it, how we use it, and the rights available to you.`
    },
    {
      title: "Data We Collect",
      icon: Database,
      list: [
        "Account information: name, email, organization, billing details (where applicable).",
        "Contact form submissions: message content, email, attached files (if provided).",
        "Usage data: pages visited, features used, timestamps, IP address, user agent.",
        "Cookies and tracking: cookies for authentication, preferences, analytics and advertising (where enabled)."
      ]
    },
    {
      title: "How We Use Your Data",
      icon: FileText,
      list: [
        "To provide and maintain our services, and respond to support requests.",
        "To analyze usage and improve product features.",
        "To send transactional messages (account notifications, billing receipts).",
        "To comply with legal obligations and protect our rights."
      ]
    },
    {
      title: "Legal Basis (for EU users)",
      icon: Lock,
      content: `Where applicable, we process personal data on the basis of consent, contract performance, legitimate interests (for fraud prevention, analytics), or legal obligations.`
    },
    {
      title: "Cookies",
      icon: Eye,
      content: `We use cookies and similar technologies for necessary site functionality, remembering preferences, and analytics. You can manage cookie preferences through the Cookie Preferences center on the site.`
    },
    {
      title: "Third Parties",
      icon: Users,
      content: `We may share data with service providers (e.g., email providers, analytics, payment processors). Where required, we ensure appropriate safeguards (Data Processing Addenda, Standard Contractual Clauses).`
    },
    {
      title: "Data Retention",
      icon: Database,
      content: `We retain personal data for as long as necessary to provide services, comply with legal obligations and resolve disputes. Specific retention periods are documented in our internal data retention policy.`
    },
    {
      title: "Your Rights",
      icon: Shield,
      list: [
        "Access: Request a copy of your data.",
        "Correction: Ask us to correct inaccurate information.",
        "Deletion: Request deletion of your personal data (see data deletion).",
        "Portability: Request a machine-readable copy of your data.",
        "Objection/Restriction: Object to processing in certain circumstances."
      ]
    },
    {
      title: "Changes to this Policy",
      icon: FileText,
      content: `We may update this policy periodically. We will publish the date of the last update above.`
    }
  ];

  return (
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
              <Shield className="w-4 h-4" />
              Privacy Policy
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">Privacy </span>
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
                Policy
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
                      
                      {section.content && (
                        <p className="text-gray-600 leading-relaxed">
                          {section.content}
                        </p>
                      )}

                      {section.list && (
                        <ul className="space-y-3 mt-4">
                          {section.list.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-3 text-gray-600">
                              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">How to Contact Us</h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              For privacy questions or to exercise your rights, contact us at:
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${siteEmail}`}
                className="inline-flex items-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-lg px-6 py-3 rounded-xl transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>{siteEmail}</span>
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
  );
}
