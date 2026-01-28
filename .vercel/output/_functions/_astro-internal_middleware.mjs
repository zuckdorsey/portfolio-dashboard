import { d as defineMiddleware, s as sequence } from './chunks/index_2syBy3QU.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_TPwpIpdJ.mjs';
import 'piccolore';
import './chunks/astro/server_BorZG8IO.mjs';
import 'clsx';

const onRequest$1 = defineMiddleware(async ({ cookies, request, redirect }, next) => {
  const url = new URL(request.url);
  const isProtectedRoute = url.pathname.startsWith("/dashboard") || url.pathname.startsWith("/manage");
  const isLoginPage = url.pathname === "/login";
  const authPin = cookies.get("auth_pin");
  const isAuthenticated = authPin && authPin.value === "123456";
  if (isProtectedRoute && !isAuthenticated) {
    return redirect("/login");
  }
  if (isLoginPage && isAuthenticated) {
    return redirect("/dashboard");
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
