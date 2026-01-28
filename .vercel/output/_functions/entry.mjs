import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_m8ieSV-5.mjs';
import { manifest } from './manifest_CvD7dosk.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/auth/login.astro.mjs');
const _page2 = () => import('./pages/api/certifications.astro.mjs');
const _page3 = () => import('./pages/api/education.astro.mjs');
const _page4 = () => import('./pages/api/experiences.astro.mjs');
const _page5 = () => import('./pages/api/projects.astro.mjs');
const _page6 = () => import('./pages/api/skills.astro.mjs');
const _page7 = () => import('./pages/dashboard.astro.mjs');
const _page8 = () => import('./pages/login.astro.mjs');
const _page9 = () => import('./pages/manage/certifications.astro.mjs');
const _page10 = () => import('./pages/manage/education.astro.mjs');
const _page11 = () => import('./pages/manage/experiences.astro.mjs');
const _page12 = () => import('./pages/manage/projects.astro.mjs');
const _page13 = () => import('./pages/manage/skills.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/auth/login.ts", _page1],
    ["src/pages/api/certifications.ts", _page2],
    ["src/pages/api/education.ts", _page3],
    ["src/pages/api/experiences.ts", _page4],
    ["src/pages/api/projects.ts", _page5],
    ["src/pages/api/skills.ts", _page6],
    ["src/pages/dashboard.astro", _page7],
    ["src/pages/login.astro", _page8],
    ["src/pages/manage/certifications.astro", _page9],
    ["src/pages/manage/education.astro", _page10],
    ["src/pages/manage/experiences.astro", _page11],
    ["src/pages/manage/projects.astro", _page12],
    ["src/pages/manage/skills.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "4f0f6028-2b2e-47d6-a66a-54605dcae318",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
