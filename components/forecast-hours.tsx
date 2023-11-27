import ForecastHour from "./forecast-hour";
import { Skeleton } from "./ui/skeleton";
import { Draggable } from "@/components/draggable";
import { Forecasthour } from "@/typings";
import { useRef } from "react";

type Props = {
  forecastHours: Forecasthour[] | undefined;
  loading: boolean;
};

export default function ForecastHours({ forecastHours, loading }: Props) {
  const array = Array.from({ length: 24 }, (_, index) => index);
  const ref = useRef(null);

  return (
    <Draggable innerRef={ref} rootClass={"drag"}>
      <div className="flex flex-row overflow-x-hidden w-full gap-5" ref={ref}>
        {loading
          ? array.map((x) => (
              <Skeleton key={x} className="min-w-[100px] h-[185px]" />
            ))
          : forecastHours?.map((hour) => (
              <ForecastHour key={hour.time_epoch} forecastHour={hour} />
            ))}
      </div>
    </Draggable>
  );
}
