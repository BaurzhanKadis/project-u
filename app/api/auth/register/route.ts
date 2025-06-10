import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function POST(id: string, email: string, name: string) {
  const user = await prisma.user.create({
    data: {
      id: id, // Используем ID из Supabase Auth
      email: email,
      role: "USER",
      name: name,
      password: "", // Пустая строка, так как пароль хранится в Supabase
    },
  });
  return NextResponse.json({
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
      name: user.name,
    },
  });
}
// const user = await prisma.user.create({
//     data: {
//       id: authData.user.id, // Используем ID из Supabase Auth
//       email: authData.user.email!,
//       name: name,
//       password: "", // Пароль хранится только в Supabase Auth
//       role: "USER", // Начальная роль
//     },
//   });

//   return NextResponse.json({
//     user: {
//       id: user.id,
//       email: user.email,
//       name: user.name,
//       role: user.role,
//     },
//   });
// } catch (error) {
//   console.error("Ошибка при регистрации:", error);
//   return NextResponse.json(
//     { error: "Внутренняя ошибка сервера" },
//     { status: 500 }
//   );
// }
