import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AppState {
  isAccessToken: boolean;
  setAccessToken: (isAccessToken: boolean) => void;
  getAccessToken: (accessToken: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isAccessToken: false,
  setAccessToken: (isAccessToken) => set(() => ({ isAccessToken })),
  getAccessToken: (isAccessToken) => set(() => ({ isAccessToken })),
}));
