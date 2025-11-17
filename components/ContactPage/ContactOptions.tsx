"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MessageCircle, Phone, Mail, ArrowRight, Clock } from 'lucide-react';

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    $zoho?: any;
  }
}

const iconMap = {
  '📅': Calendar,
  '💬': MessageCircle,
  '📞': Phone,
  '✉️': Mail
};

function Card({icon, title, children, cta, status, index, onClick}:{icon:string,title:string,children:React.ReactNode,cta:string,status?:string,index:number,onClick?:()=>void}){
  const IconComponent = iconMap[icon as keyof typeof iconMap] || Calendar;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="group bg-white rounded-xl shadow-md hover:shadow-2xl p-6 border border-slate-200 hover:border-ttblue-400 transition-all duration-300 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-gradient-to-br from-ttblue-500 to-ttblue-700"
      />

      {/* Top accent bar */}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-ttblue-500 to-ttblue-600"
      />

      <div className="relative z-10">
        <div className="flex items-start gap-4">
          {/* Animated icon */}
          <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-ttblue-500 to-ttblue-600 text-white flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
            <IconComponent className="w-7 h-7" />
          </div>
          
          <div className="flex-1">
            <motion.h3 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="font-bold text-lg text-slate-800 mb-2"
            >
              {title}
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="text-sm text-slate-600 leading-relaxed"
            >
              {children}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="mt-5 flex items-center gap-3 flex-wrap"
            >
              <motion.button 
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClick}
                className="tt-cta-gradient text-white px-5 py-2.5 rounded-lg font-medium text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-all group/btn"
              >
                {cta}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </motion.button>
              
              {status && (
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                  className="flex items-center gap-1.5 text-sm font-medium text-green-600 bg-green-50 px-3 py-1.5 rounded-full"
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 bg-green-500 rounded-full"
                  />
                  {status.replace('🟢 ', '')}
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Shine effect on hover */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        whileHover={{ 
          x: "100%",
          opacity: [0, 0.5, 0],
        }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12"
      />
    </motion.div>
  );
}

export default function ContactOptions(){
  useEffect(() => {
    // Initialize Zoho SalesIQ
    if (typeof window !== 'undefined') {
      window.$zoho = window.$zoho || {};
      window.$zoho.salesiq = window.$zoho.salesiq || {
        widgetcode: "717628a61e699ae0e43918d0fc6157f2e80eef239a9017a9d4732e39ad0babd554f6510e158408eac7e891895a00696d",
        values: {},
        ready: function() {}
      };

      // Load the Zoho SalesIQ script if not already loaded
      if (!document.getElementById("zsiqscript")) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.id = "zsiqscript";
        script.defer = true;
        script.src = "https://salesiq.zoho.in/widget";
        
        const firstScript = document.getElementsByTagName("script")[0];
        if (firstScript && firstScript.parentNode) {
          firstScript.parentNode.insertBefore(script, firstScript);
        }
      }

      // Setup callbacks
      window.$zoho.salesiq.ready = function() {
        window.$zoho.salesiq.chat.logo("https://www.exportgenius.in/images/logo.png");
        window.$zoho.salesiq.visitor.getGeoDetails();
        // Hide the default Zoho chat widget
        window.$zoho.salesiq.floatbutton.visible("hide");
      };

      window.$zoho.salesiq.afterReady = function(info: any) {
        const restrictedCountries = ["INDIA", "CHINA", "PAKISTAN", "BANGLADESH", "NIGERIA", "GHANA", "IRAN", "UGANDA", "TANZANIA", "NEPAL", "KENYA"];
        
        if (restrictedCountries.includes(info.Country)) {
          window.$zoho.salesiq.tracking.off();
        } else {
          window.$zoho.salesiq.tracking.on();
        }
        // Ensure the default widget stays hidden
        window.$zoho.salesiq.floatbutton.visible("hide");
      };
    }
  }, []);

  const handleChatClick = () => {
    if (typeof window !== 'undefined' && window.$zoho && window.$zoho.salesiq) {
      // Open Zoho chat widget
      window.$zoho.salesiq.floatwindow.visible("show");
    }
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+918003800357';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@exportgenius.in';
  };

  const handleBookDemoClick = () => {
    window.open('https://exportgenius.zohobookings.in/portal-embed#/eg', '_blank', 'width=800,height=600');
  };

  const options = [
    { icon: '📅', title: 'Book a Demo', cta: 'Schedule Demo', content: 'See our platform with a personalized walkthrough. 30-minute live demo, real data samples and Q&A.', onClick: handleBookDemoClick },
    { icon: '💬', title: 'Live Chat', cta: 'Start Chat', status: '🟢 Online now', content: 'Get instant answers — available 24/7. Share screens and save chat history.', onClick: handleChatClick },
    { icon: '📞', title: 'Phone Support', cta: 'Call US', content: 'Speak with our team. Vietnam, USA, UK, Asia numbers available. Mon-Fri, 9am-6pm.', onClick: handlePhoneClick },
    { icon: '✉️', title: 'Send an Email', cta: 'Send Email', content: 'General, Sales, Support and Partnerships categories. We respond within 4 hours.', onClick: handleEmailClick }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-green-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 right-0 w-96 h-96 bg-ttblue-100/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-ttblue-100/20 rounded-full blur-3xl"
      />

      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-ttblue-50 text-ttblue-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Clock className="w-4 h-4" />
            Available 24/7
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-3"
          >
            How Would You Like to Connect?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            Choose the best way to reach us. Our team is ready to help you succeed.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {options.map((option, index) => (
            <Card 
              key={index}
              icon={option.icon} 
              title={option.title} 
              cta={option.cta}
              status={option.status}
              index={index}
              onClick={option.onClick}
            >
              {option.content}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
