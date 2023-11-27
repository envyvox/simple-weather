import ForecastDay from "./forecast-day";
import { Skeleton } from "./ui/skeleton";
import { Forecastday } from "@/typings";

type Props = {
  forecastDays: Forecastday[] | undefined;
  loading: boolean;
};

export default function Forecast({ forecastDays, loading }: Props) {
  return (
    <div className="flex gap-5 flex-wrap">
      {loading ? (
        <>
          <Skeleton className="flex-1 h-[300px]" />
          <Skeleton className="flex-1 h-[300px]" />
          <Skeleton className="flex-1 h-[300px]" />
        </>
      ) : (
        forecastDays?.map((day) => (
          <ForecastDay key={day.date_epoch.toString()} forecastDay={day} />
        ))
      )}
    </div>
  );
}
