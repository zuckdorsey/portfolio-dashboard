import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_BorZG8IO.mjs';
import 'piccolore';
import { $ as $$DashboardLayout } from '../../chunks/DashboardLayout_CHUFUN8H.mjs';
import { l as getExperiences } from '../../chunks/db_Dwi_5F6a.mjs';
import { $ as $$FormModal } from '../../chunks/FormModal_CH1TdF5T.mjs';
export { renderers } from '../../renderers.mjs';

const $$Experiences = createComponent(async ($$result, $$props, $$slots) => {
  const experiences = await getExperiences();
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Manage Experiences", "currentPage": "experiences" }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-10 flex items-center justify-between"> <div> <h2 class="text-3xl font-bold text-gray-900">Manage Experiences</h2> <p class="text-sm text-gray-500 mt-1">
Organize and manage your work experiences.
</p> </div> <button onclick="openModal('experienceModal')" class="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
+ Add Experience
</button> </div>  <div id="successAlert" class="hidden mx-8 mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"> <p id="successMessage"></p> </div> <div id="errorAlert" class="hidden mx-8 mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800"> <p id="errorMessage"></p> </div>  <div class="p-8"> ${experiences.length > 0 ? renderTemplate`<div class="space-y-4"> ${experiences.map((exp) => renderTemplate`<div class="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition"> <div class="flex items-start justify-between"> <div class="flex-1"> <h3 class="text-lg font-semibold text-gray-900"> ${exp.position} </h3> <p class="text-sm text-gray-600 mt-1"> <a${addAttribute(exp.company_url, "href")} target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline"> ${exp.company} </a> </p> <p class="text-sm text-gray-500 mt-1"> ${exp.start_date} - ${exp.end_date || "Present"} </p> <div class="mt-3 flex flex-wrap gap-2"> ${exp.technologies && Array.isArray(exp.technologies) && exp.technologies.map((tech) => renderTemplate`<span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full"> ${tech} </span>`)} </div> </div> <div class="flex gap-2 ml-4"> <button${addAttribute(`editExperience(${JSON.stringify(exp)})`, "onclick")} class="p-2 text-gray-600 hover:bg-gray-100 rounded" title="Edit"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path> </svg> </button> <button${addAttribute(`deleteExperience(${exp.id})`, "onclick")} class="p-2 text-red-600 hover:bg-red-50 rounded" title="Delete"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path> </svg> </button> </div> </div> </div>`)} </div>` : renderTemplate`<div class="text-center py-12"> <p class="text-gray-500 mb-4">
No experiences added yet.
</p> <button onclick="openModal('experienceModal')" class="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
Add First Experience
</button> </div>`} <!-- Footer --> <div class="mt-8 text-center text-sm text-gray-500"> <p>© 2026 Portfolio Dashboard. All rights reserved.</p> </div> </div>  ${renderComponent($$result2, "FormModal", $$FormModal, { "id": "experienceModal", "title": "Manage Experience", "fields": [
    {
      name: "company",
      label: "Company Name",
      type: "text",
      required: true
    },
    {
      name: "company_url",
      label: "Company URL",
      type: "url",
      placeholder: "https://..."
    },
    { name: "position", label: "Position", type: "text", required: true },
    {
      name: "type",
      label: "Job Type",
      type: "select",
      required: true,
      options: [
        { value: "full-time", label: "Full Time" },
        { value: "part-time", label: "Part Time" },
        { value: "freelance", label: "Freelance" },
        { value: "internship", label: "Internship" }
      ]
    },
    {
      name: "start_date",
      label: "Start Date",
      type: "date",
      required: true
    },
    { name: "end_date", label: "End Date", type: "date" },
    {
      name: "technologies",
      label: "Technologies (separate with comma)",
      type: "textarea",
      placeholder: "React, Node.js, PostgreSQL"
    }
  ], "submitText": "Save Experience", "onSubmit": "submitExperienceForm" })} ` })} ${renderScript($$result, "/home/zuckdorsey/Programming/project/portfolio-dashboard/src/pages/manage/experiences.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/zuckdorsey/Programming/project/portfolio-dashboard/src/pages/manage/experiences.astro", void 0);

const $$file = "/home/zuckdorsey/Programming/project/portfolio-dashboard/src/pages/manage/experiences.astro";
const $$url = "/manage/experiences";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Experiences,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
