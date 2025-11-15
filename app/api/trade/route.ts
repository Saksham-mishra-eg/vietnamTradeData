import { NextResponse } from 'next/server';
import { sampleImportData, sampleExportData } from 'components/DataPages/sampleData';
import type { DataRow } from 'components/DataPages/sampleData';

function applyFilters(source: DataRow[], params: URLSearchParams){
  const q = (params.get('query') || '').toLowerCase();
  const product = params.get('product') || '';
  const country = params.get('country') || '';
  const startDate = params.get('startDate') || '';
  const endDate = params.get('endDate') || '';

  return source.filter(r=>{
    if(q){
      if(!(r.name.toLowerCase().includes(q) || r.product.toLowerCase().includes(q) || r.hs.toLowerCase().includes(q))) return false;
    }
    if(product && product !== 'All' && r.product !== product) return false;
    if(country && country !== 'All' && r.country !== country) return false;
    if(startDate){
      if(new Date(r.date) < new Date(startDate)) return false;
    }
    if(endDate){
      if(new Date(r.date) > new Date(endDate)) return false;
    }
    return true;
  });
}

export async function GET(req: Request){
  const url = new URL(req.url);
  const params = url.searchParams;
  const type = params.get('type') === 'export' ? 'export' : 'import';
  const page = Math.max(1, parseInt(params.get('page') || '1', 10));
  const pageSize = Math.min(100, Math.max(1, parseInt(params.get('pageSize') || '10', 10)));

  const source = type === 'export' ? sampleExportData : sampleImportData;
  const filtered = applyFilters(source, params);
  const total = filtered.length;
  const start = (page - 1) * pageSize;
  const rows = filtered.slice(start, start + pageSize);

  return NextResponse.json({ rows, total, page, pageSize });
}
