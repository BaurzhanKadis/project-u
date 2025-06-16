import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET(id: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  return NextResponse.json(user);
}
