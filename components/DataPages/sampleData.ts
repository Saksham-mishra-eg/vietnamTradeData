export type DataRow = {
  id: number;
  name: string;
  product: string;
  hs: string;
  country: string;
  quantity: number;
  value: number;
  date: string;
}

export const sampleImportData: DataRow[] = Array.from({length:20}).map((_,i)=>({
  id: i+1,
  name: `Importer ${i+1}`,
  product: ['Textiles','Machinery','Electronics','Agriculture'][i%4],
  hs: `84${(10+i)%99}`,
  country: ['China','Germany','Italy','USA'][i%4],
  quantity: (i+1)*10,
  value: Math.round(((i+1)*1000)+Math.random()*5000),
  date: `2025-10-${(i%30)+1}`
}));

export const sampleExportData: DataRow[] = Array.from({length:20}).map((_,i)=>({
  id: i+1,
  name: `Exporter ${i+1}`,
  product: ['Chemicals','Textiles','Auto Parts','Food'][i%4],
  hs: `85${(20+i)%99}`,
  country: ['Iraq','UK','Spain','France'][i%4],
  quantity: (i+2)*5,
  value: Math.round(((i+2)*1500)+Math.random()*4000),
  date: `2025-09-${(i%30)+1}`
}));
