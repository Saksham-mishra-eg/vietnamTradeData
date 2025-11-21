"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Ship, 
  Globe, 
  Package, 
  ArrowUpRight,
  Download,
  Calendar,
  MapPin,
  BarChart3,
  Users,
  Filter,
  Search,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { CTASection } from 'components/Home';

// Types
type ShipmentRow = {
  id: string;
  date: string;
  hsCode: string;
  product: string;
  port: string;
  quantity: string;
  value: number;
  buyer: string;
  country: string;
};

type MonthlyData = {
  month: string;
  value: number;
};

type CountryData = {
  country: string;
  value: number;
  share: number;
};

type CommodityRow = {
  hsCode: string;
  description: string;
  value: number;
  share: number;
};

type BuyerRow = {
  name: string;
  value: number;
  shipments: number;
};

type CompetitorRow = {
  name: string;
  turnover: number;
  market: string;
};

// Mock data
const mockCompanyData = {
  name: 'A & C Soluciones SA',
  period: '01/2018 – 07/2025',
  description: 'Leading import-export company specializing in industrial equipment and consumer goods',
  kpis: {
    annualTurnover: { import: 51.51, export: 12.34 },
    annualShipment: { import: 2.59, export: 0.87 },
  },
  recentShipments: [
    { id: '1', date: '2025-07-15', hsCode: '847330', product: 'Parts and accessories for office machines', port: 'Ho Chi Minh', quantity: '2,500 KG', value: 45000, buyer: 'Tech Solutions Ltd', country: 'China' },
    { id: '2', date: '2025-07-10', hsCode: '852872', product: 'Reception apparatus for television', port: 'Hai Phong', quantity: '1,200 Units', value: 98000, buyer: 'Electronics Inc', country: 'South Korea' },
    { id: '3', date: '2025-07-05', hsCode: '940360', product: 'Wooden furniture for offices', port: 'Da Nang', quantity: '850 Sets', value: 125000, buyer: 'Office Depot', country: 'Japan' },
    { id: '4', date: '2025-06-28', hsCode: '392690', product: 'Articles of plastics', port: 'Ho Chi Minh', quantity: '5,000 KG', value: 32000, buyer: 'Plastic World', country: 'Thailand' },
    { id: '5', date: '2025-06-20', hsCode: '730890', product: 'Structures of iron or steel', port: 'Hai Phong', quantity: '15 Tons', value: 67000, buyer: 'Steel Masters', country: 'Singapore' },
  ] as ShipmentRow[],
  importsByMonth: [
    { month: 'Jan 2025', value: 4.2 },
    { month: 'Feb 2025', value: 3.8 },
    { month: 'Mar 2025', value: 5.1 },
    { month: 'Apr 2025', value: 4.5 },
    { month: 'May 2025', value: 5.8 },
    { month: 'Jun 2025', value: 6.2 },
    { month: 'Jul 2025', value: 5.5 },
  ] as MonthlyData[],
  importsByCountry: [
    { country: 'China', value: 18.5, share: 35.9 },
    { country: 'Japan', value: 12.3, share: 23.9 },
    { country: 'South Korea', value: 8.7, share: 16.9 },
    { country: 'Thailand', value: 5.2, share: 10.1 },
    { country: 'Singapore', value: 3.9, share: 7.6 },
    { country: 'Others', value: 2.9, share: 5.6 },
  ] as CountryData[],
  importsByCommodity: [
    { hsCode: '847330', description: 'Parts and accessories for office machines', value: 12.5, share: 24.3 },
    { hsCode: '852872', description: 'Reception apparatus for television', value: 9.8, share: 19.0 },
    { hsCode: '940360', description: 'Wooden furniture for offices', value: 7.2, share: 14.0 },
    { hsCode: '392690', description: 'Articles of plastics', value: 6.1, share: 11.8 },
    { hsCode: '730890', description: 'Structures of iron or steel', value: 5.3, share: 10.3 },
  ] as CommodityRow[],
  topBuyers: [
    { name: 'Tech Solutions Ltd', value: 8.5, shipments: 145 },
    { name: 'Electronics Inc', value: 6.2, shipments: 98 },
    { name: 'Office Depot', value: 4.8, shipments: 76 },
    { name: 'Plastic World', value: 3.9, shipments: 62 },
  ] as BuyerRow[],
  competitors: [
    { name: 'Global Trading Co', turnover: 62.5, market: 'Vietnam' },
    { name: 'Asia Import Export', turnover: 48.3, market: 'Vietnam' },
    { name: 'Pacific Solutions', turnover: 39.7, market: 'Vietnam' },
  ] as CompetitorRow[],
  faqs: [
    { q: 'What is the data coverage for A & C Soluciones SA?', a: 'We provide comprehensive trade data from January 2018 to July 2025, including all import and export shipments.' },
    { q: 'How frequently is the company data updated?', a: 'Company profiles are updated daily with new shipment records typically available within 24-48 hours.' },
    { q: 'Can I download the shipment details?', a: 'Yes, all subscription plans include CSV export functionality for shipment data and analysis reports.' },
    { q: 'What are the top products imported by this company?', a: 'The company primarily imports office machinery parts, electronics, furniture, plastics, and steel structures.' },
    { q: 'Which countries does A & C Soluciones SA trade with?', a: 'Main trading partners include China (35.9%), Japan (23.9%), South Korea (16.9%), and Thailand (10.1%).' },
    { q: 'How can I use this data for business decisions?', a: 'Use this data to analyze trading patterns, identify market opportunities, assess competition, and find potential business partners.' },
  ],
};

export default function CompanyOverviewClient({ companyId: _companyId }: { companyId: string }) {
  const [activeTab, setActiveTab] = React.useState<'import' | 'export'>('import');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [currentPage, setCurrentPage] = React.useState(1);
  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null);
  const pageSize = 10;

  const data = mockCompanyData;

  // Filter shipments
  const filteredShipments = data.recentShipments.filter(s =>
    s.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.hsCode.includes(searchQuery) ||
    s.buyer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedShipments = filteredShipments.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const totalPages = Math.ceil(filteredShipments.length / pageSize);

  const exportCSV = () => {
    const headers = ['Date', 'HS Code', 'Product', 'Port', 'Quantity', 'Value (USD)', 'Buyer', 'Country'];
    const csv = [headers.join(',')]
      .concat(data.recentShipments.map(s =>
        [s.date, s.hsCode, `"${s.product}"`, s.port, s.quantity, s.value, `"${s.buyer}"`, s.country].join(',')
      ))
      .join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${data.name.replace(/\s+/g, '_')}_shipments.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Company Header Banner */}
      <section className="bg-gradient-to-r from-ttblue-600 to-ttblue-500 text-white py-12">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-sm mb-3 opacity-90">
              <a href="/" className="hover:underline">Home</a>
              <span>&gt;</span>
              <a href="/explore-data" className="hover:underline">Companies</a>
              <span>&gt;</span>
              <span>{data.name}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">{data.name}</h1>
            <div className="flex items-center gap-4 text-sm opacity-90">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {data.period}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Vietnam
              </span>
            </div>
            <p className="mt-4 text-base opacity-90 max-w-3xl">{data.description}</p>
          </motion.div>
        </div>
      </section>

      {/* KPI Cards */}
      <section className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6 border-2 border-blue-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Annual Turnover</h3>
                  <p className="text-sm text-gray-600">Import / Export (in Mn)</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-xs text-gray-600 mb-1">Import</p>
                <p className="text-2xl font-bold text-blue-600">${data.kpis.annualTurnover.import}M</p>
                <button className="mt-2 text-xs text-ttblue-700 hover:underline flex items-center gap-1">
                  View import shipments <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-xs text-gray-600 mb-1">Export</p>
                <p className="text-2xl font-bold text-green-600">${data.kpis.annualTurnover.export}M</p>
                <button className="mt-2 text-xs text-green-700 hover:underline flex items-center gap-1">
                  View export shipments <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6 border-2 border-purple-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Ship className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Annual Shipment</h3>
                  <p className="text-sm text-gray-600">Import / Export (in K)</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-xs text-gray-600 mb-1">Import</p>
                <p className="text-2xl font-bold text-purple-600">{data.kpis.annualShipment.import}K</p>
                <button className="mt-2 text-xs text-purple-700 hover:underline flex items-center gap-1">
                  View details <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <p className="text-xs text-gray-600 mb-1">Export</p>
                <p className="text-2xl font-bold text-orange-600">{data.kpis.annualShipment.export}K</p>
                <button className="mt-2 text-xs text-orange-700 hover:underline flex items-center gap-1">
                  View details <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Filters */}
          <aside className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md p-6 sticky top-4"
            >
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filters
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Trade Flow</label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveTab('import')}
                      className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition ${
                        activeTab === 'import' ? 'bg-ttblue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Import
                    </button>
                    <button
                      onClick={() => setActiveTab('export')}
                      className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition ${
                        activeTab === 'export' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Export
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Date Range</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
                    <option>Last 12 months</option>
                    <option>Last 6 months</option>
                    <option>Last 3 months</option>
                    <option>Custom range</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Country</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
                    <option>All Countries</option>
                    <option>China</option>
                    <option>Japan</option>
                    <option>South Korea</option>
                    <option>Thailand</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Product Category</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
                    <option>All Products</option>
                    <option>Machinery</option>
                    <option>Electronics</option>
                    <option>Furniture</option>
                    <option>Plastics</option>
                  </select>
                </div>

                <button className="w-full bg-ttblue-600 text-white py-2 rounded-lg hover:bg-ttblue-700 transition font-medium text-sm">
                  Apply Filters
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition font-medium text-sm">
                  Reset
                </button>
              </div>
            </motion.div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-9 space-y-8">
            {/* Prospect Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Find Your Next Business Prospect</h3>
                  <p className="text-gray-600 mb-4">
                    Discover potential trading partners, analyze market trends, and unlock new business opportunities with comprehensive trade data.
                  </p>
                  <button className="bg-ttblue-600 text-white px-6 py-2 rounded-lg hover:bg-ttblue-700 transition font-medium text-sm flex items-center gap-2">
                    Explore Buyers <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
                <Users className="w-16 h-16 text-indigo-300" />
              </div>
            </motion.div>

            {/* Recent Shipments Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  {data.name} - Recent Shipment - Import
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by product, HS code, or buyer..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ttblue-500"
                    />
                  </div>
                  <button
                    onClick={exportCSV}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium text-sm"
                  >
                    <Download className="w-4 h-4" />
                    Download CSV
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Date</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">HS Code</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Product</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Port</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Quantity</th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase">Value (USD)</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Buyer</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Country</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedShipments.map((shipment) => (
                      <tr key={shipment.id} className="border-b border-gray-100 hover:bg-blue-50 transition">
                        <td className="px-4 py-3 text-sm text-gray-900">{shipment.date}</td>
                        <td className="px-4 py-3 text-sm">
                          <span className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded font-mono text-xs">
                            {shipment.hsCode}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 max-w-xs truncate">{shipment.product}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{shipment.port}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{shipment.quantity}</td>
                        <td className="px-4 py-3 text-sm text-right font-semibold text-gray-900">
                          ${shipment.value.toLocaleString()}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">{shipment.buyer}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{shipment.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="p-4 border-t border-gray-200 flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Showing {(currentPage - 1) * pageSize + 1} - {Math.min(currentPage * pageSize, filteredShipments.length)} of {filteredShipments.length}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  <span className="px-4 py-2 text-sm text-gray-700">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Total Imports by Month */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-ttblue-600" />
                  Total Imports by Month
                </h3>
                <div className="space-y-2">
                  {data.importsByMonth.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-sm text-gray-700">{item.month}</span>
                      <span className="text-sm font-semibold text-gray-900">${item.value}M</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Monthly Trend Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-purple-600" />
                  Monthly Trend Chart of Imports
                </h3>
                <div className="space-y-3">
                  {data.importsByMonth.map((item, idx) => {
                    const maxVal = Math.max(...data.importsByMonth.map(d => d.value));
                    const percentage = (item.value / maxVal) * 100;
                    return (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600">{item.month}</span>
                          <span className="font-semibold text-gray-900">${item.value}M</span>
                        </div>
                        <div className="h-6 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${percentage}%` }}
                            transition={{ duration: 0.8, delay: 0.7 + idx * 0.05 }}
                            className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Imports by Country */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Globe className="w-5 h-5 text-green-600" />
                {data.name} - Imports by Country
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Analyze import distribution across different countries and regions. This data shows which countries are the primary sources for {data.name}&apos;s imports.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.importsByCountry.map((country, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + idx * 0.05 }}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">{country.country}</h4>
                      <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                        {country.share}%
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">${country.value}M</p>
                    <div className="mt-2 h-2 bg-blue-200 rounded-full overflow-hidden">
                      <div
                        style={{ width: `${country.share}%` }}
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Imports by Commodity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <Package className="w-5 h-5 text-orange-600" />
                  {data.name} - Imports by Commodity
                </h3>
                <button className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                  <Download className="w-4 h-4" />
                  Export
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">HS Code</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Product Description</th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase">Value (M)</th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase">Share %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.importsByCommodity.map((commodity, idx) => (
                      <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition">
                        <td className="px-4 py-3">
                          <span className="inline-block bg-orange-100 text-orange-700 px-2 py-1 rounded font-mono text-xs">
                            {commodity.hsCode}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">{commodity.description}</td>
                        <td className="px-4 py-3 text-sm text-right font-semibold text-gray-900">${commodity.value}M</td>
                        <td className="px-4 py-3 text-sm text-right text-gray-700">{commodity.share}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Top Buyers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-600" />
                {data.name} - Top Buyers
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {data.topBuyers.map((buyer, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 1.0 + idx * 0.05 }}
                    className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4 border border-indigo-100"
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">{buyer.name}</h4>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">Total Value</span>
                      <span className="text-lg font-bold text-indigo-600">${buyer.value}M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Shipments</span>
                      <span className="text-sm font-semibold text-gray-900">{buyer.shipments}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Top Competitors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Top Competitors of {data.name}</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {data.competitors.map((competitor, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.1 + idx * 0.05 }}
                    className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-lg p-4 border border-rose-100"
                  >
                    <h4 className="font-semibold text-gray-900 mb-3">{competitor.name}</h4>
                    <div className="space-y-2">
                      <div>
                        <span className="text-xs text-gray-600 block">Import Turnover</span>
                        <span className="text-xl font-bold text-rose-600">${competitor.turnover}M</span>
                      </div>
                      <div>
                        <span className="text-xs text-gray-600 block">Market</span>
                        <span className="text-sm font-medium text-gray-900">{competitor.market}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Questions you might have</h3>
              <div className="space-y-3">
                {data.faqs.map((faq, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition"
                    >
                      <span className="font-medium text-gray-900 text-sm">{faq.q}</span>
                      {expandedFaq === idx ? (
                        <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    {expandedFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-4 pb-4"
                      >
                        <p className="text-sm text-gray-600">{faq.a}</p>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </main>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-ttblue-600 to-ttblue-500 py-12">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Get Global Trade Data Online at Your Fingertips</h2>
            <p className="text-lg mb-8 opacity-90">
              Access comprehensive trade intelligence to grow your business worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-ttblue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Try Free
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
