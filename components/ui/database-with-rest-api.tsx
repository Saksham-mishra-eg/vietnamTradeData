"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Folder, HeartHandshakeIcon, SparklesIcon } from "lucide-react";
import { cn } from "lib/utils";

interface DatabaseWithRestApiProps {
  className?: string;
  badgeTexts?: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  buttonTexts?: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  title?: string;
  lightColor?: string;
}

const DatabaseWithRestApi = ({
  className,
  badgeTexts,
  buttonTexts,
  title,
  lightColor,
}: DatabaseWithRestApiProps) => {
  return (
    <div
      className={cn(
        "relative flex h-[600px] w-full max-w-[600px] flex-col items-center",
        className
      )}
    >
      {/* SVG Paths  */}
      <svg
        className="h-full sm:w-full text-blue-500"
        width="100%"
        height="100%"
        viewBox="0 0 200 100"
      >
        <g
          stroke="#3B82F6"
          fill="none"
          strokeWidth="0.6"
          strokeDasharray="100 100"
          pathLength="100"
        >
          <path d="M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 20" />
          <path d="M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 25" />
          <path d="M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 65" />
          <path d="M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 20" />
          {/* Animation For Path Starting */}
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="1s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.25,0.1,0.5,1"
            keyTimes="0; 1"
          />
        </g>
        {/* Blue Lights */}
        <g mask="url(#db-mask-1)">
          <circle
            className="database db-light-1"
            cx="0"
            cy="0"
            r="15"
            fill="url(#db-blue-grad)"
            opacity="0.9"
          />
        </g>
        <g mask="url(#db-mask-2)">
          <circle
            className="database db-light-2"
            cx="0"
            cy="0"
            r="15"
            fill="url(#db-blue-grad)"
            opacity="0.9"
          />
        </g>
        <g mask="url(#db-mask-3)">
          <circle
            className="database db-light-3"
            cx="0"
            cy="0"
            r="15"
            fill="url(#db-blue-grad)"
            opacity="0.9"
          />
        </g>
        <g mask="url(#db-mask-4)">
          <circle
            className="database db-light-4"
            cx="0"
            cy="0"
            r="15"
            fill="url(#db-blue-grad)"
            opacity="0.9"
          />
        </g>
        {/* Buttons */}
        <g stroke="#3B82F6" fill="none" strokeWidth="0.4">
          {/* First Button */}
          <g>
            <rect
              fill="url(#button-gradient)"
              x="14"
              y="5"
              width="34"
              height="10"
              rx="5"
            ></rect>
            <DatabaseIcon x="17" y="7.5"></DatabaseIcon>
            <text
              x="25"
              y="11.5"
              fill="white"
              stroke="none"
              fontSize="4.5"
              fontWeight="500"
            >
              {badgeTexts?.first || "GET"}
            </text>
          </g>
          {/* Second Button */}
          <g>
            <rect
              fill="url(#button-gradient)"
              x="60"
              y="5"
              width="34"
              height="10"
              rx="5"
            ></rect>
            <DatabaseIcon x="63" y="7.5"></DatabaseIcon>
            <text
              x="71"
              y="11.5"
              fill="white"
              stroke="none"
              fontSize="4.5"
              fontWeight="500"
            >
              {badgeTexts?.second || "POST"}
            </text>
          </g>
          {/* Third Button */}
          <g>
            <rect
              fill="url(#button-gradient)"
              x="108"
              y="5"
              width="34"
              height="10"
              rx="5"
            ></rect>
            <DatabaseIcon x="111" y="7.5"></DatabaseIcon>
            <text
              x="119"
              y="11.5"
              fill="white"
              stroke="none"
              fontSize="4.5"
              fontWeight="500"
            >
              {badgeTexts?.third || "PUT"}
            </text>
          </g>
          {/* Fourth Button */}
          <g>
            <rect
              fill="url(#button-gradient)"
              x="150"
              y="5"
              width="40"
              height="10"
              rx="5"
            ></rect>
            <DatabaseIcon x="153" y="7.5"></DatabaseIcon>
            <text
              x="161"
              y="11.5"
              fill="white"
              stroke="none"
              fontSize="4.5"
              fontWeight="500"
            >
              {badgeTexts?.fourth || "DELETE"}
            </text>
          </g>
        </g>
        <defs>
          {/* 1 -  user list */}
          <mask id="db-mask-1">
            <path
              d="M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 20"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          {/* 2 - task list */}
          <mask id="db-mask-2">
            <path
              d="M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 25"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          {/* 3 - backlogs */}
          <mask id="db-mask-3">
            <path
              d="M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 65"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          {/* 4 - misc */}
          <mask id="db-mask-4">
            <path
              d="M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 20"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          {/* Blue Grad */}
          <radialGradient id="db-blue-grad" fx="0.5" fy="0.5">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="30%" stopColor={lightColor || "#3B82F6"} stopOpacity="0.95" />
            <stop offset="70%" stopColor={lightColor || "#2563EB"} stopOpacity="0.7" />
            <stop offset="100%" stopColor={lightColor || "#1D4ED8"} stopOpacity="0.3" />
          </radialGradient>
          {/* Button Gradient */}
          <linearGradient id="button-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
      {/* Main Box */}
      <div className="absolute bottom-10 flex w-full flex-col items-center">
        {/* bottom shadow */}
        <div className="absolute -bottom-4 h-[100px] w-[62%] rounded-lg" />
        {/* box title */}
        <div className="absolute -top-3 z-20 flex items-center justify-center rounded-lg border border-blue-300 bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1.5 sm:-top-4 sm:py-2">
          <SparklesIcon className="size-3 text-white" />
          <span className="ml-2 text-[11px] text-white font-medium">
            {title ? title : "Data exchange using a customized REST API"}
          </span>
        </div>
        {/* box outter circle */}
        <div className="absolute -bottom-8 z-30 grid h-[70px] w-[70px] place-items-center rounded-full border-2 border-blue-400 bg-white shadow-lg">
          <Image
            src="/images/eg-favicon.png"
            alt="EG Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
        {/* box content */}
        <div className="relative z-10 flex h-[150px] w-full items-center justify-center overflow-hidden rounded-lg border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50 shadow-xl">
          {/* Badges - 2x2 Grid Layout */}
          {/* Top Row */}
          <div className="absolute top-6 left-8 z-10 h-7 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-3 text-xs border-2 border-blue-400 flex items-center gap-2 shadow-lg">
            <HeartHandshakeIcon className="size-3 text-white" />
            <span className="text-white font-medium text-[10px]">{buttonTexts?.first || "Button 1"}</span>
          </div>
          <div className="absolute top-6 right-8 z-10 h-7 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 px-3 text-xs border-2 border-purple-400 flex items-center gap-2 shadow-lg">
            <Folder className="size-3 text-white" />
            <span className="text-white font-medium text-[10px]">{buttonTexts?.second || "Button 2"}</span>
          </div>
          {/* Bottom Row */}
          <div className="absolute bottom-8 left-8 z-10 h-7 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 px-3 text-xs border-2 border-blue-400 flex items-center gap-2 shadow-lg">
            <SparklesIcon className="size-3 text-white" />
            <span className="text-white font-medium text-[10px]">{buttonTexts?.third || "Button 3"}</span>
          </div>
          <div className="absolute bottom-8 right-8 z-10 h-7 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3 text-xs border-2 border-purple-400 flex items-center gap-2 shadow-lg">
            <HeartHandshakeIcon className="size-3 text-white" />
            <span className="text-white font-medium text-[10px]">{buttonTexts?.fourth || "Button 4"}</span>
          </div>
          {/* Circles */}
          <motion.div
            className="absolute -bottom-14 h-[100px] w-[100px] rounded-full border-t border-blue-300 bg-blue-100/20"
            animate={{
              scale: [0.98, 1.02, 0.98, 1, 1, 1, 1, 1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-20 h-[145px] w-[145px] rounded-full border-t border-blue-300 bg-blue-100/20"
            animate={{
              scale: [1, 1, 1, 0.98, 1.02, 0.98, 1, 1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-[100px] h-[190px] w-[190px] rounded-full border-t border-purple-300 bg-purple-100/20"
            animate={{
              scale: [1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-[120px] h-[235px] w-[235px] rounded-full border-t border-purple-300 bg-purple-100/20"
            animate={{
              scale: [1, 1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  );
};

export default DatabaseWithRestApi;

const DatabaseIcon = ({ x = "0", y = "0" }: { x: string; y: string }) => {
  return (
    <svg
      x={x}
      y={y}
      xmlns="http://www.w3.org/2000/svg"
      width="5"
      height="5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
};
