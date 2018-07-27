import { layoutConstants } from '../_constants';

const initialState = {
  menu: false,
};

export default function LayoutReducer(state = initialState, action) {
  switch (action.type) {
    case layoutConstants.OPEN_MENU:
      return {
        ...state,
        menu: true,
      };
    case layoutConstants.CLOSE_MENU:
      return {
        ...state,
        menu: false,
      };
    default:
      return state;
  }
}
