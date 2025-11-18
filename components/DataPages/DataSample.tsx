"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Download, Database, CheckCircle } from 'lucide-react';

interface DataSampleProps {
  type: 'import' | 'export';
}

const importSampleData = {
  year: '2025',
  month: '9',
  importDate: '2025-09-30',
  declarationNumber: '107576198660',
  importCountry: 'Vietnam (VN)',
  exportCountry: 'China (CN)',
  originCountry: 'Germany (DE)',
  modeOfTransport: 'Air (Code: A)',
  importPurpose: 'Ordinary import (investment business)',
  typeOfImportCode: 'A41',
  deliveryCondition: 'FCA',
  importerName: 'Tetra Pak Vietnam JSC',
  importerNameEN: 'Tetra Pak Vietnam Joint Stock Company',
  importerCode: '302803331',
  importerAddress: '14th Floor, Metropolitan Building, 235 Dong Khoi, Ben Nghe Ward, District 1, Ho Chi Minh City, Vietnam',
  city: 'Ho Chi Minh City',
  state: 'Ho Chi Minh City',
  postalCode: '700000',
  phone: '8257100',
  supplierName: 'Tetra Pak Trading Shanghai Company Limited',
  supplierAddress: 'Business License No 313893 (Pudong) Address: 201 East Kang Qiao Dong Road, Pudong District, Shanghai 201315, PR China',
  supplierCountry: 'China (CN)',
  cooCodeFrom: 'DE',
  hsCode: '84824000',
  heading: '8482',
  subHeading: '848240',
  chapter: '84',
  productDescription: 'Machine parts processing, pouring milk: needle roller bearings, needle bearing, 3.00 x 6.50 x 6.00 mm; 90600-3962; NSX: SKF Sverige AB',
  rawUnit: 'pce',
  quantity: '10 pieces',
  declaredQuantity: '10',
  unit: 'pieces',
  unitPrice: '2.48',
  declaredPricePerUnit: '2.48',
  totalValueUSD: '24.8',
  totalValue1USD: '24.8',
  totalValueVND: '650,504',
  importDutyRate: '0.03',
  totalDutyAmount: '1',
  dutyAmtAndOther1: '1',
  declaredPaymentCurrency: 'USD',
  exchangeRateUSD: '26185',
  exchangeRateVND: '26230',
  meansOfTransportation: 'Air',
  meansOfTransportationCode: 'A',
  paymentCondition: 'KC',
  provenance: 'Ho Chi Minh City',
  customsBranchCode1: 'HQCNC'
};

const exportSampleData = {
  declarationNumber: '307816074660',
  exportDate: '2025-09-30',
  year: '2025',
  month: '9',
  exportCountry: 'Vietnam (VN)',
  originCountry: 'Vietnam (VN)',
  destinationCountry: 'United States of America (US)',
  loadingCountryCode: 'VN',
  typeOfExportCode: 'E62',
  exportPurpose: 'Ordinary export of products for export production',
  deliveryCondition: 'FOB',
  exporterName: 'Yong Rui Furniture Vietnam Company Limited',
  exporterCode: '3703224104',
  exporterAddress: 'Part of Lot CN11, Road N4, Song Than 3 Industrial Park, Phu Tan Ward, Thu Dau Mot City, Binh Duong Province, Vietnam',
  destinationCountryCode: 'US',
  rawExporter: 'RAW EXPORTER (Vietnamese text)',
  rawExporterAddress: 'RAW EXPORTER ADDRESS (Vietnamese text)',
  rawExporterCode: '3703224104',
  buyerName: 'IKEA Supply AG',
  buyerAddress: 'Grussenwerg 15 4133 Pratteln Switzerland',
  buyerCountry: 'United States of America',
  buyerCountryCode: 'US',
  rawBuyer: 'ikea supply ag',
  hsCode: '94013900',
  heading: '9401',
  subHeading: '940139',
  chapter: '94',
  productDescription: '70507604-1#& Office swivel chair has height adjustment, framed by iron, the size 1.03*0.84*0.87 m, brand IKEA, labeled goods, new goods 100%#&VN',
  rawProductDescription: 'RAW PRODUCT DESCRIPTION (Vietnamese text)',
  rawUnit: 'pce',
  quantity: '60 pieces',
  declaredQuantity: '60',
  unit: 'pieces',
  unit1: 'pieces',
  unitPrice: '28.67',
  declaredPricePerUnit: '28.67',
  unitPriceFC: '28.67',
  totalValueUSD: '1720.2',
  declaredTotalValueUSD: '1720.2',
  totalValue1USD: '1720.2',
  totalValueVND: '45,120,800',
  quantityHeader: '1',
  declaredPaymentCurrency: 'USD',
  exchangeRateUSD: '26230',
  exchangeRateVND: '26230',
  meansOfTransportation: 'Sea',
  meansOfTransportationCode: '2',
  portOfDischarge: 'Unknown',
  portOfDischargeCode: 'pttmp00000000',
  customsBranchName: 'hqtdmot',
  cooCode: 'VN',
  rawOriginCountry: 'Viet Nam',
  rawExportCountry: 'Viet Nam',
  rawDestinationCountry: 'United States of America',
  provenance: 'Binh Duong',
  rawProvenance: 'RAW PROVENANCE (Vietnamese text)',
  paymentCondition: 'KC',
  dateISO: '2025-09-30T00:00:00.000Z'
};

export default function DataSample({ type }: DataSampleProps) {
  const isImport = type === 'import';
  
  const title = isImport 
    ? 'Vietnam Import Data Sample' 
    : 'Vietnam Export Data Sample';
  
  const description = isImport
    ? 'Our data is covered with the most comprehensive Vietnam import statistics and company names. Below given sample shows data columns which are covered in import data of Vietnam.'
    : 'In our data, Vietnam export statistics with company names are covered to have a better analysis of country\'s market. Take a look at the sample given below which will help you understand the exact format of Vietnam export data.';

  const downloadExcel = () => {
    const data = isImport ? importSampleData : exportSampleData;
    
    // Convert data object to array of [key, value] pairs
    const rows = Object.entries(data).map(([key, value]) => {
      // Convert camelCase to Title Case with spaces
      const fieldName = key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (str) => str.toUpperCase())
        .trim();
      return [fieldName, value];
    });

    // Create CSV content
    let csvContent = 'Field,Value\n';
    rows.forEach(([field, value]) => {
      // Escape commas and quotes in values
      const escapedValue = String(value).includes(',') || String(value).includes('"') 
        ? `"${String(value).replace(/"/g, '""')}"` 
        : value;
      csvContent += `${field},${escapedValue}\n`;
    });

    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `vietnam-${isImport ? 'import' : 'export'}-data-sample.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderImportTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50 w-1/3">Year</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.year}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50 w-1/3">Month</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.month}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Import Date</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.importDate}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Declaration Number</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.declarationNumber}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Import Country</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.importCountry}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Export Country</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.exportCountry}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Origin Country</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.originCountry}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Mode of Transport</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.modeOfTransport}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Import Purpose</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.importPurpose}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Type of Import Code</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.typeOfImportCode}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Importer Name</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900" colSpan={3}>{importSampleData.importerName}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Importer Name (EN)</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900" colSpan={3}>{importSampleData.importerNameEN}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Importer Code</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.importerCode}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Phone</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.phone}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Importer Address</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900" colSpan={3}>{importSampleData.importerAddress}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">City</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.city}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">State</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.state}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Postal Code</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.postalCode}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">COO Code From</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.cooCodeFrom}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Supplier Name</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900" colSpan={3}>{importSampleData.supplierName}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Supplier Address</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900" colSpan={3}>{importSampleData.supplierAddress}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Supplier Country</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900" colSpan={3}>{importSampleData.supplierCountry}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">HS Code</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.hsCode}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Chapter</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.chapter}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Heading</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.heading}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Sub Heading</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.subHeading}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Product Description</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900" colSpan={3}>{importSampleData.productDescription}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Quantity</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.quantity}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Declared Quantity</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.declaredQuantity}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Unit</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.unit}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Raw Unit</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.rawUnit}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Unit Price (USD)</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.unitPrice}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Declared Price per Unit</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.declaredPricePerUnit}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Total Value (USD)</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.totalValueUSD}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Total Value (VND)</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.totalValueVND}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Declared Payment Currency</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.declaredPaymentCurrency}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Import Duty Rate</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.importDutyRate}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Total Duty Amount</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.totalDutyAmount}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Exchange Rate (USD)</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.exchangeRateUSD}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Exchange Rate (VND)</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.exchangeRateVND}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Means of Transportation</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.meansOfTransportation}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Payment Condition</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.paymentCondition}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Delivery Condition</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.deliveryCondition}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Provenance</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.provenance}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Customs Branch Code</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.customsBranchCode1}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const renderExportTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50 w-1/3">Declaration Number</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.declarationNumber}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50 w-1/3">Export Date</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.exportDate}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Year</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.year}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Month</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.month}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Export Country</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.exportCountry}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Origin Country</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.originCountry}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Destination Country</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900" colSpan={3}>{exportSampleData.destinationCountry}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Type of Export Code</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.typeOfExportCode}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Loading Country Code</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.loadingCountryCode}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Export Purpose</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900" colSpan={3}>{exportSampleData.exportPurpose}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Exporter Name</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900" colSpan={3}>{exportSampleData.exporterName}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Exporter Code</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.exporterCode}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Destination Country Code</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.destinationCountryCode}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Exporter Address</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900" colSpan={3}>{exportSampleData.exporterAddress}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Raw Exporter</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900" colSpan={3}>{exportSampleData.rawExporter}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Raw Exporter Address</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900" colSpan={3}>{exportSampleData.rawExporterAddress}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Buyer Name</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900" colSpan={3}>{exportSampleData.buyerName}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Buyer Address</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900" colSpan={3}>{exportSampleData.buyerAddress}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Buyer Country</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.buyerCountry}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Buyer Country Code</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.buyerCountryCode}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">HS Code</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.hsCode}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Chapter</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.chapter}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Heading</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.heading}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Sub Heading</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.subHeading}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Product Description</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900" colSpan={3}>{exportSampleData.productDescription}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Raw Product Description</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900" colSpan={3}>{exportSampleData.rawProductDescription}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Quantity</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.quantity}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Declared Quantity</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.declaredQuantity}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Unit</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.unit}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Raw Unit</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.rawUnit}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Unit Price (USD)</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.unitPrice}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Declared Price per Unit</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.declaredPricePerUnit}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Total Value (USD)</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.totalValueUSD}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Declared Total Value (USD)</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.declaredTotalValueUSD}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Total Value (VND)</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.totalValueVND}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Quantity Header</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.quantityHeader}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Declared Payment Currency</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.declaredPaymentCurrency}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Exchange Rate (USD)</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.exchangeRateUSD}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Exchange Rate (VND)</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.exchangeRateVND}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Means of Transportation</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.meansOfTransportation}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Transportation Code</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.meansOfTransportationCode}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Port of Discharge</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.portOfDischarge}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Port of Discharge Code</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.portOfDischargeCode}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Customs Branch Name</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.customsBranchName}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">COO Code</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.cooCode}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Raw Origin Country</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.rawOriginCountry}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Raw Export Country</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.rawExportCountry}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Raw Destination Country</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.rawDestinationCountry}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Provenance</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.provenance}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Raw Provenance</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.rawProvenance}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Payment Condition</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.paymentCondition}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Delivery Condition</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.deliveryCondition}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.04, 0.06, 0.04],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute top-0 right-0 w-96 h-96 ${isImport ? 'bg-blue-200' : 'bg-green-200'} rounded-full blur-3xl`}
        />
      </div>

      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className={`inline-flex items-center gap-2 ${isImport ? 'bg-blue-50 text-blue-600 border-blue-100' : 'bg-green-50 text-green-600 border-green-100'} px-4 py-2 rounded-full text-sm font-medium mb-6 border`}
          >
            <Database className="w-4 h-4" />
            Sample Data
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Data Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden"
        >
          {/* Table Header */}
          <div className={`${isImport ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 'bg-gradient-to-r from-green-500 to-green-600'} p-6`}>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <CheckCircle className="w-6 h-6" />
              Sample #1
            </h3>
          </div>

          {/* Table Content */}
          {isImport ? renderImportTable() : renderExportTable()}

          {/* Download Section */}
          <div className={`${isImport ? 'bg-gradient-to-r from-blue-50 to-indigo-50' : 'bg-gradient-to-r from-green-50 to-emerald-50'} p-8 border-t-2 border-gray-200`}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Download Complete Sample Data
                </h4>
                <p className="text-gray-600">
                  Get the full sample dataset with all data fields in Excel format (CSV)
                </p>
              </div>
              <motion.a
                onClick={downloadExcel}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 ${isImport ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'} text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all whitespace-nowrap cursor-pointer`}
              >
                <Download className="w-5 h-5" />
                Download {isImport ? 'Import' : 'Export'} Data Sample
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Info Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600">
            This is a sample of one shipment record. Our database contains millions of such records with comprehensive details.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
