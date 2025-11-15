"use client";

import React from 'react';

type Filters = { query: string; product: string; country: string; startDate: string; endDate: string };

type Props = {
  filters: Filters;
  applyFilters: (f: Filters) => void;
  resetFilters: () => void;
  dataType: 'import'|'export';
};

export default function FiltersPanel({ filters, applyFilters, resetFilters }: Props){
  const [local, setLocal] = React.useState<Filters>(filters);

  React.useEffect(()=> setLocal(filters), [filters]);

  function onApply(){ applyFilters(local); }
  function onReset(){ resetFilters(); }

  const products = ['All','Textiles','Machinery','Electronics','Agriculture','Chemicals','Auto Parts','Food'];
  const countries = ['All','China','Germany','Italy','USA','Iraq','UK','Spain','France'];

  return (
    <div className="sticky top-24 bg-white p-4 border rounded">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold">Filters</h3>
        <button className="text-sm text-ttgray-500" onClick={onReset}>Clear</button>
      </div>

      <div className="space-y-3">
        <div>
          <label className="text-sm">Search</label>
          <input className="w-full border px-2 py-1 rounded mt-1" placeholder="Company, product, HS code..." value={local.query||''} onChange={(e)=>setLocal({...local, query: e.target.value})} />
        </div>

        <div>
          <label className="text-sm">Product</label>
          <select className="w-full border px-2 py-1 rounded mt-1" value={local.product||'All'} onChange={(e)=>setLocal({...local, product: e.target.value})}>
            {products.map(p=> <option key={p} value={p}>{p}</option>)}
          </select>
        </div>

        <div>
          <label className="text-sm">Country</label>
          <select className="w-full border px-2 py-1 rounded mt-1" value={local.country||'All'} onChange={(e)=>setLocal({...local, country: e.target.value})}>
            {countries.map(c=> <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div>
          <label className="text-sm">Start Date</label>
          <input type="date" className="w-full border px-2 py-1 rounded mt-1" value={local.startDate||''} onChange={(e)=>setLocal({...local, startDate: e.target.value})} />
        </div>

        <div>
          <label className="text-sm">End Date</label>
          <input type="date" className="w-full border px-2 py-1 rounded mt-1" value={local.endDate||''} onChange={(e)=>setLocal({...local, endDate: e.target.value})} />
        </div>

        <div className="flex gap-2">
          <button onClick={onApply} className="tt-cta-gradient text-white px-4 py-2 rounded">Apply</button>
          <button onClick={onReset} className="px-4 py-2 border rounded">Reset</button>
        </div>
      </div>
    </div>
  );
}
