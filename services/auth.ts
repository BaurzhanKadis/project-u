import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";
import { User } from "@prisma/client";

export const register = async (
  id: string,
  email: string,
  name: string,
  password: string
) => {
  try {
    const response = await axiosInstance.post<User>(ApiRoutes.USERREGISTER, {
      id,
      email,
      name,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("API client: ошибка при регистрации:", error);
    return null;
  }
};

// export const getCurrentUser = async (): Promise<User | null> => {
//   const supabase = createClient();
//   const {
//     data: { user },
//     error,
//   } = await supabase.auth.getUser();

//   if (error || !user) {
//     console.error("Ошибка при получении пользователя:", error);
//     return null;
//   }

//   return {
//     id: user.id,
//     email: user.email!,
//     name: user.user_metadata.name || "",
//     role: user.user_metadata.role || "USER",
//     image: user.user_metadata.avatar_url || null,
//   };
// };
