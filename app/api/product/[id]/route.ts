import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

// export async function GET(
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   const { id } = params;
//   const product = await prisma.product.findUnique({
//     where: { id },
//   });
//   return NextResponse.json(product);
// }

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });
  return NextResponse.json(product);
}
