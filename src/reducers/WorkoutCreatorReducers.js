import { SELECT_INTENSITY } from "../actions/types";

const initialState = {
  selectIntensityData: {},
};

const WorkoutCreatorReducers = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_INTENSITY:
      return {
        ...state,
        selectIntensityData: action.payload,
      };
    default:
      return state;
  }
};

export default WorkoutCreatorReducers;
