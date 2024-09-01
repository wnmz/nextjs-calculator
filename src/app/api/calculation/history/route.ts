import { NextRequest, NextResponse } from "next/server";
import { errorRespose, successResponse } from "../../responses/baseResponse";
import { verifyToken } from "@/utils/jwt";
import prisma from "@/utils/prismaClient";
import { validateBody } from "@/utils/validate";
import { CreateHistoryOperationDto } from "./dto/createHistoryItemDto";
import { Prisma } from "@prisma/client";

export async function POST(req: NextRequest) {
  const token = req.cookies.get("token")?.value ?? "";
  const data: any = await req.json();
  const validationErrors = await validateBody(data, CreateHistoryOperationDto);

  if (validationErrors) {
    return NextResponse.json({ errors: validationErrors }, { status: 400 });
  }

  const jwt = verifyToken(token);
  if (!jwt.valid || !jwt.payload?.id) {
    return NextResponse.json(errorRespose("Unauthorized!"), { status: 401 });
  }

  let history = await prisma.calculation.create({
    data: {
      first_operand: data.first_operand,
      second_operand: data.second_operand,
      operator: data.operator,
      result: data.result,
      user: {
        connect: { id: jwt.payload.id },
      },
    },
  });

  return NextResponse.json(successResponse(history));
}

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value ?? "";

  const jwt = verifyToken(token);
  if (!jwt.valid || !jwt.payload?.id) {
    return NextResponse.json(errorRespose("Unauthorized!"), { status: 401 });
  }

  try {
    const userId = jwt.payload.id;

    const history = await prisma.calculation.findMany({
      where: {
        user_id: userId,
      },
      orderBy: {
        created_at: Prisma.SortOrder.desc,
      },
    });

    return NextResponse.json(successResponse(history));
  } catch (error) {
    return NextResponse.json(errorRespose("Failed to fetch calculation history"), { status: 500 });
  }
}
