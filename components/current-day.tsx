import { Skeleton } from "./ui/skeleton";
import { Current } from "@/typings";

type Props = {
  location: string;
  currentDay: Current | undefined;
  loading: boolean;
};

export default function CurrentDay({ location, currentDay, loading }: Props) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl font-extrabold tracking-tight capitalize">
          {loading ? <Skeleton className="h-[48px] w-[500px]" /> : location}
        </h1>
        <h4 className="text-xl tracking-tight">
          {loading ? (
            <Skeleton className="h-[28px] w-[400px]" />
          ) : (
            currentDay?.condition.text
          )}
        </h4>
      </div>
      <span className="text-9xl font-extrabold tracking-tight">
        {loading ? (
          <Skeleton className="h-[128px] w-[120px]" />
        ) : (
          `${Math.round(currentDay?.temp_c as number)}°`
        )}
      </span>
    </div>
  );
}
