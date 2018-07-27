import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './forecastItem.component.css';

import { WeatherPoint, Timeline } from '..';

class ForecastItem extends Component {
  getTime(timestamp) {
    return moment.unix(timestamp).format('HH:mm');
  }

  getIntTemp(temp) {
    const str = String(temp);
    return str.split('.')[0];
  }

  render() {
    const { weather } = this.props;

    return (
      <div className="forecast-item">
        <div className="forecast-time">
          {this.getTime(weather.dt)}
        </div>
        <div className="forecast-icon">
          <WeatherPoint size="small" />
        </div>
        <div className="forecast-info">
          <div className="info-weather">
            {weather.weather[0].main}
          </div>
          <div className="info-temp">
            {this.getIntTemp(weather.main.temp)}
            <span>
              &deg;C
            </span>
          </div>
          <div className="info-weather-description">
            {weather.weather[0].description}
          </div>
        </div>
        <Timeline position="mid" />
      </div>
    );
  }
}

ForecastItem.propTypes = {
  weather: PropTypes.object.isRequired,
};

export default ForecastItem;
