import { weatherConstants } from '../_constants';
import { weatherService } from '../_services';

function fetchWeather(cityName) {
  const request = () => ({ type: weatherConstants.FETCH_WEATHER_REQUEST });
  const success = payload => ({ type: weatherConstants.FETCH_WEATHER_SUCCESS, payload });
  const failure = payload => ({ type: weatherConstants.FETCH_WEATHER_FAILURE, payload });

  return (dispatch) => {
    dispatch(request());

    weatherService(cityName)
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
};
