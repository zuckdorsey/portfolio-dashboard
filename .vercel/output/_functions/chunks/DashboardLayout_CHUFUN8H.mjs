import { e as createComponent, m as maybeRenderHead, g as addAttribute, r as renderTemplate, h as createAstro, n as renderHead, k as renderComponent, o as renderSlot } from './astro/server_BorZG8IO.mjs';
import 'piccolore';
/* empty css                             */
import 'clsx';
/* empty css                             */

const $$Astro$1 = createAstro();
const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const { currentPage } = Astro2.props;
  const isActive = (page) => currentPage === page;
  return renderTemplate`<!-- Sidebar -->${maybeRenderHead()}<div class="fixed left-0 top-0 w-64 h-screen bg-white border-r border-gray-200 p-6 shadow-sm overflow-y-auto"> <div class="mb-8"> <h1 class="text-2xl font-bold text-gray-900">Portfolio</h1> <p class="text-sm text-gray-500">Content Manager</p> </div> <nav class="space-y-2"> <a href="/dashboard"${addAttribute(`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg ${isActive("dashboard") ? "text-white bg-blue-600" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"}`, "class")}> <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 11l4-4m0 0l4 4m-4-4v4"></path> </svg>
Dashboard
</a> <div class="pt-4 pb-2"> <p class="px-4 text-xs font-semibold text-gray-400 uppercase">
Manage Content
</p> </div> <a href="/manage/projects"${addAttribute(`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg ${isActive("projects") ? "text-white bg-blue-600" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"}`, "class")}> <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5A2.25 2.25 0 008.25 22.5h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-4 0v3m4-3v3m0 6H6m12 0H6"></path> </svg>
Projects
</a> <a href="/manage/experiences"${addAttribute(`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg ${isActive("experiences") ? "text-white bg-blue-600" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"}`, "class")}> <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path> </svg>
Experiences
</a> <a href="/manage/education"${addAttribute(`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg ${isActive("education") ? "text-white bg-blue-600" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"}`, "class")}> <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17.25c0 5.4 3.578 10.063 8.667 11.386.537.093 1.093.149 1.663.149.57 0 1.126-.056 1.663-.149 5.089-1.323 8.667-5.986 8.667-11.386 0-6.252-4.5-10.997-10-10.997z"></path> </svg>
Education
</a> <a href="/manage/certifications"${addAttribute(`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg ${isActive("certifications") ? "text-white bg-blue-600" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"}`, "class")}> <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 013.138-3.138z"></path> </svg>
Certifications
</a> <a href="/manage/skills"${addAttribute(`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg ${isActive("skills") ? "text-white bg-blue-600" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"}`, "class")}> <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg>
Skills
</a> </nav> <div class="absolute bottom-6 left-6 right-6"> <div class="flex items-center space-x-3 p-3 rounded-lg bg-gray-100"> <img src="https://ui-avatars.com/api/?name=Admin+User" alt="Avatar" class="w-10 h-10 rounded-full"> <div class="flex-1"> <p class="text-sm font-medium text-gray-900">Admin</p> <p class="text-xs text-gray-500">admin@portfolio.com</p> </div> </div> </div> </div>`;
}, "/home/zuckdorsey/Programming/project/portfolio-dashboard/src/components/Sidebar.astro", void 0);

const $$Astro = createAstro();
const $$DashboardLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DashboardLayout;
  const { title, currentPage } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-kqx5um5x> <head><meta charset="UTF-8"><meta name="description" content="Portfolio Dashboard"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title>${renderHead()}</head> <body data-astro-cid-kqx5um5x> <div class="min-h-screen bg-gray-50 flex" data-astro-cid-kqx5um5x> <!-- Fixed Sidebar --> ${renderComponent($$result, "Sidebar", $$Sidebar, { "currentPage": currentPage, "data-astro-cid-kqx5um5x": true })} <!-- Main Content --> <div class="flex-1 ml-64 min-h-screen" data-astro-cid-kqx5um5x> ${renderSlot($$result, $$slots["default"])} </div> </div> </body></html>`;
}, "/home/zuckdorsey/Programming/project/portfolio-dashboard/src/layouts/DashboardLayout.astro", void 0);

export { $$DashboardLayout as $ };
