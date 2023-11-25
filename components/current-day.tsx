import { Current } from "@/typings";

type Props = {
  locationName: string;
  currentDay: Current;
};

export default function CurrentDay({ locationName, currentDay }: Props) {
  return (
    <>
      <h1 className="text-5xl font-extrabold tracking-tight">{locationName}</h1>
      <h4 className="text-xl tracking-tight">{currentDay.condition.text}</h4>
      <span className="text-9xl font-extrabold tracking-tight">
        {Math.round(currentDay.temp_c)}°
      </span>
    </>
  );
}
