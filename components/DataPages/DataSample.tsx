"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Download, Database, CheckCircle } from 'lucide-react';

interface DataSampleProps {
  type: 'import' | 'export';
}

const importSampleData = {
  year: '2018',
  month: 'April',
  date: '01 April 2018',
  companyCode: '301020722',
  vietnamImporterName: 'Luc Phuc Trading – Technical Services Co. Ltd.',
  foreignExporterName: 'Siemens Healthcare PTE. Ltd.',
  hsCode: '30029000',
  productDescription: 'Advia Centaur FT4, SMN: 10282219 In Vitro Diagnostic Bacteria',
  hsCode2: '29032200',
  unitPrice: '1.37',
  originCountry: 'United States of America',
  destinationCountry: 'Vietnam',
  unit: 'Sacks / boxes / packages',
  quantity: '22',
  value: '6545',
  unitPrice2: '297.5',
  importPort: 'Tan Son Nhat Airport',
  foreignPort: 'Chicago ILL',
  deliveryCondition: 'CIP',
  paymentCondition: 'TTR'
};

const exportSampleData = {
  date: '5 June 2018',
  foreignPort: 'Svay Rieng',
  companyCode: '301972094002',
  exportPort: 'Moc Bai (Tay Ninh)',
  vietnamExporterCompany: 'Branch Corporation Transport Service & Trade Capitalize',
  quantity: '1160',
  foreignImporterCompany: 'Nissey (Cambodia) Metal Co. Ltd.',
  value: '1597.1014',
  hsCode: '29032200',
  unitPrice: '1.37',
  description: 'Water cleansing machinery Triclo details ethylene (New 100%)',
  unit: 'KG',
  originCountry: 'Japan',
  deliveryCondition: 'DAF',
  exportCountry: 'Vietnam',
  paymentCondition: 'TTR',
  importCountry: 'Cambodia'
};

export default function DataSample({ type }: DataSampleProps) {
  const isImport = type === 'import';
  
  const title = isImport 
    ? 'Vietnam Import Data Sample' 
    : 'Vietnam Export Data Sample';
  
  const description = isImport
    ? 'Our data is covered with the most comprehensive Vietnam import statistics and company names. Below given sample shows data columns which are covered in import data of Vietnam.'
    : 'In our data, Vietnam export statistics with company names are covered to have a better analysis of country\'s market. Take a look at the sample given below which will help you understand the exact format of Vietnam export data.';

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
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Date</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.date}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Code of Company</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.companyCode}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Vietnam Importer Name</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900" colSpan={3}>{importSampleData.vietnamImporterName}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Foreign Exporter Name</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900" colSpan={3}>{importSampleData.foreignExporterName}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">HS Code</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.hsCode}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Product Description</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.productDescription}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">HS Code</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.hsCode2}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Unit Price (USD)</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.unitPrice}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Origin Country</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.originCountry}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Destination Country</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.destinationCountry}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Unit</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.unit}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Quantity</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.quantity}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Value (USD)</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.value}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Unit Price (USD)</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.unitPrice2}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Import Port (Vietnam)</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.importPort}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Foreign Port</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.foreignPort}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Condition of Goods Delivery</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.deliveryCondition}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-blue-50">Payment Condition</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{importSampleData.paymentCondition}</td>
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
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50 w-1/3">Date</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.date}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50 w-1/3">Foreign Port</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.foreignPort}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Company Code</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.companyCode}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Export Port Vietnam</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.exportPort}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Vietnam Exporter Company</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900" colSpan={3}>{exportSampleData.vietnamExporterCompany}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Foreign Importer Company</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900" colSpan={3}>{exportSampleData.foreignImporterCompany}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Quantity</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.quantity}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Value (USD)</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.value}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">HS Code</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.hsCode}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Unit Price (USD)</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.unitPrice}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Description of Goods</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900" colSpan={3}>{exportSampleData.description}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Unit</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.unit}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Origin Country</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.originCountry}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Export Country</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.exportCountry}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Condition of Goods Delivery</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.deliveryCondition}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Import Country</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.importCountry}</td>
            <td className="py-3 px-4 font-semibold text-xs text-gray-700 bg-green-50">Payment Condition</td>
            <td className="py-3 px-4 text-xs font-normal text-gray-900">{exportSampleData.paymentCondition}</td>
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
                  Get the full sample dataset with all data fields in Excel format
                </p>
              </div>
              <motion.a
                href={isImport ? '/vietnam-import-data-sample.xlsx' : '/vietnam-export-data-sample.xlsx'}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 ${isImport ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'} text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all whitespace-nowrap`}
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
