import { combineReducers } from 'redux';
import WeatherReducer from './weather.reducer';
import LocationReducer from './location.reducer';

const rootReducer = combineReducers({
  weater: WeatherReducer,
  location: LocationReducer,
});

export default rootReducer;
