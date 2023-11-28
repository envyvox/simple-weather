import { updateBackground } from "@/lib/upgdate-background";
import { Forecastday } from "@/typings";
import { create } from "zustand";

export type SelectedDayState = {
  selectedDay: Forecastday | undefined;
  setSelectedDay: (selectedDay: Forecastday) => void;
};

export const useSelectedDayStore = create<SelectedDayState>((set, get) => ({
  selectedDay: undefined,
  setSelectedDay: (selectedDay: Forecastday) => {
    const oldSelectedDay = get().selectedDay;
    set({ selectedDay });
    updateBackground(
      oldSelectedDay?.day.condition.code,
      selectedDay.day.condition.code
    );
  },
}));
