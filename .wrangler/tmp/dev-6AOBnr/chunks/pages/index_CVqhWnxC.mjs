globalThis.process ??= {}; globalThis.process.env ??= {};
import '../@astrojs_C1ttzdSe.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, e as renderComponent } from '../../renderers.mjs';
import '../kleur_BcFxsYqz.mjs';
import { $ as $$Auto, a as $$Layout } from './fale-conosco_DKLju08u.mjs';

const $$Astro$2 = createAstro();
const $$Banner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Banner;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<video class="w-full aspect-Default hidden md:block max-lg:hidden"${addAttribute(href, "src")} autoplay="" loop="" muted="muted" playsinline="" controlslist="nodownload">Banner não disponivel</video>`;
}, "C:/Users/kaiqu/WS_Connect/src/components/Banner.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Empresarial = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div class="px-[6%] mt-24 flex flex-col justify-center items-center"> <div class="flex flex-row justify-between max-lg:flex-col"> <div class="flex items-start justify-center flex-col max-lg:items-center"> <h2 class="text-5xl text-white mb-6 max-lg:text-center">\nSua empresa, <br>nossa <span class="text-green">conex\xE3o</span> </h2> <h3 class="text-white w-[80%] max-lg:text-center">\nImpulsione o sucesso da sua empresa com nossos planos empresariais personalizados. Solu\xE7\xF5es sob medida, atendimento priorit\xE1rio e suporte t\xE9cnico especializado 24/7. Seja qual for o tamanho da sua empresa, temos o plano ideal para atender \xE0s suas necessidades. Entre em contato conosco e descubra como podemos transformar a conectividade do seu neg\xF3cio!\n</h3> <a href="https://wa.me/555433321794?text=Ol%C3%A1!%20Vim%20do%20site" target="_blank"><button class="btn-assine mt-8">ASSINE J\xC1</button></a> </div> <div> <div class="flex flex-row gap-6 mb-8 max-lg:mt-20"> <div><img class="h-24" src="/images/icons/Clock.svg" alt=""></div> <div> <h3 class="text-white text-xl">Monitoramento 24/7</h3> <span class="text-white/70">O monitoramento 24/7 \xE9 essencial para empresas, garantindo vigil\xE2ncia constante e resposta r\xE1pida a problemas de infraestrutura, seguran\xE7a e desempenho.</span> </div> </div> <div class="flex flex-row gap-6 mb-8"> <div><img class="h-24" src="/images/icons/Clock.svg" alt=""></div> <div> <h3 class="text-white text-xl">Monitoramento 24/7</h3> <span class="text-white/70">O monitoramento 24/7 \xE9 essencial para empresas, garantindo vigil\xE2ncia constante e resposta r\xE1pida a problemas de infraestrutura, seguran\xE7a e desempenho.</span> </div> </div> <div class="flex flex-row gap-6 mb-8"> <div><img class="h-24" src="/images/icons/Clock.svg" alt=""></div> <div> <h3 class="text-white text-xl">Monitoramento 24/7</h3> <span class="text-white/70">O monitoramento 24/7 \xE9 essencial para empresas, garantindo vigil\xE2ncia constante e resposta r\xE1pida a problemas de infraestrutura, seguran\xE7a e desempenho.</span> </div> </div> </div> </div> <div class="w-[1200px] h-[200px] md:bg-Planos flex-col flex py-10 px-12 justify-between mt-12 max-lg:w-[90%] max-lg:bg-light-blue/20 max-lg:rounded-lg max-lg:h-full"> <div class="flex justify-center flex-col"> <h2 class="text-white text-2xl text-center">Consulte \xE1rea de cobertura no seu endere\xE7o:</h2> <img class="h-[1px] mt-4" id="line" src="/images/Line.png" alt=""> </div> <div class="flex justify-center items-center mt-4"> <form id="forms" action=""> <input type="text" placeholder="Endere\xE7o" name="" id=""> <input type="number" placeholder="CEP" name="" id=""> <input type="tel" placeholder="Telefone" name="" id=""> <button type="submit" id="btn-submit">Enviar</button> <h5 id="enviado" class="mt-4 text-green hidden">Formul\xE1rio enviado com sucesso!</h5> </form> </div> </div> </div> <script>\n    const form = document.getElementById("forms");\n\n    form.addEventListener("submit", async (e) =>{\n\n        e.preventDefault();\n\n        const enviado = document.getElementById("enviado");\n        const line = document.getElementById("line");\n        const submitButton = document.getElementById("btn-submit");\n        enviado.classList.remove("hidden");\n        line.classList.add("hidden");\n\n        submitButton.Disabela = true;\n\n    })\n\n<\/script>'])), maybeRenderHead());
}, "C:/Users/kaiqu/WS_Connect/src/components/Empresarial.astro", void 0);

const $$Astro$1 = createAstro();
const $$ModelReview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ModelReview;
  const { image, userName, review } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-row justify-around hover:-translate-y-1 transition-all"> <div class="w-[400px] h-[200px] bg-gradient-to-tr from-[#00c3ff2f] to-[#9999993b] rounded-md px-6 py-6"> <div class="flex flex-row gap-4 border-b-2 border-b-white/10 pb-2"> <img class="h-10"${addAttribute(image, "src")} alt=""> <span class="text-white text-lg">${userName}</span> </div> <div class="mt-8"> <span class="text-white/85">
"${review}"
</span> </div></div></div>`;
}, "C:/Users/kaiqu/WS_Connect/src/components/Model-Review.astro", void 0);

const $$Review = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mt-24 px-[6%] flex flex-col gap-8"> <div class="flex flex-col items-center justify-center"> <h2 class="text-white text-3xl mb-4 max-lg:text-xl">O QUE DIZEM NOSSOS CLIENTES?</h2> <img src="./images/Line.png" alt=""> </div> <div class="flex flex-row justify-around max-lg:flex-col max-lg:gap-6"> ${renderComponent($$result, "ReviewTab", $$ModelReview, { "image": "./images/User1.png", "userName": "Cristiano Baldo", "review": "Excelente e acess\xEDvel atendimento, pre\xE7os justos e suporte efetivo." })} ${renderComponent($$result, "ReviewTab", $$ModelReview, { "image": "./images/User2.png", "userName": "Vinicius Wiedhauper", "review": "Empresa muitos boa, recomendo" })} ${renderComponent($$result, "ReviewTab", $$ModelReview, { "image": "./images/User3.png", "userName": "Compuservice Contabilidade", "review": "Servi\xE7o de qualidade, recomendamos." })} </div> </div>`;
}, "C:/Users/kaiqu/WS_Connect/src/components/Review.astro", void 0);

const $$CTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-gradient-to-r from-dark-blue to-light-blue flex px-[10%] py-[2%] justify-between mt-24 max-lg:hidden"> <h2 class="text-white text-2xl">GOSTOU? ENTRE EM CONTATO AGORA!</h2> <a href="https://wa.me/555433321794?text=Ol%C3%A1!%20Vim%20do%20site" target="_blank" rel="noopener noreferrer"><button class="btn-assine">ASSINE JÁ!</button></a> </div>`;
}, "C:/Users/kaiqu/WS_Connect/src/components/CTA.astro", void 0);

const $$Astro = createAstro();
const $$ModelPlanos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ModelPlanos;
  const { mega, valor, quant } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-center mt-14"> <div class="w-[1200px] h-[200px] md:bg-Planos flex-row flex px-12 justify-between max-lg:w-[80%] max-lg:flex-col max-lg:h-[100%]  max-lg:bg-light-blue/20  max-lg:rounded-lg max-lg:py-12"> <div class="items-center flex justify-center"> <h2 class="text-5xl text-green text-bold"> ${mega}<span class="text-white">${quant}</span> </h2> </div> <div class="flex flex-row items-center gap-1 max-lg:flex-col max-lg:my-10"> <div> <div class="flex flex-row items-center justify-start"> <img src="./images/icons/Wifi.svg" alt="Icones WIfi"> <span class="text-white text-lg">Wi-fi Premium</span> </div> <div class="flex flex-row items-center justify-start"> <img src="./images/icons/Instalacao.svg" alt="Icones WIfi"> <span class="text-white text-lg">Instalação Gratuita</span> </div> </div> <div> <div class="flex flex-row items-center justify-start"> <img src="./images/icons/Atendimento.svg" alt="Icones WIfi"> <span class="text-white text-lg">Suporte Local</span> </div> <div class="flex flex-row items-center justify-start"> <img src="./images/icons/Trafego.svg" alt="Icones WIfi"> <span class="text-white text-lg">Tráfego Ilimitado</span> </div> </div> </div> <div class="items-center flex flex-col justify-center gap-5"> <h2 class="text-5xl text-white"><span class="text-xs text-light-blue">R$</span> ${valor}</h2> <a href="https://wa.me/555433321794?text=Ol%C3%A1!%20Vim%20do%20site" target="_blank"><button class="btn-assine">ASSINE JÁ</button></a> </div> </div> </div>`;
}, "C:/Users/kaiqu/WS_Connect/src/components/Model-Planos.astro", void 0);

const $$Planos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mt-16 flex flex-col justify-center items-center"> <h1 class="text-4xl text-white text-center max-lg:text-xl">PLANOS RESIDENCIAIS</h1> <img class="mt-3" src="./images/Line.png" alt="Linha"> </div> ${renderComponent($$result, "PlanosResidenciais", $$ModelPlanos, { "mega": "500", "valor": "99,90", "quant": "MB" })} ${renderComponent($$result, "PlanosResidenciais", $$ModelPlanos, { "mega": "ILIMITADO", "valor": "129,90", "quant": "" })}`;
}, "C:/Users/kaiqu/WS_Connect/src/components/Planos.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Internet fibra \xF3ptica" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Banner", $$Banner, { "href": "./videos/Home.mp4" })}  ${renderComponent($$result2, "Planos", $$Planos, {})}  ${maybeRenderHead()}<img class="mt-20" src="./images/Banner1.png" alt="">   ${renderComponent($$result2, "Empresarial", $$Empresarial, {})}   <img class="mt-24" src="./images/Banner2.png" alt="">   ${renderComponent($$result2, "Review", $$Review, {})}  ${renderComponent($$result2, "CTA", $$CTA, {})} ${renderComponent($$result2, "Auto", $$Auto, {})} ` })}`;
}, "C:/Users/kaiqu/WS_Connect/src/pages/index.astro", void 0);

const $$file = "C:/Users/kaiqu/WS_Connect/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Banner as $, $$Empresarial as a, $$Review as b, $$CTA as c, $$Planos as d, index as i };
