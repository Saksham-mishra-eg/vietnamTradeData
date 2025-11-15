"use client";

import React from 'react';
import DataHero from 'components/DataExplorer/DataHero';
import FiltersPanel from 'components/DataExplorer/FiltersPanel';
import DataTable from 'components/DataExplorer/DataTable';
import DetailsPanel from 'components/DataExplorer/DetailsPanel';
import CTASection from 'components/Home/CTASection';
import { sampleImportData, sampleExportData, DataRow } from 'components/DataPages/sampleData';

type DataType = 'import' | 'export';
type Filters = { query: string; product: string; country: string; startDate: string; endDate: string };

export default function ExploreDataPage(){
  const [dataType, setDataType] = React.useState<DataType>('import');
  const [filters, setFilters] = React.useState<Filters>({ query: '', product: '', country: '', startDate: '', endDate: '' });
  const [selected, setSelected] = React.useState<DataRow | null>(null);
  const [view, setView] = React.useState<'table'|'card'|'list'>('table');

  const source = dataType === 'import' ? sampleImportData : sampleExportData;

  // server-driven state
  const [rows, setRows] = React.useState<DataRow[]>([]);
  const [page, setPage] = React.useState(1);
  const [pageSize] = React.useState(10);
  const [total, setTotal] = React.useState<number | undefined>(undefined);
  const [loading, setLoading] = React.useState(false);

  function applyFilters(next: Filters){ setFilters(next); setPage(1); }
  function resetFilters(){ setFilters({ query:'', product:'', country:'', startDate:'', endDate:'' }); setPage(1); }

  // fetch paginated results from API
  React.useEffect(()=>{
    let cancelled = false;
    async function load(){
      setLoading(true);
      const params = new URLSearchParams();
      params.set('type', dataType);
      params.set('page', String(page));
      params.set('pageSize', String(pageSize));
      if(filters.query) params.set('query', filters.query);
      if(filters.product) params.set('product', filters.product);
      if(filters.country) params.set('country', filters.country);
      if(filters.startDate) params.set('startDate', filters.startDate);
      if(filters.endDate) params.set('endDate', filters.endDate);
      const res = await fetch('/api/trade?' + params.toString());
      if(!res.ok) return;
      const data = await res.json();
      if(cancelled) return;
      setRows(data.rows ?? []);
      setTotal(typeof data.total === 'number' ? data.total : undefined);
      setLoading(false);
    }
    load();
    return ()=>{ cancelled = true; };
  },[dataType, page, pageSize, filters]);

  return (
    <div className="min-h-screen bg-white">
      <DataHero dataType={dataType} setDataType={setDataType} total={source.length} results={total ?? 0} setView={setView} />

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <aside className="lg:col-span-3">
            <FiltersPanel filters={filters} applyFilters={applyFilters} resetFilters={resetFilters} dataType={dataType} />
          </aside>

          <main className="lg:col-span-6">
            <DataTable rows={rows} view={view} onRowClick={(r: DataRow)=>setSelected(r)} dataType={dataType} page={page} setPage={setPage} total={total} pageSize={pageSize} />
            {loading && <div className="mt-2 text-sm text-gray-500">Loading...</div>}
          </main>

          <aside className="lg:col-span-3">
            <DetailsPanel record={selected} onClose={()=>setSelected(null)} />
          </aside>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
