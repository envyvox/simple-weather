import { Toggle } from "./ui/toggle";
import { useDynamicBackgroundStore } from "@/store/dynamic-background-store";
import { Zap } from "lucide-react";

export default function DynamicBackgroundToggle() {
  const enabled = useDynamicBackgroundStore((state) => state.enabled);
  const setEnabled = useDynamicBackgroundStore((state) => state.setEnabled);

  return (
    <Toggle
      aria-label="Toggle dynamic background"
      pressed={enabled}
      onPressedChange={(value) => setEnabled(value)}
    >
      <Zap color={enabled ? "#a4c2fe" : undefined} />
      <span className="ml-2">Динамічний фон (бета)</span>
    </Toggle>
  );
}
