"use client";

import React, { useState } from 'react';
import { Lock } from 'lucide-react';

interface TabsSectionProps {
  activeTab: 'shipments' | 'importers' | 'suppliers' | 'visualize';
  onTabChange: (tab: 'shipments' | 'importers' | 'suppliers' | 'visualize') => void;
  counts?: {
    shipments: number;
    importers: number;
    suppliers: number;
  };
}

export default function TabsSection({ activeTab, onTabChange, counts }: TabsSectionProps) {
  const [showUpgradeTooltip, setShowUpgradeTooltip] = useState(false);

  const tabs = [
    {
      id: 'shipments' as const,
      label: 'Shipments',
      count: counts?.shipments,
      locked: false,
    },
    {
      id: 'importers' as const,
      label: 'Importers',
      count: counts?.importers,
      locked: false,
    },
    {
      id: 'suppliers' as const,
      label: 'Suppliers',
      count: counts?.suppliers,
      locked: false,
    },
    {
      id: 'visualize' as const,
      label: 'Visualize Data',
      locked: true,
    },
  ];

  function handleTabClick(tabId: typeof activeTab, locked: boolean) {
    if (locked) {
      setShowUpgradeTooltip(true);
      setTimeout(() => setShowUpgradeTooltip(false), 3000);
      return;
    }
    onTabChange(tabId);
  }

  function formatCount(count?: number): string {
    if (!count) return '';
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  }

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="flex items-center gap-1 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id, tab.locked)}
            disabled={tab.locked}
            className={`
              relative px-6 py-4 text-sm font-semibold transition-all whitespace-nowrap
              ${activeTab === tab.id
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }
              ${tab.locked ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}
            `}
          >
            <div className="flex items-center gap-2">
              <span>{tab.label}</span>
              {tab.count && (
                <span className={`
                  text-xs px-2 py-0.5 rounded-full
                  ${activeTab === tab.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-600'
                  }
                `}>
                  {formatCount(tab.count)}
                </span>
              )}
              {tab.locked && (
                <Lock className="w-4 h-4 text-orange-500" />
              )}
            </div>

            {/* Locked Tooltip */}
            {tab.locked && showUpgradeTooltip && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50 animate-fadeIn">
                <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-2 shadow-xl whitespace-nowrap">
                  <div className="flex items-center gap-2 mb-1">
                    <Lock className="w-3 h-3" />
                    <span className="font-semibold">PRO Feature</span>
                  </div>
                  <p className="mb-2">Unlock data visualization with Pro</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      // TODO: Navigate to pricing page
                      window.location.href = '/pricing';
                    }}
                    className="text-xs bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 rounded font-semibold w-full"
                  >
                    Upgrade Now
                  </button>
                </div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
