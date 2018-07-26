import React from 'react';
import PropTypes from 'prop-types';
import './currentWeather.conmponent.css';

import { WeatherPoint } from '..';

const CurrentWeather = ({ weather }) => (
  <div className="current-weather">
    <div className="weather-img">
      <WeatherPoint size="big" />
    </div>
    <div className="weather-current">
      <div className="weather-city">
        {weather.name}
      </div>
      <div className="weather-info-main">
        {weather.weather[0].main}
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
};

export default CurrentWeather;
