import ForecastDay from "./forecast-day";
import { Skeleton } from "./ui/skeleton";
import { Forecastday } from "@/typings";

type Props = {
  forecastDays: Forecastday[] | undefined;
  selectedDay: Forecastday | undefined;
  setSelectedDay: React.Dispatch<React.SetStateAction<Forecastday | undefined>>;
  loading: boolean;
};

export default function ForecastDays({
  forecastDays,
  selectedDay,
  setSelectedDay,
  loading,
}: Props) {
  return (
    <div className="flex gap-5 flex-wrap">
      {loading ? (
        <>
          <Skeleton className="flex-1 h-[150px]" />
          <Skeleton className="flex-1 h-[150px]" />
          <Skeleton className="flex-1 h-[150px]" />
        </>
      ) : (
        forecastDays?.map((day) => (
          <ForecastDay
            key={day.date_epoch}
            forecastDay={day}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
          />
        ))
      )}
    </div>
  );
}
