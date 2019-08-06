import { createAction } from 'promise-middleware-redux';
import { getWeather } from '../services/weatherAPI';

export const [
  checkWeather,
  CHECK_WEATHER,
  CHECK_WEATHER_PENDING
] = createAction('CHECK_WEATHER', getWeather);
