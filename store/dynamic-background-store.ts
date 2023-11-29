import { useSelectedDayStore } from "./selected-day-store";
import { updateBackground } from "@/lib/upgdate-background";
import { create } from "zustand";

export type DynamicBackgroundState = {
  enabled: boolean;
  getEnabled: () => void;
  setEnabled: (enabled: boolean) => void;
};

export const useDynamicBackgroundStore = create<DynamicBackgroundState>(
  (set) => ({
    enabled: false,
    getEnabled: () => {
      // TODO: is this actually a good way to compare?
      const enabled = /true/i.test(
        localStorage.getItem("dynamic-background-enabled") ?? "false",
      );
      set({ enabled });
    },
    setEnabled: (enabled: boolean) => {
      localStorage.setItem("dynamic-background-enabled", `${enabled}`);
      set({ enabled });
      const selectedDay = useSelectedDayStore.getState().selectedDay;

      if (enabled) {
        // if user enabled dynamic background, then there are no old condition, only new condition
        updateBackground(undefined, selectedDay?.day.condition.code);
      } else {
        // if user disabled dynamic background, then there are no new condition, only old condition
        updateBackground(selectedDay?.day.condition.code, undefined);
      }
    },
  }),
);
