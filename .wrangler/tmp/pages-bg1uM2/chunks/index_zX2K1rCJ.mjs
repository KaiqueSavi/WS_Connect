globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./pages/index_BD2025BX.mjs').then(n => n.i);

export { page };
