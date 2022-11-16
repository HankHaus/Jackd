import { MUSCLE_GROUPS, CURRENT_CHEST_WORKOUT } from "../actions/types";

const initialState = {
  muscleGroupsData: {},
  currentChestWorkout: {},
};

const WorkoutCreatorReducers = (state = initialState, action) => {
  switch (action.type) {
    case MUSCLE_GROUPS:
      return {
        ...state,
        muscleGroupsData: action.payload,
      };
    case CURRENT_CHEST_WORKOUT:
      return {
        ...state,
        currentChestWorkout: action.payload,
      };
    default:
      return state;
  }
};

export default WorkoutCreatorReducers;
