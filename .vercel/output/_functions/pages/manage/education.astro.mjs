import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_BorZG8IO.mjs';
import 'piccolore';
import { $ as $$DashboardLayout } from '../../chunks/DashboardLayout_CHUFUN8H.mjs';
import { f as getEducation } from '../../chunks/db_qKew7Mlk.mjs';
import { $ as $$FormModal } from '../../chunks/FormModal_CH1TdF5T.mjs';
export { renderers } from '../../renderers.mjs';

const $$Education = createComponent(async ($$result, $$props, $$slots) => {
  const educations = await getEducation();
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Manage Education", "currentPage": "education" }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-10 flex items-center justify-between"> <div> <h2 class="text-3xl font-bold text-gray-900">Manage Education</h2> <p class="text-sm text-gray-500 mt-1">
Organize and manage your education history.
</p> </div> <button onclick="openModal('educationModal')" class="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
+ Add Education
</button> </div>  <div id="successAlert" class="hidden mx-8 mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"> <p id="successMessage"></p> </div> <div id="errorAlert" class="hidden mx-8 mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800"> <p id="errorMessage"></p> </div>  <div class="p-8"> ${educations.length > 0 ? renderTemplate`<div class="space-y-4"> ${educations.map((edu) => renderTemplate`<div class="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition"> <div class="flex items-start justify-between"> <div class="flex-1"> <h3 class="text-lg font-semibold text-gray-900"> ${edu.degree} </h3> <p class="text-sm text-gray-600 mt-1"> <a${addAttribute(edu.website, "href")} target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline"> ${edu.institution} </a> </p> <p class="text-sm text-gray-500 mt-1">${edu.location}</p> <p class="text-sm text-gray-500"> ${edu.start_date} - ${edu.end_date} </p> </div> <div class="flex gap-2 ml-4"> <button${addAttribute(`editEducation(${JSON.stringify(edu)})`, "onclick")} class="p-2 text-gray-600 hover:bg-gray-100 rounded" title="Edit"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path> </svg> </button> <button${addAttribute(`deleteEducation(${edu.id})`, "onclick")} class="p-2 text-red-600 hover:bg-red-50 rounded" title="Delete"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path> </svg> </button> </div> </div> </div>`)} </div>` : renderTemplate`<div class="text-center py-12"> <p class="text-gray-500 mb-4">
No education added yet.
</p> <button onclick="openModal('educationModal')" class="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
Add First Education
</button> </div>`} <!-- Footer --> <div class="mt-8 text-center text-sm text-gray-500"> <p>© 2026 Portfolio Dashboard. All rights reserved.</p> </div> </div>  ${renderComponent($$result2, "FormModal", $$FormModal, { "id": "educationModal", "title": "Manage Education", "fields": [
    {
      name: "institution",
      label: "Institution Name",
      type: "text",
      required: true
    },
    {
      name: "website",
      label: "Website",
      type: "url",
      placeholder: "https://..."
    },
    { name: "degree", label: "Degree/Program", type: "text", required: true },
    { name: "location", label: "Location", type: "text" },
    {
      name: "start_date",
      label: "Start Date",
      type: "date",
      required: true
    },
    {
      name: "end_date",
      label: "End Date",
      type: "date",
      required: true
    }
  ], "submitText": "Save Education", "onSubmit": "submitEducationForm" })} ` })} ${renderScript($$result, "/home/zuckdorsey/Programming/project/portfolio-dashboard/src/pages/manage/education.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/zuckdorsey/Programming/project/portfolio-dashboard/src/pages/manage/education.astro", void 0);

const $$file = "/home/zuckdorsey/Programming/project/portfolio-dashboard/src/pages/manage/education.astro";
const $$url = "/manage/education";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Education,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
