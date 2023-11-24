import { getCurrentWeather } from "@/lib/weather";

export default async function Home() {
  const data = await getCurrentWeather();
  return (
    <main className="flex flex-col p-24 space-y-2">
      <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight">
        {data.location.name}
      </h1>
      <h4 className="scroll-m-20 text-xl tracking-tight">
        {data.current.condition.text}
      </h4>
      <span className="text-9xl font-extrabold tracking-tight">
        {Math.round(data.current.temp_c)}°
      </span>
    </main>
  );
}
