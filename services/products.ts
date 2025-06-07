import { Product } from "@prisma/client";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";

export const allProducts = async (): Promise<Product[]> => {
  try {
    const response = await axiosInstance.get<Product[]>(ApiRoutes.PRODUCTS);
    return response.data;
  } catch (error) {
    console.error("API client: ошибка при получении всех продуктов:", error);
    return [];
  }
};
