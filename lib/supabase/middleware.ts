import { createClient } from "@supabase/supabase-js";
import { NextResponse, type NextRequest } from "next/server";

// Используем глобальные переменные окружения
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function updateSession(request: NextRequest) {
  // Если переменные окружения не заданы, пропускаем проверку
  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.next({ request });
  }

  // Инициализируем Supabase клиент для Edge
  const supabase = createClient(supabaseUrl, supabaseKey);

  // Получаем текущего пользователя
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Если пользователь не авторизован и пытается получить доступ к защищенным маршрутам, перенаправляем на страницу логина
  if (
    request.nextUrl.pathname !== "/" &&
    !user &&
    !request.nextUrl.pathname.startsWith("/login") &&
    !request.nextUrl.pathname.startsWith("/auth")
  ) {
    const url = request.nextUrl.clone();
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);
  }

  // Возвращаем NextResponse.next с текущим запросом
  return NextResponse.next({ request });
}
