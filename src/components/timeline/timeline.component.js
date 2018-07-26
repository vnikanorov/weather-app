import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Timeline = ({ position }) => (
  <div
    className={classNames(
      'timeline',
      { top: position === 'top' },
      { mid: position === 'mid' },
      { bottom: position === 'bottom' },
    )}
  />
);

Timeline.propTypes = {
  position: PropTypes.string.isRequired,
};

export default Timeline;
