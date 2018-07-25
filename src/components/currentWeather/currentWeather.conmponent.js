import React from 'react';
import './currentWeather.conmponent.css';

const CurrentWeather = ({ weather, location }) => (
  <div className="current-weather">
    <div className="weather-img"></div>
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

export default CurrentWeather;
