import { create } from "zustand";

export type LocationState = {
  location: string;
  getLocation: () => void;
  setLocation: (location: string) => void;
};

export const useLocationStore = create<LocationState>((set) => ({
  location: "Київ",
  getLocation: () => {
    const location = localStorage.getItem("location") ?? "Київ";
    set({ location });
  },
  setLocation: (location: string) => {
    localStorage.setItem("location", location);
    set({ location });
  },
}));
