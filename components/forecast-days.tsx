import ForecastDay from "./forecast-day";
import { Skeleton } from "./ui/skeleton";
import { useLoadingStore } from "@/store/loading-store";
import { useWeatherDataStore } from "@/store/weather-data-store";

export default function ForecastDays() {
  const loading = useLoadingStore((state) => state.loading);
  const weatherData = useWeatherDataStore((state) => state.weatherData);

  return (
    <div className="flex flex-wrap gap-5">
      {loading ? (
        <>
          <Skeleton className="h-[150px] flex-1" />
          <Skeleton className="h-[150px] flex-1" />
          <Skeleton className="h-[150px] flex-1" />
        </>
      ) : (
        weatherData?.forecast.forecastday.map((day) => (
          <ForecastDay key={day.date_epoch} forecastDay={day} />
        ))
      )}
    </div>
  );
}
