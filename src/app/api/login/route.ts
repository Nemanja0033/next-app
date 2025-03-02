import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
    const { username } = await req.json(); // destrucuting username form request 

    const isAdmin = username === "admin";

    const token = jwt.sign({ id: 1, role: isAdmin ? "admin" : "user" }, "my_secret", { expiresIn: "1h" });

    const response = NextResponse.json({ message: "Login successful" });
    response.cookies.set("token", token, { httpOnly: true, maxAge: 3600 });

    return response;
}
