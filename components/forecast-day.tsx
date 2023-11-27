import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
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
            day: "numeric",
            month: "long",
          })}
        </CardTitle>
        <CardDescription>
          <Image
            src={`https:${forecastDay.day.condition.icon}`}
            alt="condition icon"
            width={50}
            height={50}
            className="h-[50px]"
          />
          {forecastDay.day.condition.text}
        </CardDescription>
      </CardHeader>
      <CardContent>
        Min {Math.round(forecastDay.day.mintemp_c)}
        <br />
        Max {Math.round(forecastDay.day.maxtemp_c)}
        <br />
        Wind, m/h {Math.round(forecastDay.day.maxwind_mph)}
        <br />
        Chance of rain {Math.round(forecastDay.day.daily_chance_of_rain)}%
        <br />
        Chance of snow {Math.round(forecastDay.day.daily_chance_of_snow)}%
        <br />
        Average humidity {Math.round(forecastDay.day.avghumidity)}%
      </CardContent>
    </Card>
  );
}
