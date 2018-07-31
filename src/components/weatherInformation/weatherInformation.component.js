import React from 'react';
import PropTypes from 'prop-types';
import './weatherInformation.component.css';

import { utils } from '../../_helpers';

const WeatherInformation = ({ main, wind, sys }) => (
  <div className="weather-information">
    <div className="weather-information-item">
      <span>
        Pressure:
      </span>
      {main.pressure}
      <span className="weather-info-units">
        hpa
      </span>
    </div>
    <div className="weather-information-item">
      <span>
        Humidity:
      </span>
      {main.humidity}
      <span className="weather-info-units">
        %
      </span>
    </div>
    <div className="weather-information-item">
      <span>
      Max temp:
      </span>
      {main.temp_max}
      &deg;C
    </div>
    <div className="weather-information-item">
      <span>
      Min temp:
      </span>
      {main.temp_min}
      &deg;C
    </div>
    <div className="weather-information-item">
      <span>
      Wind:
      </span>
      {wind.speed}
      <span className="weather-info-units">
        m/s
      </span>
    </div>
    <div className="weather-information-item">
      <span>
      Sunrise:
      </span>
      {utils.timestampToTime(sys.sunrise)}
    </div>
    <div className="weather-information-item">
      <span>
      Sunset:
      </span>
      {utils.timestampToTime(sys.sunset)}
    </div>
  </div>
);

WeatherInformation.propTypes = {
  main: PropTypes.object.isRequired,
  wind: PropTypes.object.isRequired,
  sys: PropTypes.object.isRequired,
};

export default WeatherInformation;
