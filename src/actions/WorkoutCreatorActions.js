import { MUSCLE_GROUPS, CURRENT_CHEST_WORKOUT } from "./types";

export const getMuscleGroups = (muscleGroupsData) => {
  return {
    type: MUSCLE_GROUPS,
    payload: muscleGroupsData,
  };
};
export const getCurrentChestWorkout = (currentChestWorkout) => {
  return {
    type: CURRENT_CHEST_WORKOUT,
    payload: currentChestWorkout,
  };
};
