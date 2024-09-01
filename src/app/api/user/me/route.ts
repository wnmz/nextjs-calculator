import { NextRequest, NextResponse } from "next/server";
import { errorRespose, successResponse } from "../../responses/baseResponse";
import { verifyToken } from "@/utils/jwt";
import prisma from "@/utils/prismaClient";
import { Prisma } from "@prisma/client";

export async function GET(req: NextRequest) {
    let token = req.cookies.get("token")?.value;

    // TODO: Make token validation as another function or create JWT class
    if(!token) {
        return NextResponse.json(errorRespose("Unauthorized!"), {status: 500});
    }

    let jwt = verifyToken(token);
    if(!jwt.valid || !jwt.payload?.id) {
        return NextResponse.json(errorRespose("Unauthorized!"), {status: 500});
    }

    let user = await prisma.user.findUnique({
        where: {
            id: jwt.payload.id
        },
        include: {
            calculations: {
                orderBy: {
                    created_at: Prisma.SortOrder.desc
                }
            },
            memory: {
                orderBy: {
                    created_at: Prisma.SortOrder.desc
                }
            },
        },
    });

    if(!user) {
        return NextResponse.json(errorRespose("Unauthorized!"), {status: 500});
    }

    return NextResponse.json(successResponse(user));
}