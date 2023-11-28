import ForecastHour from "./forecast-hour";
import { Skeleton } from "./ui/skeleton";
import { Forecastday } from "@/typings";
import ScrollContainer from "react-indiana-drag-scroll";

type Props = {
  forecastDay: Forecastday | undefined;
  loading: boolean;
};

export default function ForecastHours({ forecastDay, loading }: Props) {
  const array = Array.from({ length: 24 }, (_, index) => index);
  const now = new Date();
  const isToday = now.getDay() === new Date(forecastDay?.date!).getDay();

  const hoursFromNow = forecastDay?.hour.filter(
    (h) => new Date(h.time).getHours() >= now.getHours()
  );
  const displayedHours = isToday ? hoursFromNow : forecastDay?.hour;

  return (
    <ScrollContainer>
      <div className="flex flex-row gap-5">
        {/* TODO: for some reasons, scroll container doesn't work on first load (F5 refresh) */}
        {loading
          ? array.map((x) => (
              <Skeleton key={x} className="min-w-[120px] h-[185px]" />
            ))
          : displayedHours?.map((hour) => (
              <ForecastHour key={hour.time_epoch} forecastHour={hour} />
            ))}
      </div>
    </ScrollContainer>
  );
}
