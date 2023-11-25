export type WeatherData = {
  location: Location;
  current: Current;
  forecast: Forecast;
};

export type Location = {
  /**	Location name*/
  name: string;
  /**	Region or state of the location, if available*/
  region: string;
  /**Location country*/
  country: string;
  /**Latitude in decimal degree*/
  lat: number;
  /**	Longitude in decimal degree*/
  lon: number;
  /**Time zone name*/
  tz_id: string;
  /**	Local date and time in unix time*/
  localtime_epoch: number;
  /**Local date and time*/
  localtime: string;
};

export type Current = {
  /**Local time when the real time data was updated in unix time*/
  last_updated_epoch: number;
  /**Local time when the real time data was updated*/
  last_updated: string;
  /**Temperature in celsius*/
  temp_c: number;
  /**Temperature in fahrenheit*/
  temp_f: number;
  /**
   * Whether to show day condition icon or night icon
   * 1 = Yes 0 = No
   */
  is_day: number;
  /**Condition*/
  condition: Condition;
  /**Wind speed in miles per hour*/
  wind_mph: number;
  /**Wind speed in kilometer per hour*/
  wind_kph: number;
  /**Wind direction in degrees*/
  wind_degree: number;
  /**Wind direction as 16 point compass. e.g.: NSW*/
  wind_dir: string;
  /**Pressure in millibars*/
  pressure_mb: number;
  /**Pressure in inches*/
  pressure_in: number;
  /**Precipitation amount in millimeters*/
  precip_mm: number;
  /**Precipitation amount in inches*/
  precip_in: number;
  /**Humidity as percentage*/
  humidity: number;
  /**Cloud cover as percentage*/
  cloud: number;
  /**Feels like temperature in celsius*/
  feelslike_c: number;
  /**Feels like temperature in fahrenheit*/
  feelslike_f: number;
  /**Visibility in kilometer*/
  vis_km: number;
  /**Visibility in miles*/
  vis_miles: number;
  /**UV Index*/
  uv: number;
  /**Wind gust in miles per hour*/
  gust_mph: number;
  /**Wind gust in kilometer per hour*/
  gust_kph: number;
};

export type Condition = {
  text: string;
  icon: string;
  code: number;
};

export type Forecast = {
  /**Forecast days*/
  forecastday: Forecastday[];
};

export type Forecastday = {
  /**Forecast date*/
  date: string;
  /**Forecast date as unix time*/
  date_epoch: number;
  /**See day element*/
  day: Day;
  /**See astro element*/
  astro: Astro;
  /**See hour element*/
  hour: Hour[];
};

export type Day = {
  /**Maximum temperature in celsius for the day*/
  maxtemp_c: number;
  /**Maximum temperature in fahrenheit for the day*/
  maxtemp_f: number;
  /**Minimum temperature in celsius for the day*/
  mintemp_c: number;
  /**Minimum temperature in fahrenheit for the day*/
  mintemp_f: number;
  /**Average temperature in celsius for the day*/
  avgtemp_c: number;
  /**Average temperature in fahrenheit for the day*/
  avgtemp_f: number;
  /**Maximum wind speed in miles per hour*/
  maxwind_mph: number;
  /**Maximum wind speed in kilometer per hour*/
  maxwind_kph: number;
  /**Total precipitation in milimeter*/
  totalprecip_mm: number;
  /**Total precipitation in inches*/
  totalprecip_in: number;
  /**Total snow in cm*/
  totalsnow_cm: number;
  /**Average visibility in kilometer*/
  avgvis_km: number;
  /**Average visibility in miles*/
  avgvis_miles: number;
  /**Average humidity as percentage*/
  avghumidity: number;
  /**
   * Will it will rain or not
   * 1 = Yes 0 = No
   */
  daily_will_it_rain: number;
  /**Chance of rain as percentage*/
  daily_chance_of_rain: number;
  /**
   * Will it snow or not
   * 1 = Yes 0 = No
   */
  daily_will_it_snow: number;
  /**Chance of snow as percentage*/
  daily_chance_of_snow: number;
  /**Weather condition*/
  condition: Condition;
  /**UV Index (decimal)*/
  uv: number;
};

export type Astro = {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: number;
  is_moon_up: number;
  is_sun_up: number;
};

export type Hour = {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
  vis_km: number;
  vis_miles: number;
  gust_mph: number;
  gust_kph: number;
  uv: number;
};

export type boolString = "yes" | "no";
