"use client";

import React from 'react';
import { motion } from 'framer-motion';
import StorageIcon from '@mui/icons-material/Storage';
import SyncIcon from '@mui/icons-material/Sync';
import FilterListIcon from '@mui/icons-material/FilterList';
import BarChartIcon from '@mui/icons-material/BarChart';
import CodeIcon from '@mui/icons-material/Code';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

const features = [
  {title: 'Comprehensive Data Coverage', icon: <StorageIcon/>, desc: 'Access complete Vietnam import-export records with detailed shipment information.'},
  {title: 'Real-Time Updates', icon: <SyncIcon/>, desc: 'Get the latest trade data updated daily from Vietnamese customs.'},
  {title: 'Advanced Search Filters', icon: <FilterListIcon/>, desc: 'Find specific products, companies, or ports with powerful search tools.'},
  {title: 'Market Analytics', icon: <BarChartIcon/>, desc: 'Visualize trade trends with interactive charts and reports.'},
  {title: 'API Integration', icon: <CodeIcon/>, desc: 'Seamlessly integrate data into your systems with our REST API.'},
  {title: 'Expert Support', icon: <HeadsetMicIcon/>, desc: 'Get help from our trade data specialists 24/7.'}
];

export default function FeaturesSection(){
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Why Choose VietnamTradeData?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} whileHover={{y:-6}} initial={{opacity:0, y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}} className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
              <div className="text-4xl text-ttblue-500 mb-3">{f.icon}</div>
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-ttgray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
