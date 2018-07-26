import React from 'react';
import PropTypes from 'prop-types';
import './currentWeather.conmponent.css';

import { WeatherPoint } from '..';

const CurrentWeather = ({ weather, location }) => (
  <div className="current-weather">
    <div className="weather-img">
      <WeatherPoint />
    </div>
    <div className="weather-info">
      <div className="weather-country">
        {location.country_name}
      </div>
      <div className="weather-city">
        {location.city}
      </div>
      <div className="weather-main">
        <div className="weather-temp">
          {weather.main.temp}
          <span>
            &deg;C
          </span>
        </div>
      </div>
    </div>
  </div>
);

CurrentWeather.propTypes = {
  weather: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default CurrentWeather;
