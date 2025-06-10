import { create } from "zustand";
import { User } from "@/lib/types";
// import { Api } from "@/services/api-client";

// interface AuthStore {
//   isAuthenticated: boolean; // это поле для проверки авторизации
//   setIsAuthenticated: (isAuthenticated: boolean) => void; // это поле для установки авторизации
// }

// export const useAuthStore = create<AuthStore>((set) => ({
//   isAuthenticated: false,
//   setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
// }));

interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
  // fetchUser: (user: {
  //   id: string;
  //   email: string;
  //   name: string;
  // }) => Promise<void>;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  // fetchUser: async (user) => {
  //   try {
  //     const response = await Api.auth.register(
  //       user.id,
  //       user.email,
  //       user.name,
  //       ""
  //     );
  //     set({ user: response as User });
  //   } catch (error) {
  //     console.error("Ошибка при регистрации:", error);
  //   }
  // },
}));
