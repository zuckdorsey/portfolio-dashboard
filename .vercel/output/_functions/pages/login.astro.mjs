import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, h as createAstro, m as maybeRenderHead } from '../chunks/astro/server_BorZG8IO.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_C1skhnkm.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  if (Astro2.request.method === "GET") {
    const authPin = Astro2.cookies.get("auth_pin");
    if (authPin && authPin.value === "123456") {
      return Astro2.redirect("/dashboard");
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Login Portfolio Manager" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gray-100 flex items-center justify-center p-4"> <div class="bg-white rounded-xl shadow-lg w-full max-w-md p-8"> <div class="text-center mb-8"> <h1 class="text-2xl font-bold text-gray-900">Portfolio Manager</h1> <p class="text-gray-500 mt-2">Enter PIN to access dashboard</p> </div> <form class="space-y-6" id="loginForm"> <div> <label for="pin" class="block text-sm font-medium text-gray-700 mb-2">
Security PIN
</label> <input type="password" id="pin" name="pin" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-center text-2xl tracking-[0.5em] transition" placeholder="••••••" maxlength="6" required pattern="[0-9]*" inputmode="numeric" autofocus> </div> <div id="errorMessage" class="hidden p-3 bg-red-100 text-red-700 rounded-lg text-sm text-center"></div> <button type="submit" class="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition duration-200 transform hover:scale-[1.02]">
Access Dashboard
</button> </form> </div> </div> ` })} ${renderScript($$result, "/home/zuckdorsey/Programming/project/portfolio-dashboard/src/pages/login.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/zuckdorsey/Programming/project/portfolio-dashboard/src/pages/login.astro", void 0);

const $$file = "/home/zuckdorsey/Programming/project/portfolio-dashboard/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
