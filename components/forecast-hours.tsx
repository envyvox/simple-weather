import ForecastHour from "./forecast-hour";
import { Skeleton } from "./ui/skeleton";
import { useLoadingStore } from "@/store/loading-store";
import { useSelectedDayStore } from "@/store/selected-day-store";
import ScrollContainer from "react-indiana-drag-scroll";

export default function ForecastHours() {
  const loading = useLoadingStore((state) => state.loading);
  const selectedDay = useSelectedDayStore((state) => state.selectedDay);
  const array = Array.from({ length: 9 }, (_, index) => index);
  const now = new Date();
  const isToday = now.getDay() === new Date(selectedDay?.date!).getDay();

  const hoursFromNow = selectedDay?.hour.filter(
    (h) => new Date(h.time).getHours() >= now.getHours(),
  );
  const displayedHours = isToday ? hoursFromNow : selectedDay?.hour;

  return (
    <ScrollContainer>
      <div className="flex flex-row gap-5">
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
