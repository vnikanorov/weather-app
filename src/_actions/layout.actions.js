import { layoutConstants } from '../_constants';

const openMenu = () => ({ type: layoutConstants.OPEN_MENU });
const closeMenu = () => ({ type: layoutConstants.CLOSE_MENU });

export default {
  openMenu,
  closeMenu,
};
