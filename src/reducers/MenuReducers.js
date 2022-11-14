import { MENU_TOGGLE } from "../actions/types";

const initialState = {
  menuToggleState: {
    open: false,
  },
};

const MenuReducers = (state = initialState, action) => {
  switch (action.type) {
    case MENU_TOGGLE:
      return {
        ...state,
        menuToggleState: action.payload,
      };
    default:
      return state;
  }
};

export default MenuReducers;
