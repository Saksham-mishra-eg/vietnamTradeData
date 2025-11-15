"use client";

import React, {useMemo, useState} from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { sampleImportData, sampleExportData, DataRow } from './sampleData';

type Props = { pageType: 'import' | 'export' };

export default function InteractiveDataSample({pageType}:Props){
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [country, setCountry] = useState('All');

  const rows = useMemo(()=> (pageType==='import' ? sampleImportData : sampleExportData), [pageType]);

  const filtered = rows.filter(r=>{
    if(query && !(`${r.product} ${r.hs} ${r.name}`).toLowerCase().includes(query.toLowerCase())) return false;
    if(category !== 'All' && r.product !== category) return false;
    if(country !== 'All' && r.country !== country) return false;
    return true;
  });

  const cols: GridColDef[] = [
    {field:'id', headerName:'ID', width:70},
    {field:'name', headerName: pageType==='import' ? 'Importer Name' : 'Exporter Name', width:180, renderCell:(params)=> {
      const v = params.value as string;
      return `${v.slice(0,3)}***`;
    }},
    {field:'product', headerName:'Product', width:160},
    {field:'hs', headerName:'HS Code', width:110},
    {field:'country', headerName: pageType==='import' ? 'Origin Country' : 'Destination Country', width:140},
    {field:'quantity', headerName:'Quantity', width:100},
    {field:'value', headerName:'Value (USD)', width:130},
    {field:'date', headerName:'Date', width:120}
  ];

  const categories = Array.from(new Set(rows.map(r=>r.product)));
  const countries = Array.from(new Set(rows.map(r=>r.country)));

  return (
    <section className="py-12 bg-gray-50" id="sample">
      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h3 className="text-2xl font-bold mb-4">Explore Live Data Sample</h3>
        <div className="mb-4 flex flex-col md:flex-row gap-3 md:items-center">
          <input aria-label="Search" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search by Product, HS Code, or Company" className="border p-2 rounded flex-1" />
          <select value={category} onChange={(e)=>setCategory(e.target.value)} className="border p-2 rounded">
            <option>All</option>
            {categories.map(c=> <option key={c}>{c}</option>)}
          </select>
          <select value={country} onChange={(e)=>setCountry(e.target.value)} className="border p-2 rounded">
            <option>All</option>
            {countries.map(c=> <option key={c}>{c}</option>)}
          </select>
        </div>

        <div style={{height:420, width:'100%'}}>
          <DataGrid rows={filtered as DataRow[]} columns={cols} pageSizeOptions={[10]} initialState={{pagination:{paginationModel:{pageSize:10}}}} disableRowSelectionOnClick />
        </div>

        <div className="mt-4 text-sm text-ttgray-600">Showing {filtered.length} of 500,000+ records. <a className="text-ttblue-600" href="#">Sign up</a> to access complete data.</div>
        <div className="mt-3">
          <button className="tt-cta-gradient text-white px-4 py-2 rounded">Get Full Access</button>
        </div>
      </div>
    </section>
  );
}
