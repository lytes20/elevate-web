import { OPEN_MENU, CLOSE_MENU, TOGGLE_MENU } from './actionTypes';

export const openMenuModel = () => {
  return {
    type: OPEN_MENU
  };
};
export const closeMenuModel = () => {
  return {
    type: CLOSE_MENU
  };
};

export const toggleMenu = (value) => {
  return {
    type: TOGGLE_MENU,
    payload: value
  };
};

export const handleIsScrolling = () => ({
  type: 'START_SCROLL'
});

export const handleEndScroll = () => ({
  type: 'STOP_SCROLL'
});
