"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from 'lucide-react';

export default function OfficeLocations(){
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.04, 0.07, 0.04],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200 rounded-full blur-3xl"
        />
      </div>

      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-100"
          >
            <MapPin className="w-4 h-4" />
            Visit Our Office
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Get in Touch
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto"
          >
            Visit us or connect through any of our communication channels
          </motion.p>
        </motion.div>

        {/* Main Office Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-400 p-8 md:p-10 text-gray-800 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/20 rounded-full blur-2xl" />
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                className="relative flex items-center gap-4"
              >
                <div className="text-6xl">🇮🇳</div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">India Office</h3>
                  <p className="text-gray-700 mt-2 text-lg font-medium">Headquarters - New Delhi</p>
                </div>
              </motion.div>
            </div>

            <div className="p-8 md:p-10 lg:p-12 bg-gradient-to-b from-white to-gray-50">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left column - Contact Details */}
                <div className="space-y-6">
                  {/* Address */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 }}
                    className="group"
                  >
                    <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border-2 border-blue-100 hover:border-blue-200 hover:shadow-lg transition-all">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-blue-500 text-white flex items-center justify-center shadow-md">
                        <MapPin className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-400 font-semibold mb-2 uppercase tracking-wide">Address</div>
                        <div className="text-gray-700 font-semibold text-lg leading-relaxed">
                          2nd Floor, C-7/224-225,<br />
                          Sector-7, Rohini,<br />
                          New Delhi, India
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Phone Numbers */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="group"
                  >
                    <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border-2 border-green-100 hover:border-green-200 hover:shadow-lg transition-all">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-green-400 to-green-500 text-white flex items-center justify-center shadow-md">
                        <Phone className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-400 font-semibold mb-3 uppercase tracking-wide">Phone Numbers</div>
                        <div className="space-y-2">
                          <a href="tel:+918003800357" className="block text-blue-500 hover:text-blue-600 font-bold text-lg transition-colors">
                            +91 8003 8003 57 <span className="text-sm text-gray-400 font-normal">(Mobile)</span>
                          </a>
                          <div className="space-y-1.5 text-sm">
                            <a href="tel:+911147048012" className="block text-blue-500 hover:text-blue-600 font-semibold transition-colors">
                              +91-11-47048012 <span className="text-gray-300">(Office)</span>
                            </a>
                            <a href="tel:+911147048013" className="block text-blue-500 hover:text-blue-600 font-semibold transition-colors">
                              +91-11-47048013 <span className="text-gray-300">(Office)</span>
                            </a>
                            <a href="tel:+911147048014" className="block text-blue-500 hover:text-blue-600 font-semibold transition-colors">
                              +91-11-47048014 <span className="text-gray-300">(Office)</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.45 }}
                    className="group"
                  >
                    <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border-2 border-purple-100 hover:border-purple-200 hover:shadow-lg transition-all">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-purple-400 to-purple-500 text-white flex items-center justify-center shadow-md">
                        <Mail className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-400 font-semibold mb-2 uppercase tracking-wide">Email Address</div>
                        <a href="mailto:info@exportgenius.in" className="text-blue-500 hover:text-blue-600 font-bold text-xl transition-colors break-all">
                          info@exportgenius.in
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Right column - WhatsApp & Additional Info */}
                <div className="space-y-6">
                  {/* WhatsApp Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="relative bg-gradient-to-br from-green-100 via-emerald-50 to-green-100 rounded-2xl p-8 border-2 border-green-200 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/40 rounded-full blur-2xl" />
                    
                    <div className="relative">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-500 text-white flex items-center justify-center shadow-lg">
                          <MessageCircle className="w-8 h-8" />
                        </div>
                        <div>
                          <h4 className="font-bold text-xl text-gray-800">WhatsApp Chat</h4>
                          <p className="text-sm text-gray-500">Instant support available</p>
                        </div>
                      </div>
                      
                      <a 
                        href="https://wa.me/918003800357" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mb-4"
                      >
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold py-4 px-6 rounded-xl text-center transition-all shadow-lg hover:shadow-xl text-lg"
                        >
                          +91 8003 8003 57
                        </motion.div>
                      </a>
                      
                      <div className="text-sm text-gray-500 text-center bg-white/70 py-2 rounded-lg">
                        Click to start chatting instantly
                      </div>
                    </div>
                  </motion.div>

                  {/* Working Hours */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.55 }}
                    className="group"
                  >
                    <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border-2 border-blue-100">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 text-white flex items-center justify-center shadow-md">
                        <Clock className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-400 font-semibold mb-2 uppercase tracking-wide">Business Hours</div>
                        <div className="text-gray-700 font-bold text-lg">
                          Monday - Friday<br />
                          <span className="text-blue-500">9:00 AM - 6:00 PM</span> IST
                        </div>
                        <div className="text-sm text-gray-400 mt-2">Weekend by appointment</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Get Directions Button */}
                  <motion.a
                    href="https://www.google.com/maps/search/?api=1&query=C-7/224-225,+Sector-7,+Rohini,+New+Delhi,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-5 rounded-xl shadow-lg hover:shadow-xl transition-all group"
                  >
                    <Navigation className="w-5 h-5 transition-transform" />
                    Get Directions on Google Maps
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
