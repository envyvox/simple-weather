import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";
import { Forecastday } from "@/typings";
import Image from "next/image";

type Props = {
  forecastDay: Forecastday;
  selectedDay: Forecastday | undefined;
  setSelectedDay: React.Dispatch<React.SetStateAction<Forecastday | undefined>>;
};

export default function ForecastDay({
  forecastDay,
  selectedDay,
  setSelectedDay,
}: Props) {
  const isSelected = forecastDay.date_epoch === selectedDay?.date_epoch;
  const date = new Date(0);
  date.setUTCSeconds(forecastDay.date_epoch);

  return (
    <Card
      className={cn(
        "flex-1 hover:cursor-pointer hover:border-[#a4c2fe] transition-colors",
        isSelected ? "border border-[#a4c2fe]" : "border border-transparent"
      )}
      onClick={() => setSelectedDay(forecastDay)}
    >
      <CardHeader>
        <CardTitle>
          {date.toLocaleDateString("uk-UA", {
            weekday: "long",
            day: "numeric",
            month: "long",
          })}
        </CardTitle>
        <CardDescription className="flex justify-between items-baseline">
          <div>
            <Image
              src={`https:${forecastDay.day.condition.icon}`}
              alt="condition icon"
              width={50}
              height={50}
              className="h-[50px]"
            />
            {forecastDay.day.condition.text}
          </div>
          <div>
            Середня температура {""}
            <span className="text-3xl font-extrabold tracking-tight">
              {Math.round(forecastDay.day.avgtemp_c)}°
            </span>
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
