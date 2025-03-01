import { NextResponse } from "next/server";

export async function GET(){
    const users = [
        { id: 1, name: "Nemanja" },
        { id: 2, name: "Marko" },
        { id: 3, name: "Jovana" }
      ];
    return NextResponse.json(users);
}