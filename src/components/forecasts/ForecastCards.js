import React from 'react';
import PropTypes from 'prop-types';
import ForecastCard from './ForecastCard';

function ForecastCards({ forecasts }) {
  const forecastLis = forecasts.map(forecast => (
    <ForecastCard key={forecast.name} forecast={forecast} />
  ));

  return (
    <ul className="forecasts">
      {forecastLis}
    </ul>
  );
}

ForecastCards.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      isDaytime: PropTypes.bool.isRequired,
      temperature: PropTypes.number.isRequired,
      temperatureUnit: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      shortForecast: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
};

export default ForecastCards;
