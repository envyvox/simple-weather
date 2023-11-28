import {
  conditions,
  defaultBgStyleFrom,
  defaultBgStyleTo,
} from "@/lib/conditions";
import { useDynamicBackgroundStore } from "@/store/dynamic-background-store";

export function updateBackground(
  oldConditionCode: number | undefined,
  newConditionCode: number | undefined
) {
  const dynamicBackgroundEnabled = useDynamicBackgroundStore.getState().enabled;
  const oldCondition = conditions.find(
    (condition) => condition.code === oldConditionCode
  );
  const newCondition = conditions.find(
    (condition) => condition.code === newConditionCode
  );

  // remove old background
  document.body.classList.remove(
    oldCondition?.bgStyleFrom ?? defaultBgStyleFrom
  );
  document.body.classList.remove(oldCondition?.bgStyleTo ?? defaultBgStyleTo);

  if (dynamicBackgroundEnabled) {
    // remove default background, since removing old not always mean 'default'
    document.body.classList.remove(defaultBgStyleFrom);
    document.body.classList.remove(defaultBgStyleTo);
    // add new dynamic background
    document.body.classList.add(
      newCondition?.bgStyleFrom ?? defaultBgStyleFrom
    );
    document.body.classList.add(newCondition?.bgStyleTo ?? defaultBgStyleTo);
  } else {
    // add default background
    document.body.classList.add(defaultBgStyleFrom);
    document.body.classList.add(defaultBgStyleTo);
  }
}
