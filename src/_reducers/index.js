import { combineReducers } from 'redux';
import WeatherReducer from './weather.reducer';
import LocationReducer from './location.reducer';
import LayoutReducer from './layout.reducer';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  location: LocationReducer,
  layout: LayoutReducer,
});

export default rootReducer;
