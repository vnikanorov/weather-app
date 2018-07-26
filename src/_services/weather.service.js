import axios from 'axios';
import settings from '../settings';
import { requestsHelpers as config } from '../_helpers';

function feachWeather(cityName) {
  return axios.get(`?q=${cityName}&appid=${settings.apiWeatherKey}&units=metric`, config.apiWeatherConfig);
}

function feachWeatherForecast(cityName) {
  return axios.get(`?q=${cityName}&appid=${settings.apiWeatherKey}&units=metric`, config.apiWeatherForecastConfig);
}

export default {
  feachWeather,
  feachWeatherForecast,
};
