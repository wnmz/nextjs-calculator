import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    let token = req.cookies.get("token");
    let auth = req.headers.get("authorization");
    console.log(token, auth)
    return NextResponse.json({ message: "Hello, world! This is a GET request." });
}