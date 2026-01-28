import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async ({ cookies, request, redirect }, next) => {
    const url = new URL(request.url);

    // Define protected routes
    const isProtectedRoute = url.pathname.startsWith("/dashboard") || url.pathname.startsWith("/manage");
    const isLoginPage = url.pathname === "/login";

    const authPin = cookies.get("auth_pin");
    const isAuthenticated = authPin && authPin.value === "123456";

    // Redirect to login if accessing protected route without auth
    if (isProtectedRoute && !isAuthenticated) {
        return redirect("/login");
    }

    // Redirect to dashboard if accessing login while authenticated
    if (isLoginPage && isAuthenticated) {
        return redirect("/dashboard");
    }

    return next();
});
