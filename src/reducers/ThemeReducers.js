import { THEME } from "../actions/types";

const initialState = {
  themeData: {
    BLACK: "#000000",
    SHADOW: "#7B7A72",
    WHITE: "#fff",
    TEXT_BURGUNDY: "#34000E",
    BACKGROUND: ["#A2D2FF", "#FEF9EF"],
    DARK_ORANGE: "#ff865e",
    LIGHT_ORANGE: "#FFA081",
    SELECTED_BLEND: ["#FE96FF", "#FF0083"],
  },
};

const ThemeReducers = (state = initialState, action) => {
  switch (action.type) {
    case THEME:
      return {
        ...state,
        themeData: action.payload,
      };
    default:
      return state;
  }
};

export default ThemeReducers;
