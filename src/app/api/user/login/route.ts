import prisma from "@/utils/prismaClient";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { errorRespose, successResponse } from "../../responses/baseResponse";
import { AuthData } from "./responses/authResponse";
import { hash } from "bcrypt";
import { verifyToken } from "@/utils/jwt";

const JWT_SECRET = process.env.JWT_SECRET || "";
const TOKEN_EXPIRATION = "7d";

export async function POST(req: NextRequest) {
    const body: User = await req.json();
    let user = await prisma.user.findUnique({
        where: {
            email: body.email,
        }
    })

    if (!user) {
        return NextResponse.json(errorRespose("User not found!"));
    }

    let passwordMatch = await bcrypt.compare(body.password, user.password);

    if(!passwordMatch) {
        return NextResponse.json(errorRespose("Wrong password!"));
    }

    const token = jwt.sign(
        {
            id: user.id,
            email: user.email
        },
        JWT_SECRET,
        { expiresIn: TOKEN_EXPIRATION }
    );

    return NextResponse.json(successResponse<AuthData>({
         accessToken: token
    }));
}