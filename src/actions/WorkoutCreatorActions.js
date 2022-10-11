import { SELECT_INTENSITY } from "./types";

export const getSelectIntensity = (selectIntensityData) => {
  return {
    type: SELECT_INTENSITY,
    payload: selectIntensityData,
  };
};
