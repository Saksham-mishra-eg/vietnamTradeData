const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const exts = ['', '.ts', '.tsx', '.js', '.jsx', '/index.ts', '/index.tsx', '/index.js', '/index.jsx'];

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

function findImports(file) {
  const src = fs.readFileSync(file, 'utf8');
  const imports = new Set();
  const re = /(?:import\s+(?:[^'"`]+)\s+from\s+|import\(|require\()(['"`])([^'"`]+)\1/g;
  let m;
  while ((m = re.exec(src))) {
    imports.add(m[2]);
  }

  // Detect dynamic imports/requires where the argument is not a string literal
  const dynamicPatterns = [];
  const dynImportRe = /import\s*\(\s*([^'"`\)\n][^\)]*)\)/g;
  while ((m = dynImportRe.exec(src))) {
    dynamicPatterns.push({ type: 'import', expr: m[1].trim() });
  }
  const dynRequireRe = /require\s*\(\s*([^'"`\)\n][^\)]*)\)/g;
  while ((m = dynRequireRe.exec(src))) {
    dynamicPatterns.push({ type: 'require', expr: m[1].trim() });
  }

  return { static: Array.from(imports), dynamic: dynamicPatterns };
}

function resolveRelative(spec, file) {
  const dir = path.dirname(file);
  for (const ex of exts) {
    const candidate = path.resolve(dir, spec + ex);
    if (fs.existsSync(candidate)) return candidate;
  }
  return null;
}

function resolvePackage(spec) {
  try {
    // Try Node resolution from project root
    return require.resolve(spec, { paths: [root] });
  } catch (err) {
    // If spec looks like a project-absolute import (e.g., 'components/Widget'),
    // try to resolve it under the repository root by checking common extensions.
    for (const ex of exts) {
      const candidate = path.resolve(root, spec + ex);
      if (fs.existsSync(candidate)) return candidate;
    }
    return null;
  }
}

const files = walk(root);
const missing = {};
for (const f of files) {
  const imps = findImports(f);
  // static imports
  for (const spec of imps.static) {
    if (spec.startsWith('.')) {
      const r = resolveRelative(spec, f);
      if (!r) {
        missing[f] = missing[f] || [];
        missing[f].push(spec);
      }
    } else {
      const r = resolvePackage(spec);
      if (!r) {
        missing[f] = missing[f] || [];
        missing[f].push(spec);
      }
    }
  }
  // dynamic imports/requires (non-literal)
  if (imps.dynamic && imps.dynamic.length) {
    missing[f] = missing[f] || [];
    for (const d of imps.dynamic) {
      missing[f].push(`${d.type}(${d.expr})  <-- dynamic/non-literal import or require`);
    }
  }
}

if (Object.keys(missing).length === 0) {
  console.log('All imports resolved successfully.');
  process.exit(0);
}

console.log('Missing imports summary:');
for (const [file, specs] of Object.entries(missing)) {
  console.log('\n', path.relative(root, file));
  for (const s of specs) {
    console.log('  -', s);
  }
}
process.exit(2);
