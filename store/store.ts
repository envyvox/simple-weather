import { locations } from "@/lib/locations";
import { getForecastWeather } from "@/lib/weather";
import { Forecastday, WeatherData } from "@/typings";
import { create } from "zustand";

export type LocationState = {
  location: string;
  getLocation: () => void;
  setLocation: (location: string) => void;
};

export type LoadingState = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

export type WeatherDataState = {
  weatherData: WeatherData | undefined;
  getWeatherData: () => void;
  setWeatherData: (weatherData: WeatherData) => void;
};

export type SelectedDayState = {
  selectedDay: Forecastday | undefined;
  setSelectedDay: (selectedDay: Forecastday) => void;
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

export const useLoadingStore = create<LoadingState>((set) => ({
  loading: true,
  setLoading: (loading: boolean) => set({ loading }),
}));

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

export const useSelectedDayStore = create<SelectedDayState>((set) => ({
  selectedDay: undefined,
  setSelectedDay: (selectedDay: Forecastday) => set({ selectedDay }),
}));
