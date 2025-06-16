import { create } from "zustand";
import { Product } from "@prisma/client";
import { Api } from "@/services/api-client";

interface ProductStore {
  products: Product[];
  setProducts: (products: Product[]) => void;
  fetchProducts: () => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  isLoading: false,
  error: null,
  setProducts: (products) => set({ products }),
  fetchProducts: async () => {
    try {
      set({ isLoading: true, error: null });
      const response = await Api.products.allProducts();
      set({ products: response, isLoading: false });
    } catch (error) {
      set({
        error:
          error instanceof Error ? error.message : "Ошибка загрузки товаров",
        isLoading: false,
      });
    }
  },
}));
