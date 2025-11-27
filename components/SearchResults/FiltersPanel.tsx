"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Lock } from 'lucide-react';

interface FilterOption {
  label: string;
  value: string;
  count?: number;
  locked?: boolean;
}

interface FiltersState {
  dateRange?: { from: string; to: string };
  hsCodes: string[];
  originCountries: string[];
  destinationCountries: string[];
  importPorts: string[];
  exportPorts: string[];
  transportMode: string[];
  importers: string[];
  exporters: string[];
  quantityRange?: { min: number; max: number };
  valueRange?: { min: number; max: number };
}

interface FiltersPanelProps {
  filters: FiltersState;
  availableFilters: {
    hsCodes: FilterOption[];
    countries: string[];
    ports: FilterOption[];
    transportModes: FilterOption[];
    companies: FilterOption[];
  };
  onFilterChange: (filters: FiltersState) => void;
}

export default function FiltersPanel({ filters, availableFilters, onFilterChange }: FiltersPanelProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    'date', 'hscode', 'countries', 'ports'
  ]);

  function toggleSection(section: string) {
    if (expandedSections.includes(section)) {
      setExpandedSections(expandedSections.filter(s => s !== section));
    } else {
      setExpandedSections([...expandedSections, section]);
    }
  }

  function handleCheckboxChange(filterKey: keyof FiltersState, value: string) {
    const currentValues = (filters[filterKey] as string[]) || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    
    onFilterChange({ ...filters, [filterKey]: newValues });
  }

  function clearFilter(filterKey: keyof FiltersState) {
    if (filterKey === 'dateRange' || filterKey === 'quantityRange' || filterKey === 'valueRange') {
      onFilterChange({ ...filters, [filterKey]: undefined });
    } else {
      onFilterChange({ ...filters, [filterKey]: [] });
    }
  }

  function clearAllFilters() {
    onFilterChange({
      hsCodes: [],
      originCountries: [],
      destinationCountries: [],
      importPorts: [],
      exportPorts: [],
      transportMode: [],
      importers: [],
      exporters: [],
    });
  }

  const activeFiltersCount = Object.values(filters).filter(f => {
    if (Array.isArray(f)) return f.length > 0;
    if (typeof f === 'object' && f !== null) return true;
    return false;
  }).length;

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 sticky top-4">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Filters</h3>
          {activeFiltersCount > 0 && (
            <span className="text-xs text-gray-600">{activeFiltersCount} active</span>
          )}
        </div>
        {activeFiltersCount > 0 && (
          <button
            onClick={clearAllFilters}
            className="text-xs text-blue-600 hover:text-blue-700 font-semibold"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="max-h-[calc(100vh-240px)] overflow-y-auto">
        {/* Date Range Filter */}
        <FilterSection
          title="Date Range"
          isExpanded={expandedSections.includes('date')}
          onToggle={() => toggleSection('date')}
          onClear={filters.dateRange ? () => clearFilter('dateRange') : undefined}
        >
          <div className="space-y-2">
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="From"
              value={filters.dateRange?.from || ''}
              onChange={(e) => onFilterChange({
                ...filters,
                dateRange: { from: e.target.value, to: filters.dateRange?.to || '' }
              })}
            />
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="To"
              value={filters.dateRange?.to || ''}
              onChange={(e) => onFilterChange({
                ...filters,
                dateRange: { from: filters.dateRange?.from || '', to: e.target.value }
              })}
            />
          </div>
        </FilterSection>

        {/* HS Code Filter */}
        <FilterSection
          title="HS Code"
          isExpanded={expandedSections.includes('hscode')}
          onToggle={() => toggleSection('hscode')}
          onClear={filters.hsCodes.length > 0 ? () => clearFilter('hsCodes') : undefined}
        >
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Search HS Code..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="max-h-48 overflow-y-auto space-y-1">
              {availableFilters.hsCodes.map(option => (
                <label key={option.value} className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.hsCodes.includes(option.value)}
                    onChange={() => handleCheckboxChange('hsCodes', option.value)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700 flex-1">{option.label}</span>
                  {option.count && (
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{option.count}</span>
                  )}
                </label>
              ))}
            </div>
          </div>
        </FilterSection>

        {/* Origin Country Filter */}
        <FilterSection
          title="Origin Country"
          isExpanded={expandedSections.includes('countries')}
          onToggle={() => toggleSection('countries')}
          onClear={filters.originCountries.length > 0 ? () => clearFilter('originCountries') : undefined}
        >
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Search countries..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="max-h-48 overflow-y-auto space-y-1">
              {availableFilters.countries.slice(0, 10).map(country => (
                <label key={country} className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.originCountries.includes(country)}
                    onChange={() => handleCheckboxChange('originCountries', country)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{country}</span>
                </label>
              ))}
            </div>
          </div>
        </FilterSection>

        {/* Destination Country Filter */}
        <FilterSection
          title="Destination Country"
          isExpanded={expandedSections.includes('destination')}
          onToggle={() => toggleSection('destination')}
          onClear={filters.destinationCountries.length > 0 ? () => clearFilter('destinationCountries') : undefined}
        >
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Search countries..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="max-h-48 overflow-y-auto space-y-1">
              {availableFilters.countries.slice(0, 10).map(country => (
                <label key={country} className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.destinationCountries.includes(country)}
                    onChange={() => handleCheckboxChange('destinationCountries', country)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{country}</span>
                </label>
              ))}
            </div>
          </div>
        </FilterSection>

        {/* Import Ports Filter */}
        <FilterSection
          title="Import Ports"
          isExpanded={expandedSections.includes('ports')}
          onToggle={() => toggleSection('ports')}
          onClear={filters.importPorts.length > 0 ? () => clearFilter('importPorts') : undefined}
        >
          <div className="space-y-2">
            <div className="max-h-48 overflow-y-auto space-y-1">
              {availableFilters.ports.map(port => (
                <label key={port.value} className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.importPorts.includes(port.value)}
                    onChange={() => handleCheckboxChange('importPorts', port.value)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700 flex-1">{port.label}</span>
                  {port.count && (
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{port.count}</span>
                  )}
                </label>
              ))}
            </div>
          </div>
        </FilterSection>

        {/* Transport Mode Filter (PRO - Locked) */}
        <FilterSection
          title="Transport Mode"
          isExpanded={expandedSections.includes('transport')}
          onToggle={() => toggleSection('transport')}
          locked={true}
        >
          <div className="space-y-1 opacity-60 pointer-events-none">
            {availableFilters.transportModes.map(mode => (
              <label key={mode.value} className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
                <input
                  type="radio"
                  name="transport"
                  className="border-gray-300 text-blue-600 focus:ring-blue-500"
                  disabled
                />
                <span className="text-sm text-gray-700 flex-1">{mode.label}</span>
                {mode.count && (
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{mode.count}</span>
                )}
              </label>
            ))}
          </div>
          <div className="mt-3 p-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-200">
            <div className="flex items-center gap-2 mb-2">
              <Lock className="w-4 h-4 text-orange-600" />
              <span className="text-xs font-semibold text-orange-900">PRO Feature</span>
            </div>
            <p className="text-xs text-gray-700 mb-2">
              Unlock transport mode filtering with a Pro subscription
            </p>
            <button className="text-xs bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1.5 rounded-lg hover:from-orange-600 hover:to-orange-700 font-semibold">
              Upgrade to Pro
            </button>
          </div>
        </FilterSection>

        {/* Importers Filter (PRO - Locked) */}
        <FilterSection
          title="Importers"
          isExpanded={expandedSections.includes('importers')}
          onToggle={() => toggleSection('importers')}
          locked={true}
        >
          <div className="space-y-1 opacity-60 pointer-events-none">
            {availableFilters.companies.slice(0, 5).map(company => (
              <label key={company.value} className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  disabled
                />
                <span className="text-sm text-gray-700 flex-1">{company.label}</span>
              </label>
            ))}
          </div>
          <div className="mt-3 p-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-200">
            <div className="flex items-center gap-2 mb-2">
              <Lock className="w-4 h-4 text-orange-600" />
              <span className="text-xs font-semibold text-orange-900">PRO Feature</span>
            </div>
            <p className="text-xs text-gray-700 mb-2">
              Filter by specific importers with Pro
            </p>
            <button className="text-xs bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1.5 rounded-lg hover:from-orange-600 hover:to-orange-700 font-semibold">
              Upgrade to Pro
            </button>
          </div>
        </FilterSection>

        {/* Value Range Filter (PRO - Locked) */}
        <FilterSection
          title="Value Range (USD)"
          isExpanded={expandedSections.includes('value')}
          onToggle={() => toggleSection('value')}
          locked={true}
        >
          <div className="space-y-2 opacity-60 pointer-events-none">
            <input
              type="number"
              placeholder="Min value"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              disabled
            />
            <input
              type="number"
              placeholder="Max value"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              disabled
            />
          </div>
          <div className="mt-3 p-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-200">
            <div className="flex items-center gap-2 mb-2">
              <Lock className="w-4 h-4 text-orange-600" />
              <span className="text-xs font-semibold text-orange-900">PRO Feature</span>
            </div>
            <p className="text-xs text-gray-700 mb-2">
              Filter by shipment value with Pro
            </p>
            <button className="text-xs bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1.5 rounded-lg hover:from-orange-600 hover:to-orange-700 font-semibold">
              Upgrade to Pro
            </button>
          </div>
        </FilterSection>
      </div>
    </div>
  );
}

interface FilterSectionProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  onClear?: () => void;
  locked?: boolean;
  children: React.ReactNode;
}

function FilterSection({ title, isExpanded, onToggle, onClear, locked, children }: FilterSectionProps) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-900">{title}</span>
          {locked && <Lock className="w-3.5 h-3.5 text-orange-500" />}
        </div>
        <div className="flex items-center gap-2">
          {onClear && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClear();
              }}
              className="text-xs text-blue-600 hover:text-blue-700 font-semibold"
            >
              Clear
            </button>
          )}
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          )}
        </div>
      </button>
      {isExpanded && (
        <div className="p-4 pt-0">
          {children}
        </div>
      )}
    </div>
  );
}
