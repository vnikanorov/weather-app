import { locationConstants } from '../_constants';
import { locationService } from '../_services';
import { weatherActions } from '.';

function fetchLocation() {
  const request = () => ({ type: locationConstants.FETCH_LOCATION_REQUEST });
  const success = payload => ({ type: locationConstants.FETCH_LOCATION_SUCCESS, payload });
  const failure = payload => ({ type: locationConstants.FETCH_LOCATION_FAILURE, payload });

  return (dispatch) => {
    dispatch(request());

    locationService()
      .then(
        (res) => {
          if (res.status === 200) {
            dispatch(success(res.data));
            dispatch(weatherActions.fetchWeather(res.data.city));
          }
        },
        (error) => {
          dispatch(failure(error));
        },
      );
  };
}

export default {
  fetchLocation,
};
