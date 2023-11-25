import { Forecastday } from "@/typings";

type Props = {
  forecastDay: Forecastday;
};

export default function ForecastDay({ forecastDay }: Props) {
  const date = new Date(0);
  date.setUTCSeconds(forecastDay.date_epoch);

  return (
    <div className="inline-flex">
      {date.toLocaleDateString("en-US", { day: "2-digit", month: "long" })}
      <br />
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
    </div>
  );
}
