import prisma from "@/utils/prismaClient";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { errorRespose, successResponse } from "../../responses/baseResponse";
import { AuthData } from "../types/authResponse";
import { hash } from "bcrypt";
import { verifyToken } from "@/utils/jwt";
import { CreateUserDto } from "./dto/userCreateDto";
import { validateBody } from "@/utils/validate";

const JWT_SECRET = process.env.JWT_SECRET || "";
const TOKEN_EXPIRATION = "7d";

export async function POST(req: NextRequest) {
    const body: User = await req.json();
    const validationErrors = await validateBody(body, CreateUserDto);

    if (validationErrors) {
        return NextResponse.json({ errors: validationErrors }, { status: 400 });
    }

    let passwordHash = await bcrypt.hash(body.password, 10);

    let user = await prisma.user.create({
        data: {
            email: body.email,
            password: passwordHash,
        }
    })

    const token = jwt.sign(
        {
            id: user.id,
            email: user.email
        },
        JWT_SECRET,
        { expiresIn: TOKEN_EXPIRATION }
    );

    return NextResponse.json(successResponse<AuthData>({
        accessToken: token,
        payload: {
            email: user.email,
            id: user.id
        }
    }));
}