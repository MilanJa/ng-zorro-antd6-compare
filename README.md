# NG-ZORRO on Ant Design 6: comparison renders

Static side-by-side renders of every NG-ZORRO component that the Ant Design 6 styling port maps:
Ant Design 6.6.5's own React demo, the same NG-ZORRO demo under the opt-in v6 stylesheet, and the
NG-ZORRO demo under the v4 stylesheet it ships today. Light, dark and compact themes.

Published at https://milanja.github.io/ng-zorro-antd6-compare/

The port itself lives on the
[`feat/antd6-style-infrastructure`](https://github.com/MilanJa/ng-zorro-antd/tree/feat/antd6-style-infrastructure)
branch of the MilanJa/ng-zorro-antd fork. The screenshots are produced by that branch's
`tools/v6-compare` harness; this repository only lays them out.

Two views: **Live** runs the real components in two same-origin iframes per demo, one with the antd
React demo bundle and the extracted antd CSS, one with the NG-ZORRO doc site under the chosen theme
(a third frame shows today's v4 render on request). **Screenshots** holds the captures the port was
verified against, including opened overlay states, with an in-place antd/NG-ZORRO flip.

## Rebuild

From the fork checkout, with `tools/v6-compare/out` populated by `build-demos.ts` and `capture.ts`:

```sh
# 1. antd demo bundles (minified copies of the harness output)
npx esbuild tools/v6-compare/out/demos/*.js --minify --format=esm --outdir=<this repo>/docs/antd/demos

# 2. NG-ZORRO doc site, browser-only, under the Pages path (run from PowerShell or with
#    MSYS_NO_PATHCONV=1, otherwise Git Bash rewrites the base href as a filesystem path)
npx nx run ng-zorro-antd-doc:build --configuration=production --ssr=false --prerender=false   --serviceWorker=false --baseHref=/ng-zorro-antd6-compare/site/ --outputPath=<tmp>/site-dist

# 3. the page itself
node build/build.mjs tools/v6-compare/out --commit <sha> --site-dist <tmp>/site-dist/browser
```

Step 3 writes `docs/index.html`, `docs/data.json`, `docs/shots/**`, `docs/antd/index.html` plus the
antd pane stylesheets, `docs/site/**` (with the base href pinned, the analytics tag removed and a
GitHub Pages path-restore script added) and `docs/404.html`. A demo is included when the harness
captured it on both sides under a v6 theme; opened-state shots that exist only on the NG-ZORRO side
(viewport-fixed overlays the antd pane cannot capture) are included in the screenshot view.

Ant Design demos are © Ant Design contributors, MIT licence. NG-ZORRO demos are © NG-ZORRO
contributors, MIT licence.
