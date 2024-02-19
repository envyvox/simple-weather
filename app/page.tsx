"use client";

import CurrentDay from "@/components/current-day";
import DynamicBackgroundToggle from "@/components/dynamic-background-toggle";
import ForecastDayDetails from "@/components/forecast-day-details";
import ForecastDays from "@/components/forecast-days";
import ForecastHours from "@/components/forecast-hours";
import LocationPicker from "@/components/location-picker";
import { useDynamicBackgroundStore } from "@/store/dynamic-background-store";
import { useLocationStore } from "@/store/location-store";
import { useWeatherDataStore } from "@/store/weather-data-store";
import { useEffect } from "react";

export default function Home() {
  const location = useLocationStore((state) => state.location);
  const getWeatherData = useWeatherDataStore((state) => state.getWeatherData);
  const getDynamicBackgroundEnabled = useDynamicBackgroundStore(
    (state) => state.getEnabled,
  );

  useEffect(() => {
    getDynamicBackgroundEnabled();
    getWeatherData();
  }, [getDynamicBackgroundEnabled, getWeatherData, location]);

  return (
    <main className="container flex flex-col gap-5 py-6">
      <div className="flex justify-between">
        <LocationPicker />
        <DynamicBackgroundToggle />
      </div>
      <CurrentDay />
      <ForecastDays />
      <ForecastHours />
      <ForecastDayDetails />
    </main>
  );
}
