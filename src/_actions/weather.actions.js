import { weatherConstants as type } from '../_constants';
import { weatherService } from '../_services';

function fetchWeather(cityName) {
  const request = () => ({ type: type.FETCH_WEATHER_REQUEST });
  const success = payload => ({ type: type.FETCH_WEATHER_SUCCESS, payload });
  const failure = payload => ({ type: type.FETCH_WEATHER_FAILURE, payload });

  return (dispatch) => {
    dispatch(request());

    weatherService.feachWeather(cityName)
      .then(
        (res) => {
          if (res.status === 200) {
            dispatch(success(res.data));
          }
        },
        (error) => {
          dispatch(failure(error));
        },
      );
  };
}

function fetchWeatherForecast(cityName) {
  const request = () => ({ type: type.FETCH_WEATHER_FORECAST_REQUEST });
  const success = payload => ({ type: type.FETCH_WEATHER_FORECAST_SUCCESS, payload });
  const failure = payload => ({ type: type.FETCH_WEATHER_FORECAST_FAILURE, payload });

  return (dispatch) => {
    dispatch(request());

    weatherService.feachWeatherForecast(cityName)
      .then(
        (res) => {
          if (res.status === 200) {
            dispatch(success(res.data));
          }
        },
        (error) => {
          dispatch(failure(error));
        },
      );
  };
}

function fetchNewWeather(cityName) {
  const request = () => ({ type: type.FETCH_NEW_WEATHER_REQUEST });
  const success = payload => ({ type: type.FETCH_NEW_WEATHER_SUCCESS, payload });
  const failure = payload => ({ type: type.FETCH_NEW_WEATHER_FAILURE, payload });

  return (dispatch) => {
    dispatch(request());

    weatherService.feachWeather(cityName)
      .then(
        (res) => {
          if (res.status === 200) {
            dispatch(success(res.data));
          }
        },
        (error) => {
          dispatch(failure(error));
        },
      );
  };
}

export default {
  fetchWeather,
  fetchWeatherForecast,
  fetchNewWeather,
};
