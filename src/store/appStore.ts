import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// const appDataStore = (set: any) => ({
//     isAccessToken: false,
//     setAccessToken: (accessToken: string) => {
//         set((state: any) => ({
//             isAccessToken: true,
//         }))
//     },
//     removeAccessToken: (accessToken: string) => {
//         set((state: any) => ({
//             isAccessToken: false,
//         }))
//     },
// })

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
