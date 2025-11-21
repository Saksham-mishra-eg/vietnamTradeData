"use client"

import { cn } from "lib/utils"
import { CardContent } from "components/ui/card";
import { TrendingUp, Database, Users, Globe, Building2, Ship } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-blue-100 text-blue-700 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};


const CARDS = [
  {
    id: 0,
    name: "Michael Chen",
    designation: "Supply Chain Director",
    content: (
      <p>
        <Highlight>Vietnam Trade Data</Highlight> has revolutionized how we identify suppliers. The platform provides{" "}
        <Highlight>real-time customs records</Highlight> that help us make informed sourcing decisions with confidence.
      </p>
    ),
  },
  {
    id: 1,
    name: "Sarah Williams",
    designation: "Market Research Analyst",
    content: (
      <p>
        The <Highlight>comprehensive analytics</Highlight> and trade intelligence tools are exceptional. We discovered new market opportunities and{" "}
        <Highlight>tracked competitor activities</Highlight> with unprecedented accuracy.
      </p>
    ),
  },
  {
    id: 2,
    name: "David Rodriguez",
    designation: "Import Manager",
    content: (
      <p>
        With <Highlight>70M+ shipment records</Highlight>, we reduced supplier verification time by 60%. The{" "}
        <Highlight>detailed customs data</Highlight> and buyer-supplier networks are invaluable for our business growth.
      </p>
    ),
  },
];


const integrations = [
  {
    name: "API Access",
    desc: "RESTful API for seamless integration with your systems",
    icon: <Database className="w-4 h-4 text-blue-600" />,
  },
  {
    name: "Excel Export",
    desc: "Download comprehensive reports in Excel format instantly",
    icon: <TrendingUp className="w-4 h-4 text-purple-600" />,
  },
  {
    name: "Dashboard",
    desc: "Real-time analytics and visualization tools",
    icon: <Globe className="w-4 h-4 text-green-600" />,
  },
  {
    name: "CRM Integration",
    desc: "Connect with your existing CRM and business tools",
    icon: <Building2 className="w-4 h-4 text-orange-600" />,
  }
];


export default function TradeIntelligenceSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 relative">
        {/* Left Block */}
        <div className="flex flex-col items-start justify-center border border-gray-200 p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-white to-gray-50">
          {/* Card */}
          <div className="relative w-full mb-4 sm:mb-6">
            <div className="absolute inset-x-0 -bottom-2 h-16 sm:h-20 lg:h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
            <CardStack items={CARDS} />
          </div>

          {/* Content */}
          <h3 className="text-lg sm:text-xl lg:text-2xl font-normal text-gray-900 leading-relaxed">
            Trusted by Global Businesses <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">Vietnam Trade Data</span>{" "}
            <span className="text-gray-600 text-sm sm:text-base lg:text-lg block mt-2">
              Join 20,000+ companies using our platform to discover suppliers, analyze trade patterns, and make data-driven decisions with confidence.
            </span>
          </h3>
        </div>

        {/* Right Block */}
        <div className="flex flex-col items-center justify-start border border-gray-200 p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-blue-50 to-purple-50">
          {/* Content */}
          <h3 className="text-lg sm:text-xl lg:text-2xl font-normal text-gray-900 mb-4 sm:mb-6 leading-relaxed">
            Powerful Integration Ecosystem <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">Export & Analyze</span>{" "}
            <span className="text-gray-600 text-sm sm:text-base lg:text-lg block mt-2">
              Access trade data through multiple channels - API, Excel exports, or interactive dashboards. Integrate seamlessly with your existing workflow.
            </span>
          </h3>
          <div
            className={cn(
              "group relative mt-auto w-full inline-flex animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 bg-white px-4 sm:px-6 lg:px-8 py-2 font-medium transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50",

              // before styles
              "before:absolute before:bottom-[8%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]",
            )}
          >
            {/* Integration List */}
            <CardContent className="p-3 sm:p-4 lg:p-6 space-y-3 sm:space-y-4 bg-white border border-gray-200 rounded-2xl sm:rounded-3xl z-10 w-full shadow-lg">
              {integrations.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-2 sm:p-3 border border-gray-200 rounded-xl sm:rounded-2xl hover:bg-gray-50 hover:border-blue-300 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 sm:gap-3 flex-1">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center text-sm sm:text-lg flex-shrink-0 border border-gray-200">
                      {item.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm font-semibold text-gray-900 truncate">{item.name}</p>
                      <p className="text-xs text-gray-600 line-clamp-1 sm:line-clamp-2">{item.desc}</p>
                    </div>
                  </div>
                  <button className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 p-1.5 sm:p-2 text-xs font-semibold flex-shrink-0 ml-2 transition-all">
                    <Ship className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </button>
                </div>
              ))}
            </CardContent>
          </div>
        </div>
      </div>
      
      {/* Stats and Testimonial Section */}
      <div className="mt-12 sm:mt-16 lg:mt-20 grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div className="flex justify-center items-center p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-gray-200">
          <div className="grid grid-cols-3 gap-6 sm:gap-8 lg:gap-6 xl:gap-8 w-full text-center">
            <div className="space-y-2 sm:space-y-3">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">70M+</div>
              <p className="text-sm sm:text-base text-gray-700">Shipment Records</p>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">190+</div>
              <p className="text-sm sm:text-base text-gray-700">Countries</p>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">20K+</div>
              <p className="text-sm sm:text-base text-gray-700">Active Users</p>
            </div>
          </div>
        </div>
        <div className="relative bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-lg">
          <blockquote className="border-l-4 border-blue-600 pl-4 sm:pl-6 lg:pl-8 text-gray-700">
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed italic">
              &ldquo;Vietnam Trade Data platform transformed our market research capabilities. The depth of customs data and supplier intelligence helped us expand into new markets with confidence and precision.&rdquo;
            </p>
            <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
              <cite className="block font-semibold text-sm sm:text-base text-gray-900 not-italic">James Thompson</cite>
              <p className="text-sm text-gray-600">Director of International Trade</p>
              <div className="flex items-center gap-2 pt-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Global Trading Corp</span>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative mx-auto h-48 w-full md:h-48 md:w-96 my-4">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-white h-48 w-full md:h-48 md:w-96 rounded-3xl p-4 shadow-xl border border-gray-200 flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="font-normal text-gray-700">
              {card.content}
            </div>
            <div>
              <p className="text-gray-900 font-semibold">
                {card.name}
              </p>
              <p className="text-gray-600 font-normal text-sm">
                {card.designation}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
