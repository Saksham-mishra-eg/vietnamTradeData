"use client";

import React from 'react';
import { DataRow } from 'components/DataPages/sampleData';

type Props = {
  rows: DataRow[];
  view: string;
  onRowClick: (r: DataRow)=>void;
  dataType: string;
  // optional server-side paging
  page?: number;
  setPage?: (n: number)=>void;
  total?: number;
  pageSize?: number;
}

export default function DataTable({ rows, view: _view, onRowClick, dataType, page: serverPage, setPage: setServerPage, total: serverTotal, pageSize: serverPageSize }: Props){
  const [localPage, setLocalPage] = React.useState(1);
  const pageSize = serverPageSize ?? 10;
  const total = typeof serverTotal === 'number' ? serverTotal : rows.length;

  const page = typeof serverPage === 'number' ? serverPage : localPage;
  const setPage = setServerPage ?? setLocalPage;

  const paged = rows.slice((page-1)*pageSize, page*pageSize);

  function exportCSV(){
  const headers: (keyof DataRow)[] = ['id','name','product','hs','country','quantity','value','date'];
  const csv = [headers.join(',')].concat(rows.map(r=> headers.map(h=> JSON.stringify(String(r[h] ?? ''))).join(','))).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `${dataType}-export.csv`;
    a.click(); URL.revokeObjectURL(url);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
          <div>Showing {(page-1)*pageSize+1} - {Math.min(page*pageSize, total)} of {total}</div>
        <div className="flex items-center gap-2">
          <select className="border px-2 py-1 rounded" value={String(pageSize)} onChange={()=>{}}>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
          <button onClick={exportCSV} className="px-3 py-1 border rounded">Export CSV</button>
        </div>
      </div>

      <div className="overflow-x-auto border rounded">
        <table className="min-w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-2">Date</th>
              <th className="p-2">Company</th>
              <th className="p-2">Product</th>
              <th className="p-2">HS Code</th>
              <th className="p-2">Country</th>
              <th className="p-2">Qty</th>
              <th className="p-2">Value (USD)</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paged.map(r=> (
              <tr key={r.id} className="hover:bg-gray-50 cursor-pointer" onClick={()=>onRowClick(r)}>
                <td className="p-2 align-top">{r.date}</td>
                <td className="p-2 align-top">{r.name}</td>
                <td className="p-2 align-top">{r.product}</td>
                <td className="p-2 align-top">{r.hs}</td>
                <td className="p-2 align-top">{r.country}</td>
                <td className="p-2 align-top">{r.quantity.toLocaleString()}</td>
                <td className="p-2 align-top">${r.value.toLocaleString()}</td>
                <td className="p-2 align-top"><button className="text-sm text-ttblue-700">View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-3">
        <div />
        <div className="flex items-center gap-2">
          <button onClick={()=>setPage(Math.max(1, page-1))} className="px-3 py-1 border rounded">Prev</button>
          <div>Page {page}</div>
          <button onClick={()=>setPage(page+1)} className="px-3 py-1 border rounded">Next</button>
        </div>
      </div>
    </div>
  );
}
