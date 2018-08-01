import { locationConstants as type } from '../_constants';

const initialState = {
  error: null,
  isFetching: false,
  currentLocation: '',
  data: {},
};

export default function LocationReducer(state = initialState, action) {
  switch (action.type) {
    case type.FETCH_LOCATION_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case type.FETCH_LOCATION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case type.FETCH_LOCATION_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case type.SET_CURRENT_LOCATION:
      return {
        ...state,
        currentLocation: action.payload,
      };
    default:
      return state;
  }
}
