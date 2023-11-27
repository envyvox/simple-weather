import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Forecasthour } from "@/typings";
import { Droplets } from "lucide-react";
import Image from "next/image";

type Props = {
  forecastHour: Forecasthour;
};

export default function ForecastHour({ forecastHour }: Props) {
  const date = new Date(0);
  date.setUTCSeconds(forecastHour.time_epoch);
  return (
    <Card className="flex-1">
      <CardHeader className="flex items-center">
        <CardTitle className="text-base">
          {forecastHour.time.slice(-5)}
        </CardTitle>
        <CardDescription className="flex flex-col items-center">
          <Image
            src={`https:${forecastHour.condition.icon}`}
            alt="condition icon"
            width={50}
            height={50}
            className="h-[50px]"
          />
          <span className="text-2xl font-extrabold tracking-tight">
            {Math.round(forecastHour.temp_c)}°
          </span>
          <div className="flex gap-2 items-center">
            <Droplets color="#a4c2fe" />
            <span className="text-muted-foreground">
              {Math.round(forecastHour.chance_of_rain)}%
            </span>
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}