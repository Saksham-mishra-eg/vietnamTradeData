"use client";

import React from 'react';

type Props = {
  dataType: 'import'|'export';
  setDataType: (d: 'import'|'export') => void;
  total: number;
  results: number;
  setView: (v: 'table'|'card'|'list') => void;
};

export default function DataHero({ dataType, setDataType, total, results, setView }: Props){
  return (
    <div className="bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <div>
          <div className="text-sm text-ttgray-500">Home / Explore Data</div>
          <h1 className="text-2xl font-bold">Explore Vietnam Trade Data</h1>
          <div className="text-sm text-ttgray-600">Search through 10M+ import & export records with real-time filtering</div>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-gray-50 px-3 py-2 rounded">Total: <strong>{total}</strong></div>
          <div className="bg-gray-50 px-3 py-2 rounded">Results: <strong>{results}</strong></div>
          <div className="flex items-center gap-2">
            <button onClick={()=>setDataType('import')} className={`px-3 py-2 rounded ${dataType==='import' ? 'bg-ttblue-700 text-white' : 'bg-white border'}`}>Import</button>
            <button onClick={()=>setDataType('export')} className={`px-3 py-2 rounded ${dataType==='export' ? 'bg-ttblue-700 text-white' : 'bg-white border'}`}>Export</button>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={()=>setView('table')} className="px-2 py-1 border rounded">Table</button>
            <button onClick={()=>setView('card')} className="px-2 py-1 border rounded">Card</button>
            <button onClick={()=>setView('list')} className="px-2 py-1 border rounded">List</button>
          </div>
        </div>
      </div>
    </div>
  );
}
