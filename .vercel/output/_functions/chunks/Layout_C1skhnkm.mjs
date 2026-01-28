import { e as createComponent, n as renderHead, o as renderSlot, r as renderTemplate, h as createAstro } from './astro/server_BorZG8IO.mjs';
import 'piccolore';
import 'clsx';
/* empty css                             */
/* empty css                         */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="id" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description" content="Portfolio Dashboard"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/zuckdorsey/Programming/project/portfolio-dashboard/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
