import { THEME } from "./types";

export const getTheme = (themeData) => {
  return {
    type: THEME,
    payload: themeData,
  };
};
