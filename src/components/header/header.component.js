import React from 'react';
import PropTypes from 'prop-types';
import './header.component.css';
import { Menu } from '..';

const Header = ({ location }) => (
  <div className="header">
    <div className="header-wrap">
      <div className="header-title">
        Wether App
      </div>
      <div className="btn-menu">
        <span />
        <span />
        <span />
      </div>
    </div>
    <Menu />
  </div>
);

Header.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Header;
