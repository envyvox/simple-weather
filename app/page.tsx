"use client";

import CurrentDay from "@/components/current-day";
import ForecastDayDetails from "@/components/forecast-day-details";
import ForecastDays from "@/components/forecast-days";
import ForecastHours from "@/components/forecast-hours";
import LocationPicker from "@/components/location-picker";
import { useLocationStore, useWeatherDataStore } from "@/store/store";
import { useEffect } from "react";

export default function Home() {
  const location = useLocationStore((state) => state.location);
  const getWeatherData = useWeatherDataStore((state) => state.getWeatherData);

  useEffect(() => {
    getWeatherData();
  }, [location]);

  return (
    <main className="container py-6 flex flex-col gap-5">
      <LocationPicker />
      <CurrentDay />
      <ForecastDays />
      <ForecastHours />
      <ForecastDayDetails />
    </main>
  );
}
