import { weatherConstants } from '../_constants';

const initialState = {
  error: null,
  isFetching: true,
  data: {},
};

export default function WeatherReducer(state = initialState, action) {
  switch (action.type) {
    case weatherConstants.FETCH_WEATHER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case weatherConstants.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case weatherConstants.FETCH_WEATHER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
