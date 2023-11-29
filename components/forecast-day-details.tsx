import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import { useLoadingStore } from "@/store/loading-store";
import { useSelectedDayStore } from "@/store/selected-day-store";

export default function Details() {
  const loading = useLoadingStore((state) => state.loading);
  const selectedDay = useSelectedDayStore((state) => state.selectedDay);

  return (
    <div className="flex flex-wrap gap-5">
      {loading ? (
        <>
          <Skeleton className="h-[140px] flex-1" />
          <Skeleton className="h-[140px] flex-1" />
          <Skeleton className="h-[140px] flex-1" />
          <Skeleton className="h-[140px] flex-1" />
          <Skeleton className="h-[140px] flex-1" />
          <Skeleton className="h-[140px] flex-1" />
          <Skeleton className="h-[140px] flex-1" />
          <Skeleton className="h-[140px] flex-1" />
          <Skeleton className="h-[140px] flex-1" />
        </>
      ) : (
        <>
          <Card className="flex flex-1 flex-col justify-center">
            <CardHeader>
              <CardTitle className="text-center text-sm">
                Макс. температура
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-lg font-medium">
              {Math.round(selectedDay?.day.maxtemp_c as number)}°
            </CardContent>
          </Card>
          <Card className="flex flex-1 flex-col justify-center">
            <CardHeader>
              <CardTitle className="text-center text-sm">
                Мін. температура
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-lg font-medium">
              {Math.round(selectedDay?.day.mintemp_c as number)}°
            </CardContent>
          </Card>
          <Card className="flex flex-1 flex-col justify-center">
            <CardHeader>
              <CardTitle className="text-center text-sm">
                Швидкість вітру
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-lg font-medium">
              {Math.round(selectedDay?.day.maxwind_kph as number)} км/г
            </CardContent>
          </Card>
          <Card className="flex flex-1 flex-col justify-center">
            <CardHeader>
              <CardTitle className="text-center text-sm">
                Кількість опадів
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-lg font-medium">
              {Math.round(selectedDay?.day.totalprecip_mm as number)} мм
            </CardContent>
          </Card>
          <Card className="flex flex-1 flex-col justify-center">
            <CardHeader>
              <CardTitle className="text-center text-sm">
                Кількість снігу
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-lg font-medium">
              {Math.round(selectedDay?.day.totalsnow_cm as number)} см
            </CardContent>
          </Card>
          <Card className="flex flex-1 flex-col justify-center">
            <CardHeader>
              <CardTitle className="text-center text-sm">
                Середня видимість
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-lg font-medium">
              {Math.round(selectedDay?.day.avgvis_km as number)} км
            </CardContent>
          </Card>
          <Card className="flex flex-1 flex-col justify-center">
            <CardHeader>
              <CardTitle className="text-center text-sm">
                Середня вологість
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-lg font-medium">
              {Math.round(selectedDay?.day.avghumidity as number)}%
            </CardContent>
          </Card>
          <Card className="flex flex-1 flex-col justify-center">
            <CardHeader>
              <CardTitle className="text-center text-sm">
                Можливість дощу
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-lg font-medium">
              {Math.round(selectedDay?.day.daily_chance_of_rain as number)}%
            </CardContent>
          </Card>
          <Card className="flex flex-1 flex-col justify-center">
            <CardHeader>
              <CardTitle className="text-center text-sm">
                Можливість снігу
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-lg font-medium">
              {Math.round(selectedDay?.day.daily_chance_of_snow as number)}%
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
