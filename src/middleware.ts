import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("token");

    if(!token){    // if dont have token redirect
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
};

export const config = {
    matcher: "/dashboard:path*", // protect this route
};