import { WeatherData, boolString } from "@/typings";


const apiUrl = process.env.WEATHER_API_URL as string;
const apiKey = process.env.WEATHER_API_KEY as string;

/**
 * Get current weather data
 * @param location Location
 * @param aqi Get air quality data. Default value - no
 */
export async function getCurrentWeather(
  location: string = "Kyiv",
  aqi: boolString = "no"
): Promise<WeatherData> {
  const res = await fetch(
    `${apiUrl}/current.json?key=${apiKey}&q=${location}&aqi=${aqi}`,
    {
      next: { revalidate: 600 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch weather data");
  }

  return res.json();
}

/**
 * Get forecast weather data
 * @param location Location
 * @param days Number of days of weather forecast. Value ranges from 1 to 10. Default value - 7
 * @param aqi Get air quality data. Default value - no
 * @param alerts Get weather alert data. Default value - no
 */
export async function getForecastWeather(
  location: string = "Kyiv",
  days: number = 7,
  aqi: boolString = "no",
  alerts: boolString = "no"
): Promise<WeatherData> {
  const res = await fetch(
    `${apiUrl}/forecast.json?key=${apiKey}&q=${location}&days=${days}&aqi=${aqi}&alerts=${alerts}`,
    {
      next: { revalidate: 600 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch weather data");
  }

  return res.json();
}