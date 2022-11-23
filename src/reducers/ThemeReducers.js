import { THEME } from "../actions/types";

const initialState = {
  selectedTheme: {
    theme: "light",
    BLACK: "#000000",
    SHADOW_PRIMARY: "#7B7A72",
    BEHIND_MODAL_BLEND_PRIMARY: ["#000000", "transparent"],
    MODAL_BACKGROUND_BLEND_PRIMARY: ["#E3E7EF", "#B891A9"],
    BACKGROUND_BLEND_PRIMARY: ["#A2D2FF", "#FEF9EF"],
    BUTTON_BLEND_PRIMARY: ["#ff865e", "#FFA081"],
    TEXT_PRIMARY: "#000000",
    GET_STARTED_BUTTON_BORDER_BLEND_PRIMARY: ["#31CF0A", "#C7F0BD"],
    GET_STARTED_BUTTON_BLEND_PRIMARY: ["#24AB03", "#197502"],
    OPTION_DOT_BORDER_INACTIVE_PRIMARY: "#000",
    OPTION_DOT_INACTIVE_PRIMARY: "#3B3B3C",
    OPTION_DOT_BORDER_ACTIVE_PRIMARY: "#4A032E",
    OPTION_DOT_ACTIVE_PRIMARY: "#EF2CA4",
    SELECTED_OPTION_DOT_BLEND_PRIMARY: ["#FF0083", "#FE96FF"],
    FORTY_FIVES_PLATE: "#00FF46",
    TWENTY_FIVES_PLATE: "#1B00FF",
    TENS_PLATE: "#FFEC00",
    FIVES_PLATE: "#538668",
    TWO_AND_A_HALVES_PLATE: "#FF4141",
    INPUT_BLEND_PRIMARY: ["#FFFFFF", "#E0E0E0"],
    WHITE: "#fff",
    TEXT_BURGUNDY: "#34000E",
    BUTTON_TEXT_PRIMARY: "#000000",
    PR_CARD_BLEND_PRIMARY: ["#FFFFFF", "#E0E0E0"],
    MODAL_TOP_BAR: "#000000",
  },
};

const ThemeReducers = (state = initialState, action) => {
  switch (action.type) {
    case THEME:
      return {
        ...state,
        selectedTheme: action.payload,
      };
    default:
      return state;
  }
};

export default ThemeReducers;
