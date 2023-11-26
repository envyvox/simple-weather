"use client";

import CurrentDay from "@/components/current-day";
import ForecastDay from "@/components/forecast-day";
import LocationPicker from "@/components/location-picker";
import { locations } from "@/lib/locations";
import { getForecastWeather } from "@/lib/weather";
import { WeatherData } from "@/typings";
import { useEffect, useState } from "react";

export default function Home() {
  const [location, setLocation] = useState("kyiv");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const loc = locations.find(
      (x) => x.value.toLowerCase() === location.toLowerCase()
    )!;
    getForecastWeather(loc.lat, loc.long).then((data) => setWeatherData(data));
  }, [location]);

  if (weatherData === null) return <></>;

  return (
    <main className="flex flex-col p-24 space-y-2 select-none">
      <LocationPicker location={location} setLocation={setLocation} />
      <CurrentDay
        locationName={
          locations.find((loc) => loc.value === location)?.label ??
          weatherData.location.name
        }
        currentDay={weatherData.current}
      />
      <div className="flex gap-5 flex-wrap">
        {weatherData.forecast.forecastday.map((day) => (
          <ForecastDay key={day.date_epoch.toString()} forecastDay={day} />
        ))}
      </div>
    </main>
  );
}
