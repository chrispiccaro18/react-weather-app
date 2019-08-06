import { get } from './request';

const LAT_LNG_BASE_URL = 'https://zip-to-lat-and-lng.herokuapp.com/api/v1/zip';
const WEATHER_BASE_URL = 'https://api.weather.gov';

export const getLatLng = zipCode => get(LAT_LNG_BASE_URL, zipCode);

export const getWeatherLoc = (lat, lng) => get(WEATHER_BASE_URL, `/points/${lat},${lng}`);

export const getWeather = zipCode => {
  return getLatLng(zipCode)
    .then(latLng => {
      if(Object.entries(latLng).length === 0 && latLng.constructor === Object) {
        return 'invalid zip-code';
      }

      const { lat, lng } = latLng;

      return getWeatherLoc(lat, lng)
        .then(weatherLoc => {
          return Promise.all([
            weatherLoc.properties.relativeLocation.properties,
            get(weatherLoc.properties.forecast)
          ])
            .then(([location, dirtyForecasts]) => {
              const { city, state } = location;

              return {
                location: {
                  city,
                  state
                },
                forecasts: cleanForecast(dirtyForecasts)
              };
            });
        });
    });
};


const cleanForecast = forecasts => {
  return forecasts.filter(forecast => !forecast.name.toLowerCase().includes('night'));
};

//Q FOR RYAN?: why doesn't async await work?

// export const getWeather = async zipCode => {
//   const latLng = await get(LAT_LNG_BASE_URL, zipCode);

//   if(Object.entries(latLng).length === 0 && latLng.constructor === Object) {
//     return 'invalid zip-code';
//   }

//   const { lat, lng } = latLng;

//   const weatherLoc = await get(WEATHER_BASE_URL, `/points/${lat},${lng}`);

//   const { city, state } = weatherLoc.properties.relativeLocation.properties;
//   const { forecast } = weatherLoc.properties;

//   const forecastObj = await get(forecast);
//   const forecasts = cleanForecast(forecastObj.properties.periods);

//   return {
//     location: { city, state },
//     forecasts 
//   };
// };
