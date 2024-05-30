// <define:__ROUTES__>
var define_ROUTES_default = {
  version: 1,
  include: [
    "/*"
  ],
  exclude: [
    "/_astro/*",
    "/fonts\\BaiJamjuree-Bold.ttf",
    "/fonts\\BaiJamjuree-Light.ttf",
    "/fonts\\BaiJamjuree-Medium.ttf",
    "/images\\Banner1.png",
    "/images\\Banner2.png",
    "/images\\bg.png",
    "/images\\bgPlanos.png",
    "/images\\Favicon.png",
    "/images\\icons\\Atendimento.svg",
    "/images\\icons\\Clock.svg",
    "/images\\icons\\Coupon.svg",
    "/images\\icons\\estrela.svg",
    "/images\\icons\\Group 5.svg",
    "/images\\icons\\Instalacao.svg",
    "/images\\icons\\Light.svg",
    "/images\\icons\\Maps.svg",
    "/images\\icons\\Trafego.svg",
    "/images\\icons\\User.svg",
    "/images\\icons\\Whatsapp.svg",
    "/images\\icons\\WhatsBtn.svg",
    "/images\\icons\\Wifi.svg",
    "/images\\Line.png",
    "/images\\logo.png",
    "/images\\logos\\Facebook.svg",
    "/images\\logos\\Instagram.svg",
    "/images\\logos\\Map.svg",
    "/images\\logos\\Whatsapp.svg",
    "/images\\User1.png",
    "/images\\User2.png",
    "/images\\User3.png",
    "/videos\\Empresarial.mp4",
    "/videos\\Home.mp4"
  ]
};

// node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "C:\\Users\\kaiqu\\WS_Connect\\.wrangler\\tmp\\pages-dXR1zH\\bundledWorker-0.951811303657446.mjs";
import { isRoutingRuleMatch } from "C:\\Users\\kaiqu\\WS_Connect\\node_modules\\wrangler\\templates\\pages-dev-util.ts";
export * from "C:\\Users\\kaiqu\\WS_Connect\\.wrangler\\tmp\\pages-dXR1zH\\bundledWorker-0.951811303657446.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        if (worker.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return worker.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=42agl36il3x.js.map
