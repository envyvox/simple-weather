import ForecastDay from "./forecast-day";
import { Skeleton } from "./ui/skeleton";
import { useLoadingStore } from "@/store/loading-store";
import { useWeatherDataStore } from "@/store/weather-data-store";

export default function ForecastDays() {
  const loading = useLoadingStore((state) => state.loading);
  const weatherData = useWeatherDataStore((state) => state.weatherData);

  return (
    <div className="flex gap-5 flex-wrap">
      {loading ? (
        <>
          <Skeleton className="flex-1 h-[150px]" />
          <Skeleton className="flex-1 h-[150px]" />
          <Skeleton className="flex-1 h-[150px]" />
        </>
      ) : (
        weatherData?.forecast.forecastday.map((day) => (
          <ForecastDay key={day.date_epoch} forecastDay={day} />
        ))
      )}
    </div>
  );
}
