import prisma from "@/utils/prismaClient";
import { User } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body: User = await req.json();
    console.log(body)
    let user = await prisma.user.findUnique({
        where: {
            email: body.email,
            password: body.password
        }
    })

    return NextResponse.json(user);
}