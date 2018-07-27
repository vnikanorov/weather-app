import { locationConstants } from '../_constants';

const initialState = {
  error: null,
  isFetching: false,
  data: {},
};

export default function LocationReducer(state = initialState, action) {
  switch (action.type) {
    case locationConstants.FETCH_LOCATION_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case locationConstants.FETCH_LOCATION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case locationConstants.FETCH_LOCATION_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
