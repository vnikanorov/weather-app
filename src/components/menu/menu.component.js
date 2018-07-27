import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './menu.component.css';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.menuRef = React.createRef();

    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, false);
  }

  handleClickOutside(e) {
    const { closeMenu } = this.props;
    const node = this.menuRef.current;
    if (!node.contains(e.target)) {
      closeMenu();
    }
  }

  render() {
    return (
      <div ref={this.menuRef} className="menu">
        <div className="menu-wrap">
          <div className="menu-title">
            Menu
          </div>
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

export default Menu;
