import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

// export async function GET(
//     req: NextRequest,
//     { params }: { params: Promise<{ id: string }> }
//   ) {
//     const { id } = await params;
//     const transport = await prisma.transport.findUnique({
//       where: {
//         id: Number(id),
//       },
//     });
//     return NextResponse.json(transport);
//   }

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const user = await prisma.user.findUnique({
      where: { id: id },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        image: true,
        phone: true,
        address: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Пользователь не найден" },
        { status: 404 }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Ошибка при получении пользователя:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}
