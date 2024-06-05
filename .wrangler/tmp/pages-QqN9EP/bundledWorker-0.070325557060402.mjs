// _worker.js/index.js
import { renderers } from "./renderers.mjs";
import { manifest } from "./manifest_DNTSU0LB.mjs";
import { b as createExports, d as serverEntrypointModule } from "./chunks/@astrojs_C1ttzdSe.mjs";
import { onRequest } from "./_noop-middleware.mjs";
globalThis.process ??= {};
globalThis.process.env ??= {};
var _page0 = () => import("./renderers.mjs").then((n) => n.h);
var _page1 = () => import("./chunks/fale-conosco_C-s4SRxm.mjs");
var _page2 = () => import("./chunks/planos-empresariais_B4vAF3kD.mjs");
var _page3 = () => import("./chunks/planos-residenciais_DzDdWmxb.mjs");
var _page4 = () => import("./chunks/index_C5QqCS3C.mjs");
var pageMap = /* @__PURE__ */ new Map([
  ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
  ["src/pages/fale-conosco.astro", _page1],
  ["src/pages/planos-empresariais.astro", _page2],
  ["src/pages/planos-residenciais.astro", _page3],
  ["src/pages/index.astro", _page4]
]);
var _manifest = Object.assign(manifest, {
  pageMap,
  renderers,
  middleware: onRequest
});
var _args = void 0;
var _exports = createExports(_manifest);
var __astrojsSsrVirtualEntry = _exports.default;
var _start = "start";
if (_start in serverEntrypointModule) {
  serverEntrypointModule[_start](_manifest, _args);
}
export {
  __astrojsSsrVirtualEntry as default,
  pageMap
};
//# sourceMappingURL=bundledWorker-0.070325557060402.mjs.map
