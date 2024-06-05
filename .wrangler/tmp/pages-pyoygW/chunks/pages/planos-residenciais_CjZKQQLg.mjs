globalThis.process ??= {}; globalThis.process.env ??= {};
import '../@astrojs_RPbHxY56.mjs';
import { c as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../../renderers.mjs';
import '../kleur_BcFxsYqz.mjs';
import { $ as $$Auto, a as $$Layout } from './fale-conosco_Bfc3X6Hl.mjs';
import { $ as $$Banner, d as $$Planos } from './index_BD2025BX.mjs';

const $$PlanosResidenciais = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Internet fibra \xF3ptica" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Banner", $$Banner, { "href": "./videos/Home.mp4" })}  ${renderComponent($$result2, "PlanosRes", $$Planos, {})}  ${maybeRenderHead()}<img class="mt-20" src="./../..  /images/Banner1.png" alt="">   <img class="mt-24" src="./../..  /images/Banner2.png" alt="">  ${renderComponent($$result2, "Auto", $$Auto, {})} ` })}`;
}, "C:/Users/kaiqu/WS_Connect/src/pages/planos-residenciais.astro", void 0);

const $$file = "C:/Users/kaiqu/WS_Connect/src/pages/planos-residenciais.astro";
const $$url = "/planos-residenciais";

export { $$PlanosResidenciais as default, $$file as file, $$url as url };
