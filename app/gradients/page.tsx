import { conditions } from "@/lib/conditions";

export default function GradientsPage() {
  return conditions.map((condition) => (
    <div
      key={condition.code}
      className={`min-h-screen flex items-center justify-center bg-gradient-to-bl dynamic-bg-${condition.code}`}
    >
      <h1 className="text-5xl font-extrabold tracking-tight">
        {condition.code} ({condition.day})
      </h1>
    </div>
  ));
}
