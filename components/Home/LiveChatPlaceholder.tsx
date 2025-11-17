"use client";

import React, { useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    $zoho?: any;
  }
}

export default function LiveChatPlaceholder(){

  useEffect(() => {
    // Initialize Zoho SalesIQ
    if (typeof window !== 'undefined') {
      window.$zoho = window.$zoho || {};
      window.$zoho.salesiq = window.$zoho.salesiq || {
        widgetcode: "717628a61e699ae0e43918d0fc6157f2e80eef239a9017a9d4732e39ad0babd554f6510e158408eac7e891895a00696d",
        values: {},
        ready: function() {}
      };

      // Load the Zoho SalesIQ script
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.id = "zsiqscript";
      script.defer = true;
      script.src = "https://salesiq.zoho.in/widget";
      
      const firstScript = document.getElementsByTagName("script")[0];
      if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript);
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

    // Cleanup
    return () => {
      const script = document.getElementById("zsiqscript");
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const handleChatClick = () => {
    if (typeof window !== 'undefined' && window.$zoho && window.$zoho.salesiq) {
      // Open Zoho chat widget
      window.$zoho.salesiq.floatwindow.visible("show");
    }
  };

  return (
    <button
      onClick={handleChatClick}
      className="fixed right-6 bottom-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-ttblue-600 to-ttblue-500 hover:from-ttblue-700 hover:to-ttblue-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Open live chat"
    >
      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse border-2 border-white"></span>
    </button>
  );
}