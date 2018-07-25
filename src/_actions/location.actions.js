import { locationConstants } from '../_constants';
import { LocationService } from '../_services';

function fetchLocation() {
  const request = () => ({ type: locationConstants.FETCH_LOCATION_REQUEST });
  const success = payload => ({ type: locationConstants.FETCH_LOCATION_SUCCESS, payload });
  const failure = payload => ({ type: locationConstants.FETCH_LOCATION_FAILURE, payload });

  return (dispatch) => {
    dispatch(request());

    LocationService()
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
  fetchLocation,
};
