import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './wetherPoint.component.css';

const WeatherPoint = ({ size }) => (
  <div className={classNames('weather-point',
    { small: size === 'small' },
    { big: size === 'big' })}
  >
    <div className="third-circle" />
    <div className="second-circle" />
    <div className="first-circle" />
  </div>
);

WeatherPoint.propTypes = {
  size: PropTypes.string.isRequired,
};

export default WeatherPoint;
