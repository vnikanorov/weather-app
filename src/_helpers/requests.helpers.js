import settings from '../settings';

const apiLocationConfig = {
  baseURL: settings.apiLocationUrl,
};

const apiWeatherConfig = {
  baseURL: settings.apiWeatherUrl,
};

const apiWeatherForecastConfig = {
  baseURL: settings.apiWeatherForecastUrl,
};

export default {
  apiLocationConfig,
  apiWeatherConfig,
  apiWeatherForecastConfig,
};
