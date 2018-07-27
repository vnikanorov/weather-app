import React from 'react';
import PropTypes from 'prop-types';
import './header.component.css';

const Header = ({ location }) => (
  <div className="header">
    <div className="country">
      <div className="header-title">
        Wether App:
        {location.country_name}
      </div>
      <div className="btn-menu">
        <span />
        <span />
        <span />
      </div>
    </div>
  </div>
);

Header.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Header;
