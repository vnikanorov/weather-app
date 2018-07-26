import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ location }) => (
  <div className="header">
    <div className="country">
      {/* {location.country_name} */}
    </div>
  </div>
);

Header.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Header;
