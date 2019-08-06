import { createAction } from 'promise-middleware-redux';
import { getWeather, getWeatherUsingLatLng } from '../services/weatherAPI';

export const [
  checkWeather,
  CHECK_WEATHER,
  CHECK_WEATHER_PENDING
] = createAction('CHECK_WEATHER', getWeather);

export const [
  checkWeatherLatLng,
  CHECK_WEATHER_LAT_LNG,
  CHECK_WEATHER_LAT_LNG_PENDING
] = createAction('CHECK_WEATHER_LAT_LNG', getWeatherUsingLatLng);
