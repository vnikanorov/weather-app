import { locationConstants } from '../_constants';

const initialState = {
  error: null,
  isLoaded: false,
  data: {},
};

export default function LocationReducer(state = initialState, action) {
  switch (action.type) {
    case locationConstants.FETCH_LOCATION_REQUEST:
      return {
        ...state,
        isLoaded: false,
      };
    case locationConstants.FETCH_LOCATION_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        data: action.payload,
      };
    case locationConstants.FETCH_LOCATION_FAILURE:
      return {
        ...state,
        isLoaded: true,
        error: action.payload,
      };
    default:
      return state;
  }
}
