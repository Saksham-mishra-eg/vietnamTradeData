"use client";

import React, { useState } from 'react';
import { Calendar, TrendingUp, DollarSign } from 'lucide-react';

interface MetricsBarProps {
  totalShipments: number;
  totalValue: number;
  dateRange: {
    from: string;
    to: string;
  };
}

export default function MetricsBar({ totalShipments, totalValue, dateRange }: MetricsBarProps) {
  const [showDatePicker, setShowDatePicker] = useState(false);

  function formatNumber(num: number): string {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(2)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(2)}K`;
    }
    return num.toString();
  }

  function formatCurrency(amount: number): string {
    return `$${formatNumber(amount)}`;
  }

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Shipments */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-sm text-gray-600 font-medium">Total Shipments</div>
            <div className="text-2xl font-bold text-gray-900">{formatNumber(totalShipments)}</div>
          </div>
        </div>

        {/* Total Value */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
            <DollarSign className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-sm text-gray-600 font-medium">Total Value USD</div>
            <div className="text-2xl font-bold text-gray-900">{formatCurrency(totalValue)}</div>
          </div>
        </div>

        {/* Date Range */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="text-sm text-gray-600 font-medium">Date Range</div>
            <button
              onClick={() => setShowDatePicker(!showDatePicker)}
              className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors flex items-center gap-1"
            >
              {formatDate(dateRange.from)} - {formatDate(dateRange.to)}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Date Picker (TODO: Implement full date picker) */}
      {showDatePicker && (
        <div className="mt-4 p-4 border-t border-gray-200">
          <div className="text-sm text-gray-600">
            Date picker component - TODO: Integrate with date picker library
          </div>
        </div>
      )}
    </div>
  );
}
