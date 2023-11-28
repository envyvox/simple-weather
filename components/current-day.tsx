import { Skeleton } from "./ui/skeleton";
import { useLoadingStore } from "@/store/loading-store";
import { useLocationStore } from "@/store/location-store";
import { useWeatherDataStore } from "@/store/weather-data-store";

export default function CurrentDay() {
  const loading = useLoadingStore((state) => state.loading);
  const location = useLocationStore((state) => state.location);
  const weatherData = useWeatherDataStore((state) => state.weatherData);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl font-extrabold tracking-tight capitalize">
          {loading ? <Skeleton className="h-[48px] w-[500px]" /> : location}
        </h1>
        <h4 className="text-xl tracking-tight">
          {loading ? (
            <Skeleton className="h-[28px] w-[400px]" />
          ) : (
            weatherData?.current.condition.text
          )}
        </h4>
      </div>
      <span className="text-9xl font-extrabold tracking-tight">
        {loading ? (
          <Skeleton className="h-[128px] w-[120px]" />
        ) : (
          `${Math.round(weatherData?.current.temp_c as number)}°`
        )}
      </span>
    </div>
  );
}
