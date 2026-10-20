// Builds the static comparison site from the v6 compare harness output.
//
//   node build/build.mjs <path-to-tools/v6-compare/out> [--commit <sha>] [--out <dir>]
//
// For every component directory that has a `v6/` folder, each demo stem that was captured on
// BOTH sides (`<stem>.antd.png` and `<stem>.nz.png`) under v6, v6-dark and v6-compact becomes a
// pair. The v4 default capture (`default/<stem>.nz.png`) is attached when it exists. Stems that
// exist only on the ng-zorro side are included only when they are opened-state shots
// (`-opened`, `-hovered`, `-focused`, `-clicked`), because antd's fixed-position overlays cannot
// be captured by the harness; scratch captures (`-fix1`, `-rereview*`, `-element`, …) are dropped.

import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const src = args.find(a => !a.startsWith('--'));
if (!src) {
  console.error('usage: node build/build.mjs <compare-out-dir> [--commit <sha>] [--out <dir>]');
  process.exit(1);
}
const opt = name => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : undefined;
};
const outDir = resolve(opt('out') ?? join(here, '..', 'docs'));
const commit = opt('commit') ?? 'unknown';

const THEMES = ['v6', 'v6-dark', 'v6-compact'];
const OPENED = /-(opened|hovered|focused|clicked)(-full)?$/;
// Components whose antd demo cannot be captured at all (autoplay, viewport-fixed); keep their ng-zorro shots.
const NG_ONLY_OK = new Set(['carousel']);
const SCRATCH = /-(fix\d*|rereview\d*|element|before|after|zoom-rereview|x3-rereview\d*)$|^(top-before|top-after)$/;

const CATEGORIES = {
  General: ['button', 'float-button', 'typography'],
  Layout: ['divider', 'flex', 'grid', 'layout', 'space', 'splitter'],
  Navigation: ['affix', 'breadcrumb', 'dropdown', 'menu', 'pagination', 'steps'],
  'Data entry': [
    'auto-complete', 'cascader', 'checkbox', 'color-picker', 'date-picker', 'form', 'input', 'input-number',
    'mention', 'radio', 'rate', 'select', 'slider', 'switch', 'time-picker', 'transfer', 'tree-select', 'upload'
  ],
  'Data display': [
    'avatar', 'badge', 'calendar', 'card', 'carousel', 'collapse', 'descriptions', 'empty', 'image', 'list',
    'popover', 'qr-code', 'segmented', 'statistic', 'table', 'tabs', 'tag', 'timeline', 'tooltip', 'tree'
  ],
  Feedback: ['alert', 'drawer', 'message', 'modal', 'notification', 'popconfirm', 'progress', 'result', 'skeleton', 'spin'],
  Other: ['anchor']
};

const NAMES = { 'qr-code': 'QR Code', 'auto-complete': 'AutoComplete' };
const titleCase = dir => NAMES[dir] ?? dir.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');

// Per-component reading notes, carried over from the port's progress record.
const NOTES = {
  anchor: 'The v6 ink bar is sized and centred on the active link through custom properties the v4 stylesheet ignores, so the default theme keeps its 8 px ball.',
  breadcrumb: 'The antd basic demo has one more crumb than ng-zorro’s. Under v6 the separator is drawn as an inline block so template whitespace no longer widens the gap.',
  menu: 'Submenu popups open in a CDK overlay; under a [nzTheme] scope the pane carries the scope class so popups inherit the theme.',
  steps: 'ng-zorro adds antd 6’s rail, section and wrapper classes next to its v4 ones; title, description and progress-ring rules are mirrored onto the existing elements.',
  tabs: 'antd 6 renamed the pane chain (body-holder / body / content); ng-zorro emits the new names next to its v4 ones.',
  'date-picker': 'The antd demo lays its pickers out in a row; ng-zorro’s demo stacks them. Each picker’s own box matches. Demo layout, not component styling.',
  form: 'The antd advanced-search demo marks fields required and uses a different column count. Demo content, not component styling.',
  select: 'antd 6 draws the box on the select root; ng-zorro keeps its nested selector box and mirrors the rules onto it, so the DOMs differ while the renders match.',
  badge: 'ng-zorro keeps the v4 status colour class alongside the new v6 colour class so the default stylesheet is unchanged.',
  calendar: 'antd pads day numbers to two digits through its date format; ng-zorro prints them unpadded. Demo dates differ.',
  carousel: 'The carousel autoplays, so the harness could not take a stable antd-side screenshot; ng-zorro shots are shown alone.',
  collapse: 'The ng-zorro basic demo disables its third panel while the antd demo does not. Demo content, not styling.',
  empty: 'ng-zorro’s default illustration renders with more contrast than antd 6’s.',
  image: 'ng-zorro keeps the close action inside the bottom toolbar (antd 6 draws a separate top-right close button). Listed in docs/v6-api-gaps.md.',
  statistic: 'A statistic without a title keeps its v4 title box for the default stylesheet; under v6 a patch rule hides the empty box so the height matches antd 6.',
  tag: 'ng-zorro renders antd 6’s default filled variant for a plain tag; the bordered look is available through the variant input.',
  timeline: 'Ant Design 6 draws Timeline through Steps in dot mode. The build copies the Steps CSS with its class prefix rewritten to ant-timeline.',
  message: 'Message and Notification are viewport-fixed overlays; the antd pane cannot capture them, so only ng-zorro opened states are shown.',
  notification: 'Message and Notification are viewport-fixed overlays; the antd pane cannot capture them, so only ng-zorro opened states are shown.',
  modal: 'Opened modals are captured on the ng-zorro side only; the antd pane cannot capture a viewport-fixed overlay.',
  'float-button': 'The antd float-button demos are viewport-fixed, so their captures show an empty demo box; the ng-zorro side is the meaningful one.'
};

// antd demo stem for an ng-zorro demo key: the harness's demo-map entry wins (null = ng-zorro only), else the
// same name; only stems the harness actually bundled (build-report.json) can be rendered live.
const demoMap = JSON.parse(readFileSync(join(src, '..', 'demo-map.json'), 'utf8'));
const buildReport = existsSync(join(src, 'build-report.json')) ? JSON.parse(readFileSync(join(src, 'build-report.json'), 'utf8')) : {};
function antdStem(dir, stem) {
  const entry = demoMap[dir] ?? {};
  const mapped = Object.prototype.hasOwnProperty.call(entry, stem) ? entry[stem] : stem;
  if (mapped === null) return null;
  return (buildReport[dir]?.demos ?? []).includes(mapped) ? mapped : null;
}
const siteDist = opt('site-dist');

const isPng = f => f.endsWith('.png');
const listStems = (dir, side) =>
  existsSync(dir)
    ? readdirSync(dir).filter(f => isPng(f) && f.endsWith(`.${side}.png`)).map(f => f.slice(0, -`.${side}.png`.length))
    : [];
const mtime = f => statSync(f).mtime.toISOString().slice(0, 10);

const components = [];
let pairTotal = 0;
let shotTotal = 0;
const dates = new Set();

const dirs = readdirSync(src).filter(d => !d.startsWith('_') && existsSync(join(src, d, 'v6')));
for (const dir of dirs) {
  const stems = new Set();
  for (const t of THEMES) {
    for (const s of listStems(join(src, dir, t), 'nz')) stems.add(s);
    for (const s of listStems(join(src, dir, t), 'antd')) stems.add(s);
  }
  const demos = [];
  for (const stem of [...stems].sort()) {
    if (SCRATCH.test(stem)) continue;
    const themes = {};
    let anyAntd = false;
    for (const t of THEMES) {
      const antd = join(src, dir, t, `${stem}.antd.png`);
      const nz = join(src, dir, t, `${stem}.nz.png`);
      if (!existsSync(nz)) continue;
      const entry = { nz: true, antd: existsSync(antd) };
      if (entry.antd) anyAntd = true;
      themes[t] = entry;
      dates.add(mtime(nz));
    }
    if (Object.keys(themes).length === 0) continue;
    if (!anyAntd && !OPENED.test(stem) && !NG_ONLY_OK.has(dir)) continue;
    const v4 = existsSync(join(src, dir, 'default', `${stem}.nz.png`));
    const opened = OPENED.test(stem);
    demos.push({ stem, themes, v4, opened, antd: opened ? null : antdStem(dir, stem) });
    if (anyAntd) pairTotal += 1;
  }
  if (demos.length === 0) continue;
  components.push({ dir, name: titleCase(dir), note: NOTES[dir], demos });
}

// Copy images.
rmSync(join(outDir, 'shots'), { recursive: true, force: true });
for (const c of components) {
  for (const d of c.demos) {
    for (const [t, e] of Object.entries(d.themes)) {
      const dst = join(outDir, 'shots', c.dir, t);
      mkdirSync(dst, { recursive: true });
      cpSync(join(src, c.dir, t, `${d.stem}.nz.png`), join(dst, `${d.stem}.nz.png`));
      shotTotal += 1;
      if (e.antd) {
        cpSync(join(src, c.dir, t, `${d.stem}.antd.png`), join(dst, `${d.stem}.antd.png`));
        shotTotal += 1;
      }
    }
    if (d.v4) {
      const dst = join(outDir, 'shots', c.dir, 'default');
      mkdirSync(dst, { recursive: true });
      cpSync(join(src, c.dir, 'default', `${d.stem}.nz.png`), join(dst, `${d.stem}.nz.png`));
      shotTotal += 1;
    }
  }
}

const sortedDates = [...dates].sort();
const groups = Object.entries(CATEGORIES)
  .map(([name, list]) => ({ name, components: list.filter(d => components.some(c => c.dir === d)) }))
  .filter(g => g.components.length);
const uncategorised = components.map(c => c.dir).filter(d => !Object.values(CATEGORIES).flat().includes(d));
if (uncategorised.length) groups.push({ name: 'Other', components: uncategorised });

const data = {
  generated: new Date().toISOString().slice(0, 10),
  commit,
  antd: '6.6.5',
  ngZorro: '22.1.1',
  captured: { from: sortedDates[0], to: sortedDates[sortedDates.length - 1] },
  stats: { components: components.length, pairs: pairTotal, shots: shotTotal, live: components.reduce((n, c) => n + c.demos.filter(d => d.antd).length, 0) },
  groups,
  components: Object.fromEntries(components.map(c => [c.dir, c]))
};
writeFileSync(join(outDir, 'data.json'), JSON.stringify(data));

// The ng-zorro doc site (browser build with baseHref /ng-zorro-antd6-compare/site/) goes under docs/site. Its
// index.html gets the GitHub Pages path-restore script (the 404 page turns /site/components/x/en into
// /site/?p=/components/x/en&q=theme=v6) and loses the analytics tag, which belongs to ng.ant.design.
if (siteDist) {
  rmSync(join(outDir, 'site'), { recursive: true, force: true });
  cpSync(siteDist, join(outDir, 'site'), { recursive: true });
  const idx = join(outDir, 'site', 'index.html');
  let html = readFileSync(idx, 'utf8');
  html = html.replace(/<!-- Global site tag[\s\S]*?<\/script>\s*<script>[\s\S]*?gtag[\s\S]*?<\/script>/, '');
  html = html.replace(/<link rel="(preconnect|dns-prefetch)" href="https:\/\/www\.google-analytics\.com">\s*/g, '');
  const restore = `<script>(function (l) { var p = new URLSearchParams(l.search); var path = p.get('p'); if (!path) return; var q = p.get('q'); var base = document.querySelector('base') ? document.querySelector('base').getAttribute('href') : '/'; history.replaceState(null, '', (base.endsWith('/') ? base.slice(0, -1) : base) + path + (q ? '?' + q.replace(/~and~/g, '&') : '') + l.hash); })(window.location);</script>`;
  // The shell that ran `ng build` may have rewritten the baseHref option as a filesystem path (MSYS); pin it.
  html = html.replace(/<base href="[^"]*">/, `<base href="/ng-zorro-antd6-compare/site/">
${restore}`);
  writeFileSync(idx, html);
  writeFileSync(join(outDir, '404.html'), readFileSync(join(here, '404.html'), 'utf8'));
}
mkdirSync(join(outDir, 'antd'), { recursive: true });
writeFileSync(join(outDir, 'antd', 'index.html'), readFileSync(join(here, 'antd-pane.html'), 'utf8'));
for (const t of ['default', 'dark', 'compact']) {
  const css = join(src, `v6-${t}.antd.css`);
  if (existsSync(css)) cpSync(css, join(outDir, 'antd', `v6-${t}.antd.css`));
}
const demoDir = join(outDir, 'antd', 'demos');
const bundled = existsSync(demoDir) ? readdirSync(demoDir).filter(f => f.endsWith('.js')).length : 0;
if (!bundled) console.warn('warning: docs/antd/demos is empty; run the esbuild step in README.md for live antd panes');
if (!existsSync(join(outDir, 'site', 'index.html'))) console.warn('warning: docs/site is missing; pass --site-dist <angular browser build> for live ng-zorro panes');

const template = readFileSync(join(here, 'template.html'), 'utf8');
writeFileSync(join(outDir, 'index.html'), template.replace('/*__DATA__*/null', JSON.stringify(data)));
writeFileSync(join(outDir, '.nojekyll'), '');

console.log(`${components.length} components, ${pairTotal} antd/ng-zorro pairs, ${shotTotal} images → ${outDir}`);
console.log(`captures ${sortedDates[0]} … ${sortedDates[sortedDates.length - 1]}`);
