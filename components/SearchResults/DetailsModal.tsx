"use client";

import React from 'react';
import { X, Lock, Calendar, Package, DollarSign, Globe, Anchor, Truck } from 'lucide-react';

interface ShipmentDetails {
  id: string;
  date: string;
  hs_code: string;
  product_description: string;
  importer_name: string;
  importer_address?: string;
  importer_locked?: boolean;
  exporter_name: string;
  exporter_address?: string;
  exporter_locked?: boolean;
  origin_country: string;
  destination_country: string;
  quantity: number;
  quantity_unit: string;
  net_weight_kg: number;
  gross_weight_kg?: number;
  total_value_usd: number;
  unit_price_usd?: number;
  import_port?: string;
  export_port?: string;
  transport_mode?: string;
  bl_number?: string;
  invoice_number?: string;
  container_number?: string;
}

interface DetailsModalProps {
  shipment: ShipmentDetails | null;
  onClose: () => void;
}

export default function DetailsModal({ shipment, onClose }: DetailsModalProps) {
  if (!shipment) return null;

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
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-4 flex items-center justify-between">
          <h2 id="modal-title" className="text-xl font-bold text-white">
            Shipment Details
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-6">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <InfoCard
              icon={<Calendar className="w-5 h-5" />}
              label="Date"
              value={formatDate(shipment.date)}
              color="blue"
            />
            <InfoCard
              icon={<Package className="w-5 h-5" />}
              label="HS Code"
              value={shipment.hs_code}
              color="purple"
            />
            <InfoCard
              icon={<DollarSign className="w-5 h-5" />}
              label="Total Value"
              value={formatCurrency(shipment.total_value_usd)}
              color="green"
            />
          </div>

          {/* Product Description */}
          <Section title="Product Information">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-900 leading-relaxed">
                {shipment.product_description}
              </p>
            </div>
          </Section>

          {/* Importer & Exporter */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Importer */}
            <Section title="Importer">
              {shipment.importer_locked ? (
                <LockedField section="Importer" />
              ) : (
                <div className="space-y-2">
                  <DetailRow label="Name" value={shipment.importer_name} />
                  {shipment.importer_address && (
                    <DetailRow label="Address" value={shipment.importer_address} />
                  )}
                </div>
              )}
            </Section>

            {/* Exporter */}
            <Section title="Exporter">
              {shipment.exporter_locked ? (
                <LockedField section="Exporter" />
              ) : (
                <div className="space-y-2">
                  <DetailRow label="Name" value={shipment.exporter_name} />
                  {shipment.exporter_address && (
                    <DetailRow label="Address" value={shipment.exporter_address} />
                  )}
                </div>
              )}
            </Section>
          </div>

          {/* Trade Details */}
          <Section title="Trade Details">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DetailRow 
                label="Origin Country" 
                value={shipment.origin_country}
                icon={<Globe className="w-4 h-4 text-blue-500" />}
              />
              <DetailRow 
                label="Destination Country" 
                value={shipment.destination_country}
                icon={<Globe className="w-4 h-4 text-green-500" />}
              />
              {shipment.export_port && (
                <DetailRow 
                  label="Export Port" 
                  value={shipment.export_port}
                  icon={<Anchor className="w-4 h-4 text-cyan-500" />}
                />
              )}
              {shipment.import_port && (
                <DetailRow 
                  label="Import Port" 
                  value={shipment.import_port}
                  icon={<Anchor className="w-4 h-4 text-indigo-500" />}
                />
              )}
              {shipment.transport_mode && (
                <DetailRow 
                  label="Transport Mode" 
                  value={shipment.transport_mode}
                  icon={<Truck className="w-4 h-4 text-orange-500" />}
                />
              )}
            </div>
          </Section>

          {/* Quantity & Weight */}
          <Section title="Quantity & Weight">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <DetailRow 
                label="Quantity" 
                value={`${formatNumber(shipment.quantity)} ${shipment.quantity_unit}`}
              />
              <DetailRow 
                label="Net Weight" 
                value={`${formatNumber(shipment.net_weight_kg)} KG`}
              />
              {shipment.gross_weight_kg && (
                <DetailRow 
                  label="Gross Weight" 
                  value={`${formatNumber(shipment.gross_weight_kg)} KG`}
                />
              )}
              {shipment.unit_price_usd && (
                <DetailRow 
                  label="Unit Price" 
                  value={formatCurrency(shipment.unit_price_usd)}
                />
              )}
            </div>
          </Section>

          {/* Shipping Documents */}
          {(shipment.bl_number || shipment.invoice_number || shipment.container_number) && (
            <Section title="Shipping Documents">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {shipment.bl_number && (
                  <DetailRow label="B/L Number" value={shipment.bl_number} />
                )}
                {shipment.invoice_number && (
                  <DetailRow label="Invoice Number" value={shipment.invoice_number} />
                )}
                {shipment.container_number && (
                  <DetailRow label="Container Number" value={shipment.container_number} />
                )}
              </div>
            </Section>
          )}

          {/* CTA */}
          <div className="mt-8 p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-200">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Want to see more shipment details?
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  Unlock complete importer and exporter information, full shipping documents, and advanced analytics with a Pro subscription.
                </p>
                <div className="flex gap-3">
                  <button className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 font-semibold text-sm transition-colors">
                    Upgrade to Pro
                  </button>
                  <button className="px-6 py-2.5 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 font-semibold text-sm transition-colors">
                    Schedule Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ 
  icon, 
  label, 
  value, 
  color 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  color: 'blue' | 'purple' | 'green'; 
}) {
  const colorClasses = {
    blue: 'from-blue-500 to-cyan-500',
    purple: 'from-purple-500 to-pink-500',
    green: 'from-green-500 to-emerald-500',
  };

  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <div className="flex items-center gap-3 mb-2">
        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center text-white`}>
          {icon}
        </div>
        <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
          {label}
        </span>
      </div>
      <div className="text-lg font-bold text-gray-900 pl-13">
        {value}
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3 flex items-center gap-2">
        <div className="h-1 w-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded"></div>
        {title}
      </h3>
      {children}
    </div>
  );
}

function DetailRow({ 
  label, 
  value, 
  icon 
}: { 
  label: string; 
  value: string; 
  icon?: React.ReactNode; 
}) {
  return (
    <div className="flex items-start gap-2">
      {icon && <div className="mt-0.5">{icon}</div>}
      <div className="flex-1">
        <div className="text-xs text-gray-600 font-medium mb-0.5">{label}</div>
        <div className="text-sm text-gray-900 font-medium">{value}</div>
      </div>
    </div>
  );
}

function LockedField({ section }: { section: string }) {
  return (
    <div className="bg-gray-100 rounded-lg p-4 border-2 border-dashed border-gray-300">
      <div className="flex items-center gap-2 mb-2">
        <Lock className="w-5 h-5 text-orange-500" />
        <span className="text-sm font-semibold text-gray-900">Locked Information</span>
      </div>
      <p className="text-xs text-gray-600 mb-3">
        {section} details are available in the Pro plan
      </p>
      <button className="text-xs bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-orange-700 font-semibold">
        Unlock Now
      </button>
    </div>
  );
}
