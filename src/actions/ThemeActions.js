import { THEME } from "./types";

export const getTheme = (selectedTheme) => {
  return {
    type: THEME,
    payload: selectedTheme,
  };
};
