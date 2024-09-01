import { NextRequest, NextResponse } from "next/server";
import { errorRespose, successResponse } from "../../responses/baseResponse";
import { verifyToken } from "@/utils/jwt";
import prisma from "@/utils/prismaClient";
import { validateBody } from "@/utils/validate";
import { Prisma } from "@prisma/client";
import { CreateMemoryDto } from "./dto/createMemoryDto";

export async function POST(req: NextRequest) {
  const token = req.cookies.get("token")?.value ?? "";
  const data: any = await req.json();
  const validationErrors = await validateBody(data, CreateMemoryDto);

  if (validationErrors) {
    return NextResponse.json({ errors: validationErrors }, { status: 400 });
  }

  const jwt = verifyToken(token);
  if (!jwt.valid || !jwt.payload?.id) {
    return NextResponse.json(errorRespose("Unauthorized!"), { status: 401 });
  }

  try {
    const memory = await prisma.memory.create({
      data: {
        value: data.value,
        user: {
          connect: { id: jwt.payload.id },
        },
      },
    });

    return NextResponse.json(successResponse(memory));
  } catch (error) {
    return NextResponse.json(errorRespose("Failed to add memory item"), { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value ?? "";

  const jwt = verifyToken(token);
  if (!jwt.valid || !jwt.payload?.id) {
    return NextResponse.json(errorRespose("Unauthorized!"), { status: 401 });
  }

  try {
    const userId = jwt.payload.id;

    const memoryItems = await prisma.memory.findMany({
      where: {
        user_id: userId,
      },
      orderBy: {
        created_at: Prisma.SortOrder.desc,
      },
    });

    return NextResponse.json(successResponse(memoryItems));
  } catch (error) {
    return NextResponse.json(errorRespose("Failed to fetch memory items"), { status: 500 });
  }
}

// DELETE Method: Remove a specific memory item by ID for the user
export async function DELETE(req: NextRequest) {
  const token = req.cookies.get("token")?.value ?? "";
  const { memoryId } = await req.json();

  if (!memoryId) {
    return NextResponse.json(errorRespose("Memory ID is required"), { status: 400 });
  }

  const jwt = verifyToken(token);
  if (!jwt.valid || !jwt.payload?.id) {
    return NextResponse.json(errorRespose("Unauthorized!"), { status: 401 });
  }

  try {
    const userId = jwt.payload.id;

    const memoryItem = await prisma.memory.findUnique({
      where: { id: memoryId, user_id: userId },
    });

    if (!memoryItem) {
      return NextResponse.json(errorRespose("Memory item not found"), { status: 404 });
    }

    await prisma.memory.delete({
      where: { id: memoryId },
    });

    return NextResponse.json(successResponse({ message: "Memory item deleted successfully" }));
  } catch (error) {
    return NextResponse.json(errorRespose("Failed to delete memory item"), { status: 500 });
  }
}
