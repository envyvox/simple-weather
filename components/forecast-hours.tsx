import ForecastHour from "./forecast-hour";
import { Skeleton } from "./ui/skeleton";
import { Forecasthour } from "@/typings";
import ScrollContainer from "react-indiana-drag-scroll";

type Props = {
  forecastHours: Forecasthour[] | undefined;
  loading: boolean;
};

export default function ForecastHours({ forecastHours, loading }: Props) {
  const array = Array.from({ length: 24 }, (_, index) => index);

  return (
    <ScrollContainer>
      <div className="flex flex-row w-full gap-5">
        {loading
          ? array.map((x) => (
              <Skeleton key={x} className="min-w-[120px] h-[185px]" />
            ))
          : forecastHours?.map((hour) => (
              <ForecastHour key={hour.time_epoch} forecastHour={hour} />
            ))}
      </div>
    </ScrollContainer>
  );
}
