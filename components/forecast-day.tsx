import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";
import { useSelectedDayStore } from "@/store/selected-day-store";
import { Forecastday } from "@/typings";
import Image from "next/image";

type Props = {
  forecastDay: Forecastday;
};

export default function ForecastDay({ forecastDay }: Props) {
  const selectedDay = useSelectedDayStore((state) => state.selectedDay);
  const setSelectedDay = useSelectedDayStore((state) => state.setSelectedDay);
  const isSelected = forecastDay.date_epoch === selectedDay?.date_epoch;
  const date = new Date(0);

  date.setUTCSeconds(forecastDay.date_epoch);

  return (
    <Card
      className={cn(
        "flex-1 hover:cursor-pointer hover:border-[#a4c2fe] transition-colors min-h-[150px] border",
        isSelected ? "border-[#a4c2fe]" : "border-transparent",
      )}
      onClick={() => setSelectedDay(forecastDay)}
    >
      <CardHeader className="h-full">
        <CardTitle className="flex items-center justify-between">
          {date.toLocaleDateString("uk-UA", {
            weekday: "long",
            day: "numeric",
            month: "long",
          })}
          <Image
            src={`https:${forecastDay.day.condition.icon}`}
            alt="condition icon"
            width={50}
            height={50}
            className="h-[50px]"
          />
        </CardTitle>
        <CardDescription className="h-full flex items-end justify-between">
          {forecastDay.day.condition.text}
          <div className="flex text-right items-end">
            Середня температура
            <span className="text-3xl font-extrabold tracking-tight ml-2">
              {Math.round(forecastDay.day.avgtemp_c)}°
            </span>
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
