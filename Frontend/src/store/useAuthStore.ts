// src/store/useAuthStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

interface User {
  username: string;
  foto?: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,

      login: async (username, password) => {
        try {
          const response = await axios.post(`${API_URL}/api/login`, {
            username,
            password,
          });

          // 🛠️ DISESUAIKAN: Karena backend membungkus datanya di dalam objek 'data' (response.data.data)
          if (response.data && response.data.success) {
            const loginData = response.data.data;

            if (loginData.token) {
              localStorage.setItem("token", loginData.token);
            }

            set({
              isAuthenticated: true,
              user: {
                username: loginData.user?.username || username,
                foto: loginData.user?.foto || null,
              },
            });
            return true;
          }
          return false;
        } catch (error) {
          console.error("Login API Error:", error);
          return false;
        }
      },

      logout: () => {
        localStorage.removeItem("token");
        set({ isAuthenticated: false, user: null });
      },
    }),
    { name: "auth-storage" }
  )
);