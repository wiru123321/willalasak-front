import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    if (
        [
            "/manifest.json",
            "/favicon.ico",
            // Your other files in `public`
        ].includes(pathname)
    )
        return;
}

export const config = {
    matcher: ["/((?!_next).*)"],
};
