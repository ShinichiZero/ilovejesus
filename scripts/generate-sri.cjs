#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');

function exit(msg) {
  if (msg) console.error(msg);
  process.exit(0);
}

if (!fs.existsSync(distDir)) exit('No `dist` directory found. Run `npm run build` first.');

function walk(dir, out = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, out);
    else if (/\.(js|css)$/i.test(e.name)) out.push(full);
  }
  return out;
}

function sriForBuffer(buf) {
  const hash = crypto.createHash('sha384').update(buf).digest('base64');
  return `sha384-${hash}`;
}

const files = walk(distDir);
if (!files.length) exit('No JS/CSS files found under `dist/` to generate SRI for.');

const map = {};
for (const f of files) {
  const rel = path.relative(distDir, f).replace(/\\\\/g, '/');
  const buf = fs.readFileSync(f);
  map[rel] = sriForBuffer(buf);
}

// Write manifest
try {
  fs.writeFileSync(path.join(distDir, 'sri-manifest.json'), JSON.stringify(map, null, 2));
  console.log('Wrote dist/sri-manifest.json');
} catch (err) {
  console.error('Failed to write manifest:', err);
}

// Inject integrity + crossorigin into index.html for matching assets
const indexPath = path.join(distDir, 'index.html');
if (!fs.existsSync(indexPath)) exit('dist/index.html not found.');

let html = fs.readFileSync(indexPath, 'utf8');

function findMatchFor(src) {
  const normalized = src.replace(/^\/*/, '');
  // Try exact match
  if (map[normalized]) return { key: normalized, integrity: map[normalized] };
  // Match by basename
  const base = path.posix.basename(normalized);
  const keys = Object.keys(map).filter(k => k.endsWith('/' + base) || k === base);
  if (keys.length === 1) return { key: keys[0], integrity: map[keys[0]] };
  if (keys.length > 1) return { key: keys[0], integrity: map[keys[0]] };
  return null;
}

// Add integrity to <script src=...>
html = html.replace(/<script\b([^>]*)\bsrc=("|')([^"']+)\2([^>]*)>/gi, (m, before, q1, src, after) => {
  if (/\bintegrity=/.test(m)) return m;
  const match = findMatchFor(src);
  if (!match) return m;
  // Strip any existing bare or valued crossorigin attributes to avoid duplicates
  const stripCrossorigin = (s) => s.replace(/\s*\bcrossorigin(?:=(?:"[^"]*"|'[^']*'|\S+))?\b/gi, '');
  const cleanBefore = stripCrossorigin(before).trim();
  const cleanAfter = stripCrossorigin(after).trim();
  const parts = ['<script'];
  if (cleanBefore) parts.push(` ${cleanBefore}`);
  parts.push(` src=${q1}${src}${q1}`);
  if (cleanAfter) parts.push(` ${cleanAfter}`);
  parts.push(` integrity="${match.integrity}" crossorigin="anonymous">`);
  return parts.join('');
});

// Add integrity to <link rel="stylesheet" href=...>
html = html.replace(/<link\b([^>]*)>/gi, (m, attrs) => {
  if (!/rel=("|')stylesheet\1/.test(m)) return m;
  if (/\bintegrity=/.test(m)) return m;
  const hrefMatch = m.match(/href=("|')([^"']+)\1/i);
  if (!hrefMatch) return m;
  const src = hrefMatch[2];
  const match = findMatchFor(src);
  if (!match) return m;
  // Strip any existing crossorigin to avoid duplicates, then re-inject with explicit value
  const stripCrossorigin = (s) => s.replace(/\s*\bcrossorigin(?:=(?:"[^"]*"|'[^']*'|\S+))?\b/gi, '');
  const cleanAttrs = stripCrossorigin(attrs).trim();
  return `<link ${cleanAttrs} integrity="${match.integrity}" crossorigin="anonymous">`;
});

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Injected integrity attributes into dist/index.html where applicable.');
console.log('SRI generation complete.');
