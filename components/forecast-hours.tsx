import ForecastHour from "./forecast-hour";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Skeleton } from "./ui/skeleton";
import { Forecasthour } from "@/typings";

type Props = {
  forecastHours: Forecasthour[] | undefined;
  loading: boolean;
};

export default function ForecastHours({ forecastHours, loading }: Props) {
  return (
    <ScrollArea className="whitespace-nowrap">
      <div className="flex w-max gap-5 pb-5">
        {loading ? (
          <Skeleton></Skeleton>
        ) : (
          forecastHours?.map((hour) => (
            <ForecastHour key={hour.time_epoch} forecastHour={hour} />
          ))
        )}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
