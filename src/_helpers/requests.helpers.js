import settings from '../settings';

const apiLocationConfig = {
  baseURL: settings.apiLocationUrl,
};

const apiWeatherConfig = {
  baseURL: settings.apiWeatherUrl,
};

export default {
  apiLocationConfig,
  apiWeatherConfig,
};
