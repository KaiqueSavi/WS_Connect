globalThis.process ??= {}; globalThis.process.env ??= {};
import '../@astrojs_C1ttzdSe.mjs';
import { c as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../../renderers.mjs';
import '../kleur_BcFxsYqz.mjs';
import { $ as $$Auto, a as $$Layout } from './fale-conosco_DKLju08u.mjs';
import { $ as $$Banner, a as $$Empresarial, b as $$Review, c as $$CTA } from './index_CVqhWnxC.mjs';

const $$PlanosEmpresariais = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Internet fibra \xF3ptica" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Banner", $$Banner, { "href": "./videos/Empresarial.mp4" })}   ${renderComponent($$result2, "Empresarial", $$Empresarial, {})}   ${maybeRenderHead()}<img class="mt-24" src="./../..  /images/Banner2.png" alt="">   ${renderComponent($$result2, "Review", $$Review, {})}  ${renderComponent($$result2, "CTA", $$CTA, {})} ${renderComponent($$result2, "Auto", $$Auto, {})} ` })}`;
}, "C:/Users/kaiqu/WS_Connect/src/pages/planos-empresariais.astro", void 0);

const $$file = "C:/Users/kaiqu/WS_Connect/src/pages/planos-empresariais.astro";
const $$url = "/planos-empresariais";

export { $$PlanosEmpresariais as default, $$file as file, $$url as url };
