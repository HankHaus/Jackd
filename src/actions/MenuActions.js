import { MENU_TOGGLE } from "./types";

export const getMenuToggleStatus = (menuToggleState) => {
  return {
    type: MENU_TOGGLE,
    payload: menuToggleState,
  };
};
