import { PER_SIDE_TOTAL_TOGGLE } from "../actions/types";

const initialState = {
  barbellToggleSelection: {
    perSide: true,
  },
};

const BarbellReducers = (state = initialState, action) => {
  switch (action.type) {
    case PER_SIDE_TOTAL_TOGGLE:
      return {
        ...state,
        barbellToggleSelection: action.payload,
      };
    default:
      return state;
  }
};

export default BarbellReducers;
