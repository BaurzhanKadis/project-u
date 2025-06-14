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
