import { MUSCLE_GROUPS } from "../actions/types";

const initialState = {
  muscleGroupsData: {},
};

const WorkoutCreatorReducers = (state = initialState, action) => {
  switch (action.type) {
    case MUSCLE_GROUPS:
      return {
        ...state,
        muscleGroupsData: action.payload,
      };
    default:
      return state;
  }
};

export default WorkoutCreatorReducers;
