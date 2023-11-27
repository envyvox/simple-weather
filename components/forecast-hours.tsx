import ForecastHour from "./forecast-hour";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Skeleton } from "./ui/skeleton";
import { Forecasthour } from "@/typings";

type Props = {
  forecastHours: Forecasthour[] | undefined;
  loading: boolean;
};

export default function ForecastHours({ forecastHours, loading }: Props) {
  const array = Array.from({ length: 24 }, (_, index) => index);
  return (
    <ScrollArea className="whitespace-nowrap">
      <div className="flex w-max gap-5 pb-5">
        {loading
          ? array.map((x) => (
              <Skeleton key={x} className="w-[99px] h-[185px]" />
            ))
          : forecastHours?.map((hour) => (
              <ForecastHour key={hour.time_epoch} forecastHour={hour} />
            ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
