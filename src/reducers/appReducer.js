import { OPEN_MENU, CLOSE_MENU } from '../actions/actionTypes';
const initialState = {
  isScrolling: false,
  openMenu: false
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'START_SCROLL':
      return {
        ...state,
        isScrolling: true
      };
    case 'STOP_SCROLL':
      return {
        ...state,
        isScrolling: false
      };
    case OPEN_MENU:
      return {
        ...state,
        openMenu: true
      };
    case CLOSE_MENU:
      return {
        ...state,
        openMenu: false
      };
    default:
      return state;
  }
}
