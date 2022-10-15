import { THEME } from "../actions/types";

const initialState = {
  themeData: {
    BLACK: "#000000",
    SHADOW: "#7B7A72",
    BEHIND_MODAL_BLEND_PRIMARY: ["#000000", "transparent"],
    MODAL_BACKGROUND_BLEND_PRIMARY: ["#6C464F", "#B891A9"],
    BACKGROUND_BLEND_PRIMARY: ["#A2D2FF", "#FEF9EF"],
    BUTTON_BLEND_PRIMARY: ["#ff865e", "#FFA081"],
    TEXT_PRIMARY: "#000000",
    GET_STARTED_BUTTON_BORDER_BLEND_PRIMARY: ["#31CF0A", "#C7F0BD"],
    GET_STARTED_BUTTON_BLEND_PRIMARY: ["#24AB03", "#197502"],
    OPTION_DOT_BORDER_INACTIVE_PRIMARY: "#76B486",
    OPTION_DOT_INACTIVE_PRIMARY: "#9EFFB7",
    OPTION_DOT_BORDER_ACTIVE_PRIMARY: "#FF00B7",
    OPTION_DOT_ACTIVE_PRIMARY: "#F8FF4C",
    SELECTED_OPTION_DOT_BLEND_PRIMARY: ["#FE96FF", "#FF0083"],
    FORTY_FIVES_PLATE: "#00FF46",
    TWENTY_FIVES_PLATE: "#1B00FF",
    TENS_PLATE: "#FFEC00",
    FIVES_PLATE: "#538668",
    TWO_AND_A_HALVES_PLATE: "#FF4141",

    WHITE: "#fff",
    TEXT_BURGUNDY: "#34000E",
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
