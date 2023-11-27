"use client";

import CurrentDay from "@/components/current-day";
import ForecastDays from "@/components/forecast-days";
import ForecastHours from "@/components/forecast-hours";
import LocationPicker from "@/components/location-picker";
import { locations } from "@/lib/locations";
import { getForecastWeather } from "@/lib/weather";
import { Forecastday, WeatherData } from "@/typings";
import { useEffect, useState } from "react";

export default function Home() {
  const [location, setLocation] = useState("Київ");
  const [weatherData, setWeatherData] = useState<WeatherData>();
  const [loading, setLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState<Forecastday>();

  useEffect(() => {
    setLoading(true);
    const loc = locations.find(
      (x) => x.label.toLowerCase() === location.toLowerCase()
    )!;
    getForecastWeather(loc.lat, loc.long).then((data) => {
      setWeatherData(data);
      setLoading(false);

      if (selectedDay === undefined) {
        setSelectedDay(data.forecast.forecastday[0]);
      }
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
      <ForecastDays
        forecastDays={weatherData?.forecast.forecastday}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        loading={loading}
      />
      <ForecastHours forecastHours={selectedDay?.hour} loading={loading} />
    </main>
  );
}
