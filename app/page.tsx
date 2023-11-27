"use client";

import CurrentDay from "@/components/current-day";
import Forecast from "@/components/forecast";
import LocationPicker from "@/components/location-picker";
import { locations } from "@/lib/locations";
import { getForecastWeather } from "@/lib/weather";
import { WeatherData } from "@/typings";
import { useEffect, useState } from "react";

export default function Home() {
  const [location, setLocation] = useState("Київ");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const loc = locations.find(
      (x) => x.label.toLowerCase() === location.toLowerCase()
    )!;
    getForecastWeather(loc.lat, loc.long).then((data) => {
      setWeatherData(data);
      setLoading(false);
    });
  }, [location]);

  return (
    <main className="container py-6 flex flex-col gap-5">
      <LocationPicker location={location} setLocation={setLocation} />
      <CurrentDay
        locationName={
          locations.find(
            (loc) => loc.label.toLowerCase() === location.toLowerCase()
          )?.label ??
          weatherData?.location.name ??
          ""
        }
        currentDay={weatherData?.current}
        loading={loading}
      />
      <Forecast
        forecastDays={weatherData?.forecast.forecastday}
        loading={loading}
      />
    </main>
  );
}
