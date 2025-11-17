"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from 'components/ui/button';
import { Input } from 'components/ui/input';
import { Label } from 'components/ui/label';

export default function SearchCTA() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-ttblue-700 via-ttblue-600 to-ttblue-500 text-white relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      />

      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Limited Time Offer
            </motion.div>

            <Link href="/contact-us">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight cursor-pointer hover:text-blue-100 transition-colors">
                Start Your Free Trial Today
              </h2>
            </Link>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Get instant access to millions of trade records. No credit card required for your 7-day trial.
            </p>

            {/* Benefits List */}
            <div className="space-y-3 mb-8">
              {[
                'Access to 10M+ shipment records',
                'Advanced search & filtering tools',
                'Export data in multiple formats',
                'Priority email support',
                'Cancel anytime, no commitments'
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-blue-50">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Contact Options */}
            <div className="flex flex-wrap gap-4">
              <a href="tel:+918003800357" className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                +91 8003 8003 57
              </a>
              <a href="mailto:info@exportgenius.in" className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                info@exportgenius.in
              </a>
            </div>
          </motion.div>

          {/* Right Side - Demo Request Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Request a Demo
              </h3>
              <p className="text-slate-600 mb-6">
                See the platform in action with a personalized walkthrough
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="demo-firstname" className="text-slate-700">First Name</Label>
                    <Input 
                      id="demo-firstname" 
                      placeholder="John" 
                      className="border-slate-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="demo-lastname" className="text-slate-700">Last Name</Label>
                    <Input 
                      id="demo-lastname" 
                      placeholder="Doe" 
                      className="border-slate-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="demo-email" className="text-slate-700">Business Email</Label>
                  <Input 
                    id="demo-email" 
                    type="email" 
                    placeholder="john@company.com" 
                    className="border-slate-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="demo-company" className="text-slate-700">Company Name</Label>
                  <Input 
                    id="demo-company" 
                    placeholder="Your Company" 
                    className="border-slate-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="demo-phone" className="text-slate-700">Phone Number</Label>
                  <Input 
                    id="demo-phone" 
                    type="tel" 
                    placeholder="+1 (555) 000-0000" 
                    className="border-slate-300"
                  />
                </div>

                <Button className="w-full h-12 text-base font-semibold bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg">
                  Schedule My Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <p className="text-xs text-slate-500 text-center">
                  By submitting, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>

              {/* Pricing Teaser */}
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600 text-center mb-3">
                  Flexible pricing plans starting at
                </p>
                <div className="text-center">
                  <span className="text-3xl font-bold text-ttblue-600">$250</span>
                  <span className="text-slate-600">/month</span>
                </div>
                <a href="/pricing" className="block text-center text-sm text-ttblue-600 hover:text-ttblue-700 mt-2 font-medium">
                  View All Plans →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
