import { Skeleton } from "./ui/skeleton";
import { Current } from "@/typings";

type Props = {
  locationName: string;
  currentDay: Current | undefined;
  loading: boolean;
};

export default function CurrentDay({
  locationName,
  currentDay,
  loading,
}: Props) {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-5xl font-extrabold tracking-tight">
        {loading ? (
          <Skeleton className="h-[48px] w-[300px] opacity-50" />
        ) : (
          locationName
        )}
      </h1>
      <h4 className="text-xl tracking-tight">
        {loading ? (
          <Skeleton className="h-[28px] w-[300px] opacity-50" />
        ) : (
          currentDay?.condition.text
        )}
      </h4>
      <span className="text-9xl font-extrabold tracking-tight">
        {loading ? (
          <Skeleton className="h-[128px] w-[300px] opacity-50" />
        ) : (
          `${Math.round(currentDay?.temp_c as number)}°`
        )}
      </span>
    </div>
  );
}
