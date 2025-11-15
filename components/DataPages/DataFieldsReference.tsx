"use client";

import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chip from '@mui/material/Chip';

const sections = [
  {title:'Company Information', fields:['Company name','Registration number','Address','City','Contact details','Tax ID']},
  {title:'Product Details', fields:['HS Code','Product description','Brand','Model','Quantity','Unit of measurement']},
  {title:'Shipment Information', fields:['Invoice number','Invoice value','Currency','Weight (gross/net)','Packages']},
  {title:'Logistics Data', fields:['Port of loading/discharge','Mode of transport','Vessel/Flight name','Container numbers']},
  {title:'Financial Information', fields:['FOB/CIF value','Duty amount','Insurance','Freight charges','Payment terms']},
  {title:'Customs Details', fields:['Entry date','Customs officer','Clearance location','Tariff rates']}
];

export default function DataFieldsReference(){
  return (
    <section className="py-16">
      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-4">Complete Data Fields Reference</h2>
        <div className="space-y-3">
          {sections.map((s,i)=> (
            <Accordion key={i} defaultExpanded={i===0}>
              <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography className="font-semibold">{s.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="flex flex-wrap gap-2">
                  {s.fields.map((f,j)=> <Chip key={j} label={f} />)}
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
