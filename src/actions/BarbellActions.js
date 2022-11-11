import { PER_SIDE_TOTAL_TOGGLE } from "./types";

export const getBarbellToggleStatus = (barbellToggleSelection) => {
  return {
    type: PER_SIDE_TOTAL_TOGGLE,
    payload: barbellToggleSelection,
  };
};
