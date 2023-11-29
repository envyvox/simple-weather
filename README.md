# Simple Weather
An open source application build using [nextjs](https://nextjs.org/), [shadcn/ui](https://ui.shadcn.com/), [zustand](https://github.com/pmndrs/zustand) and [tailwindcss](https://tailwindcss.com/).

Explore the weather forecast for Ukrainian cities over the next 3 days. Simple and user-friendly website, without unnecessary buttons, ads, and distractions.

![screencapture-simple-weather-envyvox-vercel-app-2023-11-29-22_49_44](https://github.com/envyvox/simple-weather/assets/6567597/3b995f5f-3177-4948-b505-034ae4bb322f)

## Features
- 3 day forecast.
- Hourly forecast navigation using horizontal scrolling with a simple left mouse button hold.
- (beta) Toggleable dynamic background that changes based on weather conditions.

## Running Locally
1. Install dependencies
```sh
npm install
```

2. Create `.env.local`
```
WEATHER_API_URL=http://api.weatherapi.com/v1
WEATHER_API_KEY=YOUR_API_KEY
```
You can get an API key by registering at https://www.weatherapi.com/, there is a free plan there.
> Despite the fact that they ask to add a mention of their service on the free plan, I basically did not do this due to the fact that some Ukrainian cities are displayed as russian ones. Slava Ukraini.

3. Start the development server
```sh
npm run dev
```

## License

Licensed under the [MIT license](https://github.com/envyvox/simple-weather/blob/master/LICENSE).
