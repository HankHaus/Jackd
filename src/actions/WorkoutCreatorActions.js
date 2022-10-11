import { MUSCLE_GROUPS } from "./types";

export const getMuscleGroups = (muscleGroupsData) => {
  return {
    type: MUSCLE_GROUPS,
    payload: muscleGroupsData,
  };
};
