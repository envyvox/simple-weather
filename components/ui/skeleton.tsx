import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-background/20 backdrop-blur supports-[backdrop-filter]:bg-background/20",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
