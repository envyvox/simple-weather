import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Forecastday } from "@/typings";
import Image from "next/image";

type Props = {
  forecastDay: Forecastday;
};

export default function ForecastDay({ forecastDay }: Props) {
  const date = new Date(0);
  date.setUTCSeconds(forecastDay.date_epoch);

  return (
    <Card className="flex-1">
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
