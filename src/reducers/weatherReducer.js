import { CHECK_WEATHER_PENDING, CHECK_WEATHER, CHECK_WEATHER_LAT_LNG_PENDING, CHECK_WEATHER_LAT_LNG } from '../actions/weatherActions';

const initialState = {
  loading: false,
  forecasts: [],
  location: {},
  valid: true,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case CHECK_WEATHER_PENDING:
    case CHECK_WEATHER_LAT_LNG_PENDING:
      return { ...state, loading: true };
    case CHECK_WEATHER:
    case CHECK_WEATHER_LAT_LNG:
      if(payload === 'invalid zip-code') {
        return {
          ...state,
          loading: false,
          valid: false
        };
      }
      return {
        ...state,
        loading: false,
        forecasts: payload.forecasts,
        location: payload.location,
        valid: true
      };
    default:
      return state;
  }
}
