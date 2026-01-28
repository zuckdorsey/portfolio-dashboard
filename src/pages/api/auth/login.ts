import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, cookies }) => {
    try {
        const body = await request.json();
        const { pin } = body;

        // Simple hardcoded check
        // In production, this should be an environment variable
        if (pin === "123456") {
            cookies.set("auth_pin", "123456", {
                path: "/",
                httpOnly: true,
                secure: import.meta.env.PROD, // Only secure in prod
                maxAge: 60 * 60 * 24 * 7, // 1 week
                sameSite: "strict"
            });

            return new Response(JSON.stringify({ success: true }), {
                status: 200,
                headers: {
                    "Content-Type": "application/json"
                }
            });
        }

        return new Response(JSON.stringify({ error: "Invalid PIN" }), {
            status: 401,
            headers: {
                "Content-Type": "application/json"
            }
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: "Server error" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
};
