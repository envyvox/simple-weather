import { create } from "zustand";

export type LoadingState = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

export const useLoadingStore = create<LoadingState>((set) => ({
  loading: true,
  setLoading: (loading: boolean) => set({ loading }),
}));
