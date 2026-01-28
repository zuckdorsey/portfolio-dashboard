import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_BorZG8IO.mjs';
import 'piccolore';
import { $ as $$DashboardLayout } from '../../chunks/DashboardLayout_CHUFUN8H.mjs';
import { q as getProjects, x as getSkills } from '../../chunks/db_qKew7Mlk.mjs';
import { $ as $$FormModal } from '../../chunks/FormModal_CH1TdF5T.mjs';
export { renderers } from '../../renderers.mjs';

const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await getProjects();
  const skills = await getSkills();
  const skillOptions = skills.map((s) => ({ value: s.title, label: s.title }));
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Manage Projects", "currentPage": "projects" }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-10 flex items-center justify-between"> <div> <h2 class="text-3xl font-bold text-gray-900">Manage Projects</h2> <p class="text-sm text-gray-500 mt-1">
Organize and manage all your projects.
</p> </div> <button onclick="openModal('projectModal')" class="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
+ Add Project
</button> </div>  <div id="successAlert" class="hidden mx-8 mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"> <p id="successMessage"></p> </div> <div id="errorAlert" class="hidden mx-8 mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800"> <p id="errorMessage"></p> </div>  <div class="p-8"> ${projects.length > 0 ? renderTemplate`<div class="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"> <table class="w-full"> <thead class="bg-gray-50 border-b border-gray-200"> <tr> <th class="px-6 py-3 text-left text-sm font-semibold text-gray-900">
Project Name
</th> <th class="px-6 py-3 text-left text-sm font-semibold text-gray-900">
Date
</th> <th class="px-6 py-3 text-left text-sm font-semibold text-gray-900">
Technologies
</th> <th class="px-6 py-3 text-left text-sm font-semibold text-gray-900">
Actions
</th> </tr> </thead> <tbody class="divide-y divide-gray-200"> ${projects.map((project) => renderTemplate`<tr class="hover:bg-gray-50 transition"> <td class="px-6 py-4"> <div class="flex items-center gap-3"> ${project.image && renderTemplate`<a${addAttribute(project.image, "href")} target="_blank" rel="noopener noreferrer"> <img${addAttribute(project.image, "src")}${addAttribute(project.name, "alt")} class="w-10 h-10 object-cover rounded-md border border-gray-200" onerror="this.onerror=null; this.src='https://via.placeholder.com/40'"> </a>`} <div> <h3 class="font-medium text-gray-900"> ${project.name} </h3> ${project.link && renderTemplate`<a${addAttribute(project.link, "href")} target="_blank" rel="noopener noreferrer" class="text-sm text-blue-600 hover:underline">
Visit
</a>`} </div> </div> </td> <td class="px-6 py-4 text-sm text-gray-600"> ${project.date} </td> <td class="px-6 py-4 text-sm"> <div class="flex gap-1 flex-wrap"> ${project.technos && Array.isArray(project.technos) && project.technos.map((tech) => renderTemplate`<span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"> ${tech} </span>`)} </div> </td> <td class="px-6 py-4"> <div class="flex gap-2"> <button${addAttribute(`editProject(${JSON.stringify(project)})`, "onclick")} class="p-2 text-gray-600 hover:bg-gray-100 rounded" title="Edit"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path> </svg> </button> <button${addAttribute(`deleteProject(${project.id})`, "onclick")} class="p-2 text-red-600 hover:bg-red-50 rounded" title="Delete"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path> </svg> </button> </div> </td> </tr>`)} </tbody> </table> </div>` : renderTemplate`<div class="text-center py-12"> <p class="text-gray-500 mb-4">
No projects added yet.
</p> <button onclick="openModal('projectModal')" class="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
Add First Project
</button> </div>`} <!-- Footer --> <div class="mt-8 text-center text-sm text-gray-500"> <p>© 2026 Portfolio Dashboard. All rights reserved.</p> </div> </div>  ${renderComponent($$result2, "FormModal", $$FormModal, { "id": "projectModal", "title": "Manage Project", "fields": [
    {
      name: "name",
      label: "Project Name",
      type: "text",
      required: true,
      placeholder: "e.g., Portfolio Website"
    },
    { name: "date", label: "Date", type: "text", required: true },
    {
      name: "link",
      label: "Project URL",
      type: "url",
      placeholder: "https://..."
    },
    {
      name: "repo_link",
      label: "Repository Link",
      type: "url",
      placeholder: "https://github.com/..."
    },
    {
      name: "image",
      label: "Upload Image",
      type: "file",
      accept: "image/*"
    },
    {
      name: "technos",
      label: "Technologies",
      type: "multiselect",
      options: skillOptions
    },
    {
      name: "type",
      label: "Project Type (separate with comma)",
      type: "textarea",
      placeholder: "Web App, Full Stack"
    },
    {
      name: "content_en",
      label: "Description (English)",
      type: "textarea",
      placeholder: "Project description in English...",
      required: true
    },
    {
      name: "content_id",
      label: "Description (Indonesian)",
      type: "textarea",
      placeholder: "Deskripsi proyek dalam Bahasa Indonesia...",
      required: true
    }
  ], "submitText": "Save Project", "onSubmit": "submitProjectForm" })} ` })} ${renderScript($$result, "/home/zuckdorsey/Programming/project/portfolio-dashboard/src/pages/manage/projects.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/zuckdorsey/Programming/project/portfolio-dashboard/src/pages/manage/projects.astro", void 0);

const $$file = "/home/zuckdorsey/Programming/project/portfolio-dashboard/src/pages/manage/projects.astro";
const $$url = "/manage/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
