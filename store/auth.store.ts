import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "@/lib/types";
import { Api } from "@/services/api-client";

interface UserStore {
  user:
    | (Pick<User, "id" | "email" | "name" | "role"> & { image: string | null })
    | null;
  setUser: (
    user:
      | (Pick<User, "id" | "email" | "name" | "role"> & {
          image: string | null;
        })
      | null
  ) => void;
  fetchUser: () => Promise<void>;
  clearUser: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      fetchUser: async () => {
        try {
          const response = await Api.user.getCurrentUser();
          if (response) {
            // Сохраняем только необходимые данные
            const { id, email, name, role, image } = response;
            set({ user: { id, email, name, role, image } });
          }
        } catch (error) {
          console.error("Ошибка при получении пользователя:", error);
          set({ user: null });
        }
      },
      clearUser: () => {
        set({ user: null });
        // Очищаем данные из localStorage
        if (typeof window !== "undefined") {
          localStorage.removeItem("user-storage");
        }
      },
    }),
    {
      name: "user-storage",
      partialize: (state) => ({ user: state.user }), // Сохраняем только user
    }
  )
);
