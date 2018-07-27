import { weatherConstants } from '../_constants';

const initialState = {
  error: null,
  errorForecast: null,
  isFetching: true,
  isFetchingForecast: true,
  data: {},
  dataForecast: {},
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
    case weatherConstants.FETCH_WEATHER_FORECAST_REQUEST:
      return {
        ...state,
        isFetchingForecast: true,
      };
    case weatherConstants.FETCH_WEATHER_FORECAST_SUCCESS:
      return {
        ...state,
        isFetchingForecast: false,
        dataForecast: action.payload,
      };
    case weatherConstants.FETCH_WEATHER_FORECAST_FAILURE:
      return {
        ...state,
        isFetchingForecast: false,
        errorForecast: action.payload,
      };
    default:
      return state;
  }
}
