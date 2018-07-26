import React from 'react';
import PropTypes from 'prop-types';
import './wetherPoint.component.css';

const WeatherPoint = ({ size }) => (
  <div className={"weather-point " + (size === 'small' ? 'small' : 'big')}>
    <div className="third-circle" />
    <div className="second-circle" />
    <div className="first-circle" />
  </div>
);

WeatherPoint.propTypes = {
  size: PropTypes.string.isRequired,
};

export default WeatherPoint;
