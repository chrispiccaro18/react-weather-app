import React from 'react';
import PropTypes from 'prop-types';

function ForecastCard({ forecast }) {
  const {
    name,
    isDaytime,
    temperature,
    temperatureUnit,
    icon,
    shortForecast
  } = forecast;

  const dayOrNight = isDaytime ? 'day' : 'night';

  return (
    <li className={dayOrNight}>
      <p className="name">{name.toLowerCase().includes('this') ? 'Today' : name}</p>
      <p className="temp">{temperature}&deg;{temperatureUnit}</p>
      <img src={icon} alt="weather icon" className="icon" /> 
      <p className="short">{shortForecast}</p>
    </li>
  );
}

ForecastCard.propTypes = {
  forecast: PropTypes.shape({
    name: PropTypes.string.isRequired,
    isDaytime: PropTypes.bool.isRequired,
    temperature: PropTypes.string.isRequired,
    temperatureUnit: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    shortForecast: PropTypes.string.isRequired,
  })
};

export default ForecastCard;
