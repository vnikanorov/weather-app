import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './menu.component.css';
import { CSSTransition } from 'react-transition-group';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.menuRef = React.createRef();

    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside(e) {
    const { closeMenu, menuBtnRef } = this.props;
    const menuNode = this.menuRef.current;
    const menuBtnnode = menuBtnRef.current;
    if (!menuNode.contains(e.target) && !menuBtnnode.contains(e.target)) {
      closeMenu();
    }
  }

  render() {
    const { layout, location } = this.props;

    return (
      <CSSTransition
        in={layout.menu}
        classNames="menu"
        timeout={200}
        unmountOnExit
        onEntering={() => {
          document.addEventListener('click', this.handleClickOutside, false);
        }}
        onExiting={() => {
          document.removeEventListener('click', this.handleClickOutside, false);
        }}
      >
        <div
          ref={this.menuRef}
          className="menu"
        >
          <div className="menu-wrap">
            <div className="menu-title">
              Your location:
            </div>
            <div className="menu-text">
              <div className="menu-label">
                Сountry:
              </div>
              <div className="menu-value">
                {location.country_name}
              </div>
            </div>
            <div className="menu-text">
              <div className="menu-label">
                Сity:
              </div>
              <div className="menu-value">
                {location.city}
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    );
  }
}

Menu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
  layout: PropTypes.object.isRequired,
  menuBtnRef: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default Menu;
