import { layoutConstants as type } from '../_constants';

const openMenu = () => ({ type: type.OPEN_MENU });
const closeMenu = () => ({ type: type.CLOSE_MENU });
const toggleMenu = () => ({ type: type.TOGGLE_MENU });

export default {
  openMenu,
  closeMenu,
  toggleMenu,
};
