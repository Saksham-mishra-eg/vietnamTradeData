const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const serverAppDir = path.join(root, '.next', 'server', 'app');

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  const res = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) res.push(...walk(p));
    else if (/page\.js$/.test(e.name)) res.push(p);
  }
  return res;
}

const pages = walk(serverAppDir);
if (!pages.length) {
  console.log('No server page bundles found under .next/server/app — run build first.');
  process.exit(1);
}

const results = [];
for (const p of pages) {
  try {
    // require the bundle in a child process to isolate crashes
    const { spawnSync } = require('child_process');
    const script = `try{require('${p.replace(/\\/g, '\\\\')}'); console.log('OK');}catch(e){console.error('ERR', e && e.stack ? e.stack : e); process.exit(2);}`;
    const node = spawnSync(process.execPath, ['-e', script], { encoding: 'utf8' });
    if (node.status === 0) {
      results.push({ file: p, ok: true });
    } else {
      results.push({ file: p, ok: false, out: node.stdout, err: node.stderr });
    }
  } catch (err) {
    results.push({ file: p, ok: false, err: String(err) });
  }
}

let failures = results.filter(r => !r.ok);
if (failures.length === 0) {
  console.log('All server bundles required successfully (no top-level errors).');
  process.exit(0);
}

console.log('Found runtime initialization errors in server bundles:');
for (const f of failures) {
  console.log('\nBundle:', path.relative(root, f.file));
  if (f.out) console.log('STDOUT:\n', f.out);
  if (f.err) console.log('STDERR:\n', f.err);
}
process.exit(2);
