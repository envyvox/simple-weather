import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import { useLoadingStore, useSelectedDayStore } from "@/store/store";

export default function Details() {
  const loading = useLoadingStore((state) => state.loading);
  const selectedDay = useSelectedDayStore((state) => state.selectedDay);

  return (
    <div className="flex gap-5 flex-wrap">
      {loading ? (
        <>
          <Skeleton className="flex-1 h-[140px]" />
          <Skeleton className="flex-1 h-[140px]" />
          <Skeleton className="flex-1 h-[140px]" />
          <Skeleton className="flex-1 h-[140px]" />
          <Skeleton className="flex-1 h-[140px]" />
          <Skeleton className="flex-1 h-[140px]" />
          <Skeleton className="flex-1 h-[140px]" />
          <Skeleton className="flex-1 h-[140px]" />
          <Skeleton className="flex-1 h-[140px]" />
        </>
      ) : (
        <>
          <Card className="flex flex-col flex-1 justify-center">
            <CardHeader>
              <CardTitle className="text-sm text-center">
                Макс. температура
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg font-medium text-center">
              {Math.round(selectedDay?.day.maxtemp_c as number)}°
            </CardContent>
          </Card>
          <Card className="flex flex-col flex-1 justify-center">
            <CardHeader>
              <CardTitle className="text-sm text-center">
                Мін. температура
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg font-medium text-center">
              {Math.round(selectedDay?.day.mintemp_c as number)}°
            </CardContent>
          </Card>
          <Card className="flex flex-col flex-1 justify-center">
            <CardHeader>
              <CardTitle className="text-sm text-center">
                Швидкість вітру
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg font-medium text-center">
              {Math.round(selectedDay?.day.maxwind_kph as number)} км/г
            </CardContent>
          </Card>
          <Card className="flex flex-col flex-1 justify-center">
            <CardHeader>
              <CardTitle className="text-sm text-center">
                Кількість опадів
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg font-medium text-center">
              {Math.round(selectedDay?.day.totalprecip_mm as number)} мм
            </CardContent>
          </Card>
          <Card className="flex flex-col flex-1 justify-center">
            <CardHeader>
              <CardTitle className="text-sm text-center">
                Кількість снігу
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg font-medium text-center">
              {Math.round(selectedDay?.day.totalsnow_cm as number)} см
            </CardContent>
          </Card>
          <Card className="flex flex-col flex-1 justify-center">
            <CardHeader>
              <CardTitle className="text-sm text-center">
                Середня видимість
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg font-medium text-center">
              {Math.round(selectedDay?.day.avgvis_km as number)} км
            </CardContent>
          </Card>
          <Card className="flex flex-col flex-1 justify-center">
            <CardHeader>
              <CardTitle className="text-sm text-center">
                Середня вологість
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg font-medium text-center">
              {Math.round(selectedDay?.day.avghumidity as number)}%
            </CardContent>
          </Card>
          <Card className="flex flex-col flex-1 justify-center">
            <CardHeader>
              <CardTitle className="text-sm text-center">
                Можливість дощу
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg font-medium text-center">
              {Math.round(selectedDay?.day.daily_chance_of_rain as number)}%
            </CardContent>
          </Card>
          <Card className="flex flex-col flex-1 justify-center">
            <CardHeader>
              <CardTitle className="text-sm text-center">
                Можливість снігу
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg font-medium text-center">
              {Math.round(selectedDay?.day.daily_chance_of_snow as number)}%
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
