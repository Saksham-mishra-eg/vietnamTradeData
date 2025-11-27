"use client";

import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { countries } from './mockData';

interface SearchHeroProps {
  onSearch: (params: { country: string; type: string; hs?: string; product?: string }) => void;
  initialValues: {
    country: string;
    type: 'import' | 'export';
    hs: string;
    product: string;
  };
}

export default function SearchHero({ onSearch, initialValues }: SearchHeroProps) {
  const [country, setCountry] = useState(initialValues.country);
  const [type, setType] = useState<'import' | 'export'>(initialValues.type);
  const [searchType, setSearchType] = useState<'product' | 'hscode' | 'importer'>('product');
  const [searchInput, setSearchInput] = useState(initialValues.product || initialValues.hs || '');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    const params: { country: string; type: string; hs?: string; product?: string } = {
      country,
      type,
    };

    // Add search query based on type
    if (searchType === 'hscode') {
      params.hs = searchInput.trim();
    } else {
      params.product = searchInput.trim();
    }

    onSearch(params);
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Search Online Global Trade Data
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Country Dropdown */}
              <div className="md:col-span-3">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country
                </label>
                <div className="relative">
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-4 py-3 pr-10 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all appearance-none bg-white font-medium"
                  >
                    {countries.map((c) => (
                      <option key={c} value={c.toUpperCase()}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Direction Dropdown */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Direction
                </label>
                <div className="relative">
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value as 'import' | 'export')}
                    className="w-full px-4 py-3 pr-10 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all appearance-none bg-white font-medium"
                  >
                    <option value="import">Import</option>
                    <option value="export">Export</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Search Type Dropdown */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search By
                </label>
                <div className="relative">
                  <select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value as 'product' | 'hscode' | 'importer')}
                    className="w-full px-4 py-3 pr-10 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all appearance-none bg-white font-medium"
                  >
                    <option value="product">Product</option>
                    <option value="hscode">HS Code</option>
                    <option value="importer">{type === 'import' ? 'Importer' : 'Exporter'}</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Search Input */}
              <div className="md:col-span-3">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {searchType === 'hscode' 
                    ? 'HS Code' 
                    : searchType === 'importer'
                    ? type === 'import' ? 'Importer Name' : 'Exporter Name'
                    : 'Product Name'}
                </label>
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder={
                    searchType === 'hscode' 
                      ? 'Enter HS Code (e.g., 8703)' 
                      : searchType === 'importer'
                      ? `Enter ${type === 'import' ? 'Importer' : 'Exporter'} Name`
                      : 'Enter Product Name'
                  }
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-medium"
                />
              </div>

              {/* Search Button */}
              <div className="md:col-span-2 flex items-end">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                >
                  <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
