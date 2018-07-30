import { layoutConstants as type } from '../_constants';

const initialState = {
  menu: false,
};

export default function LayoutReducer(state = initialState, action) {
  switch (action.type) {
    case type.OPEN_MENU:
      return {
        ...state,
        menu: true,
      };
    case type.CLOSE_MENU:
      return {
        ...state,
        menu: false,
      };
    default:
      return state;
  }
}
