import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value;

    if (!token) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
        const decoded = jwt.verify(token, "my_secret") as { role: string };

        if (req.nextUrl.pathname.startsWith("/admin") && decoded.role !== "admin") {
            return NextResponse.redirect(new URL("/dashboard", req.url));
        }

        return NextResponse.next();
    } catch {
        return NextResponse.redirect(new URL("/login", req.url));
    }
}

export const config = {
    matcher: ["/dashboard/:path*", "/admin/:path*"], // Middleware se primenjuje na dashboard i admin
};
