"use client";

import React, { useState } from 'react';
import { pricingFaqs as faqs } from 'components/Shared/faqs';
import { Input } from 'components/ui/input';
import { Textarea } from 'components/ui/textarea';
import { Button } from 'components/ui/button';
import { ChevronDown, ChevronUp, HelpCircle, MessageSquare, Send } from 'lucide-react';

export default function PricingFAQs(){
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-green-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Questions? We&apos;ve Got Answers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Request a personalized demo and our team will walk you through everything.
          </p>
        </div>

        {/* 50-50 Split Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - FAQs */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h3>
                <p className="text-sm text-gray-600">Everything you need to know about our pricing</p>
              </div>
            </div>

            <div className="space-y-3">
              {faqs.map((f, i) => (
                <div 
                  key={i} 
                  className="border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(i)}
                    className="w-full text-left p-5 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 pr-4">{f.q}</h4>
                    </div>
                    <div className="flex-shrink-0 mt-1">
                      {openIndex === i ? (
                        <ChevronUp className="w-5 h-5 text-blue-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      openIndex === i 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="px-5 pb-5 pt-2">
                      <p className="text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Demo Request Form */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Request a Demo</h3>
                    <p className="text-sm text-blue-100">See our platform in action</p>
                  </div>
                </div>

                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Input 
                        aria-label="First Name" 
                        placeholder="First name" 
                        className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/40"
                      />
                    </div>
                    <div>
                      <Input 
                        aria-label="Last Name" 
                        placeholder="Last name" 
                        className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/40"
                      />
                    </div>
                  </div>
                  
                  <Input 
                    aria-label="Contact Number" 
                    type="tel"
                    placeholder="Contact Number" 
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/40"
                  />
                  
                  <Input 
                    aria-label="Company Name" 
                    placeholder="Company Name" 
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/40"
                  />
                  
                  <Input 
                    aria-label="Work Email ID" 
                    type="email"
                    placeholder="Work Email ID" 
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/40"
                  />
                  
                  <Textarea 
                    aria-label="Message" 
                    placeholder="Tell us about your requirements..."
                    className="min-h-[100px] bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/40 resize-none"
                  />
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all group"
                  >
                    <span>Request Demo</span>
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-xs text-blue-100 text-center mt-4">
                    🔒 Your information is safe with us. We&apos;ll never share your details.
                  </p>
                </form>
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="mt-6 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">What you&apos;ll get:</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Personalized walkthrough of the platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Custom pricing based on your needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Q&A session with our trade data experts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Free trial access to explore features</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
