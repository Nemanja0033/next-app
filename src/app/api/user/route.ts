import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

export async function GET(req: NextRequest){
    const token = req.cookies.get("token")?.value;
    if(!token) return NextResponse.json({role: "guest"});

    try{
        const decoded = jwt.verify(token, "my_secret") as {role: string};
        return NextResponse.json({role: decoded.role});
    }
    catch{
        return NextResponse.json({role: "guest"});
    }
}