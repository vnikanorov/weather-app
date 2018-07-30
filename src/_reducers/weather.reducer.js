import { weatherConstants as type } from '../_constants';

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
    case type.FETCH_WEATHER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case type.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case type.FETCH_WEATHER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case type.FETCH_WEATHER_FORECAST_REQUEST:
      return {
        ...state,
        isFetchingForecast: true,
      };
    case type.FETCH_WEATHER_FORECAST_SUCCESS:
      return {
        ...state,
        isFetchingForecast: false,
        dataForecast: action.payload,
      };
    case type.FETCH_WEATHER_FORECAST_FAILURE:
      return {
        ...state,
        isFetchingForecast: false,
        errorForecast: action.payload,
      };
    default:
      return state;
  }
}
