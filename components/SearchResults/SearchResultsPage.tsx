"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import SearchHero from './SearchHero';
import MetricsBar from './MetricsBar';
import FiltersPanel from './FiltersPanel';
import TabsSection from './TabsSection';
import ShipmentsTable from './ShipmentsTable';
import DetailsModal from './DetailsModal';
import Pagination from './Pagination';
import CTACards from './CTACards';
import { mockSearchData, fetchSearchResults, countries } from './mockData';

export default function SearchResultsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // State management
  const [_loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState(mockSearchData);
  const [activeTab, setActiveTab] = useState<'shipments' | 'importers' | 'suppliers' | 'visualize'>('shipments');
  const [selectedFilters, setSelectedFilters] = useState<{
    hsCodes: string[];
    originCountries: string[];
    destinationCountries: string[];
    importPorts: string[];
    exportPorts: string[];
    transportMode: string[];
    importers: string[];
    exporters: string[];
    dateRange?: { from: string; to: string };
    quantityRange?: { min: number; max: number };
    valueRange?: { min: number; max: number };
  }>  ({
    hsCodes: [],
    originCountries: [],
    destinationCountries: [],
    importPorts: [],
    exportPorts: [],
    transportMode: [],
    importers: [],
    exporters: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(25);
  const [showFilters, setShowFilters] = useState(true);
  const [selectedShipment, setSelectedShipment] = useState<typeof mockSearchData.shipments[0] | null>(null);
  const [sortBy, setSortBy] = useState<string>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  // Extract search parameters
  const country = searchParams.get('country') || 'VIETNAM';
  const type = (searchParams.get('type') || 'import') as 'import' | 'export';
  const hs = searchParams.get('hs') || '';
  const product = searchParams.get('product') || '';

  // Fetch data on mount and parameter changes
  useEffect(() => {
    loadSearchResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country, type, hs, product, selectedFilters, currentPage]);

  async function loadSearchResults() {
    setLoading(true);
    
    try {
      // TODO: Replace with actual API call
      const params = {
        country,
        type,
        hs,
        product,
        page: currentPage,
        page_size: 25,
        filters: JSON.stringify(selectedFilters)
      };

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const data = await fetchSearchResults(params);
      setSearchData(data);

      // TODO: Track analytics event
      // trackEvent('search_performed', { country, type, hs, product });
    } catch (error) {
      // Log error to monitoring service
      // console.error('Search error:', error);
      // TODO: Show error toast/notification
    } finally {
      setLoading(false);
    }
  }

  // Handle new search from hero
  function handleSearch(searchParams: { country: string; type: string; hs?: string; product?: string }) {
    const params = new URLSearchParams({
      country: searchParams.country,
      type: searchParams.type,
      ...(searchParams.hs && { hs: searchParams.hs }),
      ...(searchParams.product && { product: searchParams.product })
    });

    router.push(`/search?${params.toString()}`);
    setCurrentPage(1);
  }

  // Handle filter changes
  function handleFilterChange(filters: typeof selectedFilters) {
    setSelectedFilters(filters);
    setCurrentPage(1);
  }

  // Handle tab change
  function handleTabChange(tab: 'shipments' | 'importers' | 'suppliers' | 'visualize') {
    if (tab === 'visualize') {
      // Show upgrade modal for locked feature
      // TODO: showUpgradeModal();
      return;
    }
    setActiveTab(tab);
  }

  // Handle viewing shipment details
  function handleViewDetails(shipmentId: string) {
    const shipment = searchData.shipments.find(s => s.id === shipmentId);
    if (shipment) {
      setSelectedShipment(shipment);
    }
  }

  // Handle pagination
  function handlePageChange(page: number) {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handlePageSizeChange(size: number) {
    setPageSize(size);
    setCurrentPage(1);
  }

  // Handle sorting
  function handleSort(column: string) {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('desc');
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Hero */}
      <SearchHero
        onSearch={handleSearch}
        initialValues={{
          country,
          type,
          hs,
          product
        }}
      />

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <a href="/" className="hover:text-blue-600">Home</a>
          <span>/</span>
          <a href="/search" className="hover:text-blue-600">Search</a>
          <span>/</span>
          <span className="text-gray-900 font-medium">
            {product || hs || `${type === 'import' ? 'Import' : 'Export'} Data`}
          </span>
        </nav>

        {/* Metrics Bar */}
        <MetricsBar
          totalShipments={searchData.meta.total_shipments}
          totalValue={searchData.meta.total_value_usd}
          dateRange={searchData.meta.date_range}
        />

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          {/* Filters Panel (Collapsible on mobile) */}
          <div className={`lg:col-span-3 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <FiltersPanel
              filters={selectedFilters}
              availableFilters={{
                hsCodes: searchData.filters.hs_codes.map(h => ({ label: h.name, value: h.code, count: h.count })),
                countries: countries,
                ports: [...searchData.filters.ports_loading, ...searchData.filters.ports_unloading].map(p => ({ label: p.name, value: p.name, count: p.count })),
                transportModes: searchData.filters.transport_modes.map(t => ({ label: t.name, value: t.name, count: t.count })),
                companies: [], // TODO: Add when available in API
              }}
              onFilterChange={handleFilterChange}
            />
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-9">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden w-full mb-4 px-4 py-2 bg-white border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              {showFilters ? 'Hide' : 'Show'} Filters
            </button>

            {/* Tabs Section */}
            <TabsSection
              activeTab={activeTab}
              onTabChange={handleTabChange}
              counts={{
                shipments: searchData.meta.total_shipments,
                importers: 0, // TODO: Add when importers data available
                suppliers: 0, // TODO: Add when suppliers data available
              }}
            />

            {/* Shipments Table */}
            <div className="mt-6">
              <ShipmentsTable
                shipments={searchData.shipments}
                onViewDetails={handleViewDetails}
                sortBy={sortBy}
                sortOrder={sortOrder}
                onSort={handleSort}
              />
            </div>

            {/* Pagination */}
            <div className="mt-6">
              <Pagination
                currentPage={currentPage}
                totalPages={searchData.meta.total_pages}
                pageSize={pageSize}
                totalItems={searchData.meta.total_shipments}
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
              />
            </div>
          </div>
        </div>

        {/* CTA Cards */}
        <div className="mt-12">
          <CTACards />
        </div>
      </div>

      {/* Details Modal */}
      <DetailsModal
        shipment={selectedShipment}
        onClose={() => setSelectedShipment(null)}
      />
    </div>
  );
}
