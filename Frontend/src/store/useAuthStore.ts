// src/store/useAuthStore.ts

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  nim: string;
  nama: string;
  photo?: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  login: (nim: string, password: string) => boolean;
  logout: () => void;
}

const VALID_USERS = [
  {
    nim: "24090002",
    password: "24090002",
    nama: "Fatih Mubarok",
    photo: "/foto.jpeg",
  },
];

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,

      login: (nim, password) => {
        const found = VALID_USERS.find(
          (u) => u.nim === nim && u.password === password
        );
        if (found) {
          set({
            isAuthenticated: true,
            user: {
              nim: found.nim,
              nama: found.nama,
              photo: found.photo,
            },
          });
          return true;
        }
        return false;
      },

      logout: () => set({ isAuthenticated: false, user: null }),
    }),
    { name: "auth-storage" }
  )
);