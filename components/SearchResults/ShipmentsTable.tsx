"use client";

import React, { useState } from 'react';
import { 
  Eye, 
  ChevronDown, 
  ChevronUp, 
  ArrowUpDown, 
  Lock, 
  Download,
  Settings
} from 'lucide-react';

interface Shipment {
  id: string;
  date: string;
  hs_code: string;
  product_description: string;
  importer_name: string;
  importer_locked?: boolean;
  exporter_name: string;
  exporter_locked?: boolean;
  destination_country: string;
  quantity: number;
  quantity_unit: string;
  net_weight_kg: number;
  total_value_usd: number;
  origin_country: string;
  import_port?: string;
  export_port?: string;
  transport_mode?: string;
  bl_number?: string;
}

interface ShipmentsTableProps {
  shipments: Shipment[];
  onViewDetails: (shipmentId: string) => void;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  onSort?: (column: string) => void;
}

export default function ShipmentsTable({ 
  shipments, 
  onViewDetails, 
  sortBy: _sortBy, 
  sortOrder: _sortOrder,
  onSort 
}: ShipmentsTableProps) {
  const [selectedColumns, setSelectedColumns] = useState([
    'view', 'date', 'hs_code', 'product', 'importer', 'exporter',
    'destination', 'quantity', 'weight', 'value', 'exporter_name'
  ]);
  const [showColumnSelector, setShowColumnSelector] = useState(false);
  const [expandedRows, setExpandedRows] = useState<string[]>([]);

  const allColumns = [
    { id: 'view', label: 'View', locked: false },
    { id: 'date', label: 'Date', locked: false, sortable: true },
    { id: 'hs_code', label: 'HS Code', locked: false },
    { id: 'product', label: 'Product Description', locked: false },
    { id: 'importer', label: 'Importer', locked: true },
    { id: 'exporter', label: 'Exporter', locked: true },
    { id: 'destination', label: 'Destination Country', locked: false },
    { id: 'quantity', label: 'Quantity', locked: false, sortable: true },
    { id: 'weight', label: 'Net Weight (KG)', locked: false },
    { id: 'value', label: 'Total Value (USD)', locked: false, sortable: true },
    { id: 'exporter_name', label: 'Exporter Name', locked: true },
  ];

  function handleSort(column: string) {
    if (onSort) {
      onSort(column);
    }
  }

  function toggleRow(rowId: string) {
    if (expandedRows.includes(rowId)) {
      setExpandedRows(expandedRows.filter(id => id !== rowId));
    } else {
      setExpandedRows([...expandedRows, rowId]);
    }
  }

  function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  }

  function formatNumber(num: number): string {
    return new Intl.NumberFormat('en-US').format(num);
  }

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200">
      {/* Table Header Actions */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Showing <span className="font-semibold text-gray-900">{shipments.length}</span> shipments
        </div>
        <div className="flex items-center gap-2">
          {/* Edit Columns */}
          <div className="relative">
            <button
              onClick={() => setShowColumnSelector(!showColumnSelector)}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Settings className="w-4 h-4" />
              Edit Columns
            </button>
            {showColumnSelector && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                <div className="p-3 border-b border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-900">Select Columns</h4>
                </div>
                <div className="p-2 max-h-80 overflow-y-auto">
                  {allColumns.map(col => (
                    <label
                      key={col.id}
                      className={`flex items-center gap-2 p-2 rounded hover:bg-gray-50 ${col.locked ? 'opacity-60' : 'cursor-pointer'}`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedColumns.includes(col.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedColumns([...selectedColumns, col.id]);
                          } else {
                            setSelectedColumns(selectedColumns.filter(c => c !== col.id));
                          }
                        }}
                        disabled={col.locked}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700 flex-1">{col.label}</span>
                      {col.locked && <Lock className="w-3 h-3 text-orange-500" />}
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Download */}
          <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-colors">
            <Download className="w-4 h-4" />
            Download
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {selectedColumns.includes('view') && (
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider w-20">
                  View
                </th>
              )}
              {selectedColumns.includes('date') && (
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  <button
                    onClick={() => handleSort('date')}
                    className="flex items-center gap-1 hover:text-gray-900"
                  >
                    Date
                    <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
              )}
              {selectedColumns.includes('hs_code') && (
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  HS Code
                </th>
              )}
              {selectedColumns.includes('product') && (
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider min-w-[250px]">
                  Product Description
                </th>
              )}
              {selectedColumns.includes('importer') && (
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  <div className="flex items-center gap-1">
                    Importer
                    <Lock className="w-3 h-3 text-orange-500" />
                  </div>
                </th>
              )}
              {selectedColumns.includes('exporter') && (
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  <div className="flex items-center gap-1">
                    Exporter
                    <Lock className="w-3 h-3 text-orange-500" />
                  </div>
                </th>
              )}
              {selectedColumns.includes('destination') && (
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Destination
                </th>
              )}
              {selectedColumns.includes('quantity') && (
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  <button
                    onClick={() => handleSort('quantity')}
                    className="flex items-center gap-1 hover:text-gray-900 ml-auto"
                  >
                    Quantity
                    <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
              )}
              {selectedColumns.includes('weight') && (
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Weight (KG)
                </th>
              )}
              {selectedColumns.includes('value') && (
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  <button
                    onClick={() => handleSort('value')}
                    className="flex items-center gap-1 hover:text-gray-900 ml-auto"
                  >
                    Value (USD)
                    <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
              )}
              {selectedColumns.includes('exporter_name') && (
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  <div className="flex items-center gap-1">
                    Exporter Name
                    <Lock className="w-3 h-3 text-orange-500" />
                  </div>
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {shipments.map((shipment) => (
              <React.Fragment key={shipment.id}>
                <tr className="hover:bg-gray-50 transition-colors">
                  {selectedColumns.includes('view') && (
                    <td className="px-4 py-3">
                      <button
                        onClick={() => onViewDetails(shipment.id)}
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                        aria-label="View shipment details"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                    </td>
                  )}
                  {selectedColumns.includes('date') && (
                    <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">
                      {formatDate(shipment.date)}
                    </td>
                  )}
                  {selectedColumns.includes('hs_code') && (
                    <td className="px-4 py-3 text-sm whitespace-nowrap">
                      <a
                        href={`/hs-code/${shipment.hs_code}`}
                        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                      >
                        {shipment.hs_code}
                      </a>
                    </td>
                  )}
                  {selectedColumns.includes('product') && (
                    <td className="px-4 py-3 text-sm text-gray-900">
                      <div className="flex items-center gap-2">
                        <span title={shipment.product_description}>
                          {truncateText(shipment.product_description, 60)}
                        </span>
                        <button
                          onClick={() => toggleRow(shipment.id)}
                          className="text-gray-400 hover:text-gray-600"
                          aria-label="Expand row"
                        >
                          {expandedRows.includes(shipment.id) ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </td>
                  )}
                  {selectedColumns.includes('importer') && (
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {shipment.importer_locked ? (
                        <div className="flex items-center gap-2">
                          <span className="text-gray-400">Locked</span>
                          <Lock className="w-3.5 h-3.5 text-orange-500" />
                        </div>
                      ) : (
                        <span>{shipment.importer_name}</span>
                      )}
                    </td>
                  )}
                  {selectedColumns.includes('exporter') && (
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {shipment.exporter_locked ? (
                        <div className="flex items-center gap-2">
                          <span className="text-gray-400">Locked</span>
                          <Lock className="w-3.5 h-3.5 text-orange-500" />
                        </div>
                      ) : (
                        <span>{shipment.exporter_name}</span>
                      )}
                    </td>
                  )}
                  {selectedColumns.includes('destination') && (
                    <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">
                      {shipment.destination_country}
                    </td>
                  )}
                  {selectedColumns.includes('quantity') && (
                    <td className="px-4 py-3 text-sm text-gray-900 text-right whitespace-nowrap">
                      {formatNumber(shipment.quantity)} {shipment.quantity_unit}
                    </td>
                  )}
                  {selectedColumns.includes('weight') && (
                    <td className="px-4 py-3 text-sm text-gray-900 text-right whitespace-nowrap">
                      {formatNumber(shipment.net_weight_kg)}
                    </td>
                  )}
                  {selectedColumns.includes('value') && (
                    <td className="px-4 py-3 text-sm text-gray-900 text-right whitespace-nowrap font-medium">
                      {formatCurrency(shipment.total_value_usd)}
                    </td>
                  )}
                  {selectedColumns.includes('exporter_name') && (
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {shipment.exporter_locked ? (
                        <div className="flex items-center gap-2">
                          <span className="text-gray-400">Locked</span>
                          <Lock className="w-3.5 h-3.5 text-orange-500" />
                        </div>
                      ) : (
                        <span>{shipment.exporter_name}</span>
                      )}
                    </td>
                  )}
                </tr>
                {expandedRows.includes(shipment.id) && (
                  <tr>
                    <td colSpan={selectedColumns.length} className="bg-gray-50 px-4 py-3">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600 font-medium">Origin:</span>
                          <p className="text-gray-900 mt-1">{shipment.origin_country}</p>
                        </div>
                        {shipment.import_port && (
                          <div>
                            <span className="text-gray-600 font-medium">Import Port:</span>
                            <p className="text-gray-900 mt-1">{shipment.import_port}</p>
                          </div>
                        )}
                        {shipment.export_port && (
                          <div>
                            <span className="text-gray-600 font-medium">Export Port:</span>
                            <p className="text-gray-900 mt-1">{shipment.export_port}</p>
                          </div>
                        )}
                        {shipment.transport_mode && (
                          <div>
                            <span className="text-gray-600 font-medium">Transport:</span>
                            <p className="text-gray-900 mt-1">{shipment.transport_mode}</p>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {shipments.length === 0 && (
        <div className="py-12 text-center">
          <div className="text-gray-400 mb-2">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">No shipments found</h3>
          <p className="text-sm text-gray-600">Try adjusting your filters or search criteria</p>
        </div>
      )}
    </div>
  );
}
