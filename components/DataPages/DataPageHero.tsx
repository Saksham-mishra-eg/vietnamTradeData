"use client";

import React, { useEffect, useRef, useState, memo, useCallback } from 'react';
import Link from 'next/link';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { DollarSign } from 'lucide-react';
import { cn } from 'lib/utils';

type Props = { pageType: 'import' | 'export' };

// Trade data items for animations
const tradeDataItems = [
  // KEY ITEMS - will be displayed prominently (1-5)
  { 
    id: 1, 
    name: "Electrical Machinery", 
    value: "$26.39B", 
    score: 91,
    icon: "⚡",
    hsCode: "HS 85"
  },
  { 
    id: 2, 
    name: "Textiles & Apparel", 
    value: "$18.29B", 
    score: 89,
    icon: "👔",
    hsCode: "HS 61"
  },
  { 
    id: 3, 
    name: "Footwear", 
    value: "$15.48B", 
    score: 94,
    icon: "👟",
    hsCode: "HS 64"
  },
  { 
    id: 4, 
    name: "Agricultural Products", 
    value: "$12.50B", 
    score: 88,
    icon: "🌾",
    hsCode: "HS 08"
  },
  { 
    id: 5, 
    name: "Furniture & Bedding", 
    value: "$10.38B", 
    score: 93,
    icon: "🛋️",
    hsCode: "HS 94"
  },

  // BACKGROUND ITEMS (6-20)
  { id: 6, name: "Plastics", value: "$5.38B", score: 87, icon: "♻️", hsCode: "HS 39" },
  { id: 7, name: "Iron & Steel", value: "$4.42B", score: 85, icon: "⚙️", hsCode: "HS 72" },
  { id: 8, name: "Optical Equipment", value: "$3.68B", score: 90, icon: "📷", hsCode: "HS 90" },
  { id: 9, name: "Cotton", value: "$1.97B", score: 83, icon: "🧵", hsCode: "HS 52" },
  { id: 10, name: "Fish & Seafood", value: "$1.75B", score: 86, icon: "🐟", hsCode: "HS 03" },
  { id: 11, name: "Coffee & Tea", value: "$1.52B", score: 82, icon: "☕", hsCode: "HS 09" },
  { id: 12, name: "Leather Goods", value: "$1.45B", score: 92, icon: "👜", hsCode: "HS 42" },
  { id: 13, name: "Vehicles", value: "$2.50B", score: 79, icon: "🚗", hsCode: "HS 87" },
  { id: 14, name: "Rubber Products", value: "$1.20B", score: 84, icon: "🔧", hsCode: "HS 40" },
  { id: 15, name: "Wood Products", value: "$2.40B", score: 88, icon: "🪵", hsCode: "HS 44" },
  { id: 16, name: "Paper Products", value: "$1.90B", score: 77, icon: "📄", hsCode: "HS 48" },
  { id: 17, name: "Chemicals", value: "$1.10B", score: 81, icon: "🧪", hsCode: "HS 28" },
  { id: 18, name: "Toys & Games", value: "$2.30B", score: 80, icon: "🎮", hsCode: "HS 95" },
  { id: 19, name: "Medical Equipment", value: "$2.80B", score: 89, icon: "🏥", hsCode: "HS 90" },
  { id: 20, name: "Stone & Glass", value: "$0.85B", score: 84, icon: "💎", hsCode: "HS 70" },
];

const keyItems = tradeDataItems.slice(0, 5);
const backgroundItems = tradeDataItems.slice(5);

interface TradeMetadata {
  name: string;
  value: string;
  score: number;
  hsCode: string;
}

// Helper functions for animation
function getRandomEdgePoint(containerSize: { width: number; height: number }, edge: 'top' | 'bottom' | 'left' | 'right') {
  const margin = 80;
  const padding = 0.15; // Keep items away from corners (15% from each edge)
  
  switch (edge) {
    case 'top':
      return { 
        x: containerSize.width * (padding + Math.random() * (1 - 2 * padding)), 
        y: -margin 
      };
    case 'bottom':
      return { 
        x: containerSize.width * (padding + Math.random() * (1 - 2 * padding)), 
        y: containerSize.height + margin 
      };
    case 'left':
      return { 
        x: -margin, 
        y: containerSize.height * (padding + Math.random() * (1 - 2 * padding)) 
      };
    case 'right':
      return { 
        x: containerSize.width + margin, 
        y: containerSize.height * (padding + Math.random() * (1 - 2 * padding)) 
      };
  }
}

function createCurvedPath(start: { x: number; y: number }, end: { x: number; y: number }) {
  const curveVariation = 100 + Math.random() * 150;
  const midX = (start.x + end.x) / 2 + (Math.random() - 0.5) * curveVariation;
  const midY = (start.y + end.y) / 2 + (Math.random() - 0.5) * curveVariation;
  
  // Add a second control point for even smoother curves
  const quarterX = (start.x + midX) / 2 + (Math.random() - 0.5) * curveVariation * 0.5;
  const quarterY = (start.y + midY) / 2 + (Math.random() - 0.5) * curveVariation * 0.5;
  
  return [start, { x: quarterX, y: quarterY }, { x: midX, y: midY }, end];
}

interface AnimatedTradeItemProps {
  item: typeof tradeDataItems[0];
  isKeyItem?: boolean;
  containerSize: { width: number; height: number };
  onReachCenter?: (metadata: TradeMetadata) => void;
  onComplete?: () => void;
}

function AnimatedTradeItem({ item, isKeyItem = false, containerSize, onReachCenter, onComplete }: AnimatedTradeItemProps) {
  const controls = useAnimation();

  useEffect(() => {
    const animateItem = async () => {
      if (isKeyItem) {
        const edges: Array<'top' | 'bottom' | 'left' | 'right'> = ['top', 'bottom', 'left', 'right'];
        const entryEdge = edges[Math.floor(Math.random() * edges.length)];
        
        const startPoint = getRandomEdgePoint(containerSize, entryEdge);
        const centerPoint = { x: containerSize.width / 2 - 40, y: containerSize.height / 2 - 40 };

        await controls.set({
          x: startPoint.x,
          y: startPoint.y,
          scale: 0.7,
          filter: "blur(4px)",
          opacity: 0.8
        });

        await controls.start({
          x: centerPoint.x,
          y: centerPoint.y,
          scale: 1.8,
          filter: "blur(0px)",
          opacity: 1,
          transition: {
            duration: 2.5 + Math.random() * 1.5,
            ease: "easeInOut",
            type: "tween"
          }
        });

        onReachCenter?.({
          name: item.name,
          value: item.value,
          score: item.score,
          hsCode: item.hsCode
        });

        await new Promise(resolve => setTimeout(resolve, 2500));

        const exitEdges: Array<'top' | 'bottom' | 'left' | 'right'> = ['top', 'bottom', 'left', 'right'];
        const randomExitEdge = exitEdges[Math.floor(Math.random() * exitEdges.length)];
        const randomExitPoint = getRandomEdgePoint(containerSize, randomExitEdge);

        await controls.start({
          x: randomExitPoint.x,
          y: randomExitPoint.y,
          scale: 0.7,
          filter: "blur(4px)",
          opacity: 0.5,
          transition: {
            duration: 2.5 + Math.random() * 1,
            ease: "easeInOut",
            type: "tween"
          }
        });
      } else {
        const animateLoop = async () => {
          // eslint-disable-next-line no-constant-condition
          while (true) {
            const edges: Array<'top' | 'bottom' | 'left' | 'right'> = ['top', 'bottom', 'left', 'right'];
            const entryEdge = edges[Math.floor(Math.random() * edges.length)];
            // Prefer opposite edge for more interesting movement
            const oppositeEdges: Record<string, string> = { 'top': 'bottom', 'bottom': 'top', 'left': 'right', 'right': 'left' };
            const exitEdge = (Math.random() > 0.5 ? oppositeEdges[entryEdge] : edges[Math.floor(Math.random() * edges.length)]) as 'top' | 'bottom' | 'left' | 'right';
            
            const startPoint = getRandomEdgePoint(containerSize, entryEdge);
            const endPoint = getRandomEdgePoint(containerSize, exitEdge);
            const path = createCurvedPath(startPoint, endPoint);

            const itemScale = 0.7 + Math.random() * 0.3;
            const itemOpacity = 0.75 + Math.random() * 0.25;

            await controls.set({
              x: startPoint.x,
              y: startPoint.y,
              scale: itemScale,
              filter: "blur(0px)",
              opacity: 0
            });

            // Fade in
            await controls.start({
              opacity: itemOpacity,
              transition: {
                duration: 1,
                ease: "easeOut"
              }
            });

            // Move through path smoothly
            for (let i = 1; i < path.length; i++) {
              await controls.start({
                x: path[i].x,
                y: path[i].y,
                transition: {
                  duration: 3.5 + Math.random() * 2,
                  ease: [0.4, 0.0, 0.2, 1],
                  type: "tween"
                }
              });
            }

            // Fade out
            await controls.start({
              opacity: 0,
              transition: {
                duration: 1,
                ease: "easeIn"
              }
            });

            await new Promise(resolve => setTimeout(resolve, 300));
          }
        };

        animateLoop();
      }

      if (isKeyItem) {
        onComplete?.();
      }
    };

    animateItem();
  }, [isKeyItem, containerSize, controls, item, onReachCenter, onComplete]);

  return (
    <motion.div
      className="absolute w-20 h-20 md:w-24 md:h-24"
      animate={controls}
      initial={{
        scale: 0.7 + Math.random() * 0.3,
        filter: "blur(0px)",
        opacity: 0
      }}
      style={{ willChange: 'transform, opacity, filter' }}
    >
      <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-blue-300/60 bg-white shadow-xl flex items-center justify-center">
        <span className="text-3xl md:text-4xl relative z-10">{item.icon}</span>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-purple-50/80" />
      </div>
    </motion.div>
  );
}

interface CircularProgressProps {
  value: number;
  size?: number;
  className?: string;
}

function CircularProgress({ value, size = 32, className }: CircularProgressProps) {
  const percentage = Math.min(Math.max(value, 0), 100);
  
  return (
    <div 
      className={cn("relative flex items-center justify-center", className)} 
      style={{ width: size, height: size }}
    >
      <div 
        className="absolute inset-0 rounded-full border-[2.5px] border-gray-200"
      />
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(from 0deg, hsl(142 76% 36%) 0deg ${(percentage * 3.6)}deg, transparent ${(percentage * 3.6)}deg 360deg)`,
          mask: `radial-gradient(circle at center, transparent ${size/2 - 3}px, black ${size/2 - 2}px)`,
          WebkitMask: `radial-gradient(circle at center, transparent ${size/2 - 3}px, black ${size/2 - 2}px)`
        }}
      />
      <span className="relative text-xs font-bold text-green-600 z-10">
        {value}
      </span>
    </div>
  );
}

interface MetadataDisplayProps {
  metadata: TradeMetadata;
}

const MetadataDisplay = memo(function MetadataDisplay({ metadata }: MetadataDisplayProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="relative w-20 h-20 md:w-24 md:h-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: 15 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg p-2.5 shadow-lg"
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <DollarSign className="w-3 h-3 text-white" />
            </div>
            <div>
              <div className="text-xs text-gray-500 font-medium">Value</div>
              <div className="text-sm font-bold text-gray-900">{metadata.value}</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: -15 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg p-2.5 shadow-lg"
        >
          <div className="flex items-center gap-2">
            <CircularProgress value={metadata.score} size={32} />
            <div>
              <div className="text-xs text-gray-500 font-medium">Score</div>
              <div className="text-sm font-bold text-green-600">{metadata.score}/100</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.0, duration: 0.3 }}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg p-3 shadow-lg min-w-[200px] max-w-[280px]"
        >
          <div className="text-sm font-semibold text-gray-900 text-center line-clamp-2 leading-tight">
            {metadata.name}
          </div>
          <div className="text-xs text-gray-500 text-center mt-1">{metadata.hsCode}</div>
        </motion.div>
      </div>
    </motion.div>
  );
});

export default function DataPageHero({pageType}:Props){
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 800, height: 600 });
  const [currentMetadata, setCurrentMetadata] = useState<TradeMetadata | null>(null);
  const [keyItemIndex, setKeyItemIndex] = useState(0);
  const [isKeyItemAnimating, setIsKeyItemAnimating] = useState(true);
  const [backgroundItemInstances] = useState(() => {
    return Array.from({ length: 15 }, (_, index) => ({
      id: `bg-stable-${index}`,
      item: backgroundItems[index % backgroundItems.length]
    }));
  });

  const title = pageType === 'import' ? 'Vietnam Import Data' : 'Vietnam Export Data';

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    const updateSize = () => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          setContainerSize({ width: rect.width, height: rect.height });
        }
      }, 100);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => {
      window.removeEventListener('resize', updateSize);
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  const handleKeyItemComplete = useCallback(() => {
    setIsKeyItemAnimating(false);
    setTimeout(() => {
      setKeyItemIndex((prev) => (prev + 1) % keyItems.length);
      setIsKeyItemAnimating(true);
    }, 100);
  }, []);

  const handleItemReachCenter = useCallback((metadata: TradeMetadata) => {
    setCurrentMetadata(metadata);
    setTimeout(() => {
      setCurrentMetadata(null);
    }, 2500);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />
      
      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <motion.div 
            className="space-y-6 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <motion.nav
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm opacity-90 mb-4"
            >
              Home &gt; {title}
            </motion.nav> */}

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {title}
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Access comprehensive Vietnamese {pageType} records with detailed shipment information to power sourcing, risk assessment and market intelligence.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link href="/contact-us">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors bg-blue-600 text-white px-8 py-3 shadow-lg hover:bg-blue-700"
                >
                  Request Sample Data
                </motion.button>
              </Link>
              <Link href="/pricing">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors border-2 border-blue-600 text-blue-600 px-8 py-3 hover:bg-blue-50"
                >
                  View Pricing
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Animated Trade Items */}
          <motion.div 
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div 
              ref={containerRef}
              className="relative w-full h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden  bg-white/40 backdrop-blur-sm"
              style={{
                background: `
                  radial-gradient(circle at 30% 20%, rgba(59,130,246,0.06), transparent 60%),
                  radial-gradient(circle at 70% 80%, rgba(147,51,234,0.06), transparent 60%),
                  linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.6))
                `,
                willChange: 'transform',
                transform: 'translate3d(0, 0, 0)'
              }}
            >
              {backgroundItemInstances.map((item) => (
                <AnimatedTradeItem
                  key={item.id}
                  item={item.item}
                  isKeyItem={false}
                  containerSize={containerSize}
                />
              ))}
              {isKeyItemAnimating && (
                <AnimatedTradeItem
                  key={`key-${keyItems[keyItemIndex].id}-${keyItemIndex}`}
                  item={keyItems[keyItemIndex]}
                  isKeyItem={true}
                  containerSize={containerSize}
                  onReachCenter={handleItemReachCenter}
                  onComplete={handleKeyItemComplete}
                />
              )}
              <AnimatePresence mode="wait">
                {currentMetadata && (
                  <MetadataDisplay metadata={currentMetadata} />
                )}
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-100/20 via-transparent to-purple-100/20 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
