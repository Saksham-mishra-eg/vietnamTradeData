const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const allowedRoots = ['components', 'lib', 'utils', 'styles', 'scripts', 'public'];

function walk(dir) {
  const res = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (['node_modules', '.next', '.git'].includes(e.name)) continue;
      res.push(...walk(p));
    } else if (/\.(ts|tsx|js|jsx)$/.test(e.name)) {
      res.push(p);
    }
  }
  return res;
}

function resolveImport(spec, file) {
  // only handle relative specs
  if (!spec.startsWith('.')) return null;
  const dir = path.dirname(file);
  const abs = path.resolve(dir, spec);
  // try to find matching file within project for common extensions
  const candidates = [ abs, abs + '.ts', abs + '.tsx', abs + '.js', abs + '.jsx', path.join(abs, 'index.ts'), path.join(abs, 'index.tsx'), path.join(abs, 'index.js')];
  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }
  return null;
}

const files = walk(root);
let changed = 0;
for (const file of files) {
  let src = fs.readFileSync(file, 'utf8');
  const before = src;
  // find import/require/from statements
  const importRe = /(?:from\s+|import\s+)['"](\.\.\/[^'"\)]+)['"]/g;
  src = src.replace(importRe, (m) => {
    // extract spec
    const specMatch = m.match(/['"](\.\.\/[^'"\)]+)['"]/);
    if (!specMatch) return m;
    const spec = specMatch[1];
    const resolved = resolveImport(spec, file);
    if (!resolved) return m;
    // find which top-level allowed root this resolved path is under
    const rel = path.relative(root, resolved);
    const parts = rel.split(path.sep);
    if (allowedRoots.includes(parts[0])) {
      const newSpec = parts.join('/');
      return m.replace(spec, newSpec);
    }
    return m;
  });

  // also handle require('..') patterns
  const reqRe = /require\(\s*['"](\.\.\/[^'"\)]+)['"]\s*\)/g;
  src = src.replace(reqRe, (m, spec) => {
    const resolved = resolveImport(spec, file);
    if (!resolved) return m;
    const rel = path.relative(root, resolved);
    const parts = rel.split(path.sep);
    if (allowedRoots.includes(parts[0])) {
      const newSpec = parts.join('/');
      return `require('${newSpec}')`;
    }
    return m;
  });

  if (src !== before) {
    fs.writeFileSync(file, src, 'utf8');
    changed++;
    console.log('Updated', path.relative(root, file));
  }
}
console.log('Done. Files changed:', changed);
