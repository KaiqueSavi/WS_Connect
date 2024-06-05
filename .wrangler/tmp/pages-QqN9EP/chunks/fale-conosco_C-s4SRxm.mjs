globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./pages/fale-conosco_DKLju08u.mjs').then(n => n.f);

export { page };
