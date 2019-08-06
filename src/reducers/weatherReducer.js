import { CHECK_WEATHER_PENDING, CHECK_WEATHER } from '../actions/weatherActions';

const initialState = {
  loading: false,
  forecasts: [],
  location: {}
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case CHECK_WEATHER_PENDING:
      return { ...state, loading: true };
    case CHECK_WEATHER:
      return {
        ...state,
        loading: false,
        forecasts: payload.forecasts,
        location: payload.location
      };
    default:
      return state;
  }
}
