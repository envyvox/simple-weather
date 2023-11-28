import { Card, CardContent } from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import { Day } from "@/typings";

type Props = {
  day: Day | undefined; 
  loading: boolean;
};

export default function Details({ day, loading }: Props) {
  return loading ? (
    <Skeleton className="h-[264px]"></Skeleton>
  ) : (
    <Card>
      <CardContent className="pt-[24px]">
        Максимальна температура {Math.round(day?.maxtemp_c as number)}°
        <br />
        Мінімальна температура {Math.round(day?.mintemp_c as number)}°
        <br />
        Максимальна швидкість вітру {Math.round(day?.maxwind_kph as number)} км/г
        <br />
        Загальна кількість опадів {Math.round(day?.totalprecip_mm as number)} мм
        <br />
        Загальна кількість снігу {Math.round(day?.totalsnow_cm as number)} см
        <br />
        Середня видимість {Math.round(day?.avgvis_km as number)} км
        <br />
        Середня вологість {Math.round(day?.avghumidity as number)}%
        <br />
        Можливість дощу {Math.round(day?.daily_chance_of_rain as number)}%
        <br />
        Можливість снігу {Math.round(day?.daily_chance_of_snow as number)}%
      </CardContent>
    </Card>
  );
} 
