#!/usr/bin/env node
/**
 * Simple image optimization script using sharp.
 * - Finds images in public/images (jpg/png) and creates webp versions
 * - Generates resized variants for responsive uses (e.g., 320, 640, 1024)
 * - Writes to public/images/optimized with same basename
 *
 * Usage: node scripts/image-optimize.js
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const INPUT_DIR = path.join(process.cwd(), 'public', 'images');
const OUT_DIR = path.join(INPUT_DIR, 'optimized');
const sizes = [320, 640, 1024];

async function ensureOut(){
  if(!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
}

function isImage(file){
  return /\.(jpe?g|png|webp)$/i.test(file);
}

async function processFile(file){
  const input = path.join(INPUT_DIR, file);
  const base = path.parse(file).name;
  try{
    const meta = await sharp(input).metadata();
    const tasks = sizes.map(async (w) => {
      const outName = `${base}-${w}.webp`;
      const outPath = path.join(OUT_DIR, outName);
      await sharp(input).resize({ width: w }).webp({ quality: 80 }).toFile(outPath);
      console.log('created', outPath);
    });
    // also create a default webp (original size, compressed)
    const outDefault = path.join(OUT_DIR, `${base}.webp`);
    await Promise.all(tasks.concat([sharp(input).webp({ quality: 80 }).toFile(outDefault)]));
  }catch(err){
    console.error('failed to process', input, err.message || err);
  }
}

async function run(){
  await ensureOut();
  if(!fs.existsSync(INPUT_DIR)){
    console.warn('No public/images directory found; skipping.');
    process.exit(0);
  }
  const files = fs.readdirSync(INPUT_DIR).filter(isImage);
  if(files.length === 0){
    console.warn('No image files found in public/images to optimize.');
    process.exit(0);
  }
  for(const f of files){
    await processFile(f);
  }
  console.log('Image optimization complete. Optimized files are in public/images/optimized');
}

run().catch((e)=>{ console.error(e); process.exit(1); });
