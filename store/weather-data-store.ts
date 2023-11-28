import { useLoadingStore } from "./loading-store";
import { useLocationStore } from "./location-store";
import { useSelectedDayStore } from "./selected-day-store";
import { locations } from "@/lib/locations";
import { getForecastWeather } from "@/lib/weather";
import { WeatherData } from "@/typings";
import { create } from "zustand";

export type WeatherDataState = {
  weatherData: WeatherData | undefined;
  getWeatherData: () => void;
  setWeatherData: (weatherData: WeatherData) => void;
};

export const useWeatherDataStore = create<WeatherDataState>((set) => ({
  weatherData: undefined,
  getWeatherData: async () => {
    const setLoading = useLoadingStore.getState().setLoading;

    setLoading(true);

    const getLocation = useLocationStore.getState().getLocation;

    getLocation();

    const location = useLocationStore.getState().location;
    const locationObject = locations.find(
      (x) => x.label.toLowerCase() === location.toLowerCase()
    )!;
    const weatherData = await getForecastWeather(
      locationObject.lat,
      locationObject.long
    );

    set({ weatherData });

    const setSelectedDay = useSelectedDayStore.getState().setSelectedDay;

    setSelectedDay(weatherData.forecast.forecastday[0]);
    setLoading(false);
  },
  setWeatherData: (weatherData: WeatherData) => set({ weatherData }),
}));
