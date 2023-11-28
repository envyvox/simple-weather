import { useDynamicBackgroundStore } from "@/store/dynamic-background-store";

export function updateBackground(
  oldConditionCode: number | undefined,
  newConditionCode: number | undefined
) {
  const dynamicBackgroundEnabled = useDynamicBackgroundStore.getState().enabled;

  document.body.classList.remove(`dynamic-bg-${oldConditionCode}`);

  if (dynamicBackgroundEnabled) {
    document.body.classList.remove("dynamic-bg-default");
    document.body.classList.add(`dynamic-bg-${newConditionCode}`);
  } else {
    document.body.classList.add("dynamic-bg-default");
  }
}
