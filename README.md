# NG-ZORRO on Ant Design 6: comparison renders

Static side-by-side renders of every NG-ZORRO component that the Ant Design 6 styling port maps:
Ant Design 6.6.5's own React demo, the same NG-ZORRO demo under the opt-in v6 stylesheet, and the
NG-ZORRO demo under the v4 stylesheet it ships today. Light, dark and compact themes.

Published at https://milanja.github.io/ng-zorro-antd6-compare/

The port itself lives on the
[`feat/antd6-style-infrastructure`](https://github.com/MilanJa/ng-zorro-antd/tree/feat/antd6-style-infrastructure)
branch of the MilanJa/ng-zorro-antd fork. The screenshots are produced by that branch's
`tools/v6-compare` harness; this repository only lays them out.

## Rebuild

```sh
node build/build.mjs <path-to-ng-zorro-antd>/tools/v6-compare/out --commit <sha>
```

Writes `docs/index.html`, `docs/data.json` and `docs/shots/**`. A demo is included when the harness
captured it on both sides under a v6 theme; opened-state shots that exist only on the NG-ZORRO side
(viewport-fixed overlays the antd pane cannot capture) are included and labelled.

Ant Design demos are © Ant Design contributors, MIT licence. NG-ZORRO demos are © NG-ZORRO
contributors, MIT licence.
