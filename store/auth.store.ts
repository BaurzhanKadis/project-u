import { create } from "zustand";
import { User } from "@/lib/types";

interface AuthStore {
  isAuthenticated: boolean; // это поле для проверки авторизации
  setIsAuthenticated: (isAuthenticated: boolean) => void; // это поле для установки авторизации
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
}));

interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
