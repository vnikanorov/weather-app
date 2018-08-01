import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './weatherInformation.component.css';

import { utils } from '../../_helpers';
import { ChartWeather } from '..';

class WeatherInformation extends Component {
  constructor(props) {
    super(props);

    this.getPressureList = this.getPressureList.bind(this);
    this.getHumidityList = this.getHumidityList.bind(this);
    this.getWindSpeedList = this.getWindSpeedList.bind(this);
  }

  getPressureList() {
    const { weatherForecast } = this.props;

    return weatherForecast.list.map(item => (item.main.pressure));
  }

  getHumidityList() {
    const { weatherForecast } = this.props;

    return weatherForecast.list.map(item => (item.main.humidity));
  }

  getWindSpeedList() {
    const { weatherForecast } = this.props;

    return weatherForecast.list.map(item => (item.wind.speed));
  }

  render() {
    const {
      main,
      wind,
      sys,
      isFetchingForecast,
    } = this.props;

    return (
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
        {!isFetchingForecast && (
          <ChartWeather data={this.getPressureList()} />
        )}
        <div className="weather-information-item">
          <span>
            Humidity:
          </span>
          {main.humidity}
          <span className="weather-info-units">
            %
          </span>
        </div>
        {!isFetchingForecast && (
          <ChartWeather data={this.getHumidityList()} />
        )}
        <div className="weather-information-item">
          <span>
          Wind:
          </span>
          {wind.speed}
          <span className="weather-info-units">
            m/s
          </span>
        </div>
        {!isFetchingForecast && (
          <ChartWeather data={this.getWindSpeedList()} />
        )}
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
  }
}

WeatherInformation.propTypes = {
  main: PropTypes.object.isRequired,
  wind: PropTypes.object.isRequired,
  sys: PropTypes.object.isRequired,
  weatherForecast: PropTypes.object.isRequired,
  isFetchingForecast: PropTypes.bool.isRequired,
};

export default WeatherInformation;
