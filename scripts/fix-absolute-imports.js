const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

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

const files = walk(path.join(root, 'app'));
let changed = 0;
for (const file of files) {
  let src = fs.readFileSync(file, 'utf8');
  const before = src;
  // Replace any relative path segments that point to components/ with absolute `components/`.
  // This covers cases like '../../components/...', '../components/...' and deeper.
  src = src.replace(/\.\.\/+components\//g, 'components/');
  // Also replace require('..../components/...')
  src = src.replace(/require\(\s*(['"])\.\.\/+(components\/[^'"`]+)\1\s*\)/g, (m, q, rest) => {
    return `require(${q}components/${rest.replace(/^components\//, '')}${q})`;
  });

  if (src !== before) {
    fs.writeFileSync(file, src, 'utf8');
    changed++;
    console.log('Updated', path.relative(root, file));
  }
}
console.log('Done. Files changed:', changed);
