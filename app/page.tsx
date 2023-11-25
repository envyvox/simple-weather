import CurrentDay from "@/components/current-day";
import ForecastDay from "@/components/forecast-day";
import { getForecastWeather } from "@/lib/weather";

export default async function Home() {
  const data = await getForecastWeather();

  return (
    <main className="flex flex-col p-24 space-y-2 select-none">
      <CurrentDay locationName={data.location.name} currentDay={data.current} />
      <div className="flex gap-5 flex-wrap">
        {data.forecast.forecastday.map((day) => (
          <ForecastDay key={day.date_epoch.toString()} forecastDay={day} />
        ))}
      </div>
    </main>
  );
}
