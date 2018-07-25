import axios from 'axios';
import settings from '../settings';
import { requestsHelpers as config } from '../_helpers';

export default function feachWeather(cityName) {
  return axios.get(`?q=${cityName}&appid=${settings.apiWeatherKey}&units=metric`, config.apiWeatherConfig);
}
