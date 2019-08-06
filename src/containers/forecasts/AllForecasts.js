import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './AllForecasts.css';
import { selectForecasts, selectForecastsLoading, selectLocation } from '../../selectors/weatherSelectors';
import { selectZipCode } from '../../selectors/zipCodeSelectors';
import ForecastCards from '../../components/forecasts/ForecastCards';
import { checkWeather } from '../../actions/weatherActions';

class AllForecasts extends PureComponent {
  static propTypes = {
    forecasts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        isDaytime: PropTypes.bool,
        temperature: PropTypes.number,
        temperatureUnit: PropTypes.string,
        icon: PropTypes.string,
        shortForecast: PropTypes.string,
      })
    ),
    loading: PropTypes.bool.isRequired,
    zipCode: PropTypes.string,
    weatherLocation: PropTypes.shape({
      city: PropTypes.string,
      state: PropTypes.string
    }),
    fetch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { fetch } = this.props;
    fetch('06820');
  }

  // componentDidUpdate(prevProps) {
  //   const { fetch, zipCode } = this.props;
  //   if(prevProps.zipCode !== zipCode) {
  //     fetch(zipCode);
  //   }
  // }

  render() {
    const { forecasts, loading, weatherLocation } = this.props;
    if(loading) return <h1>LOADING</h1>;

    const { city, state } = weatherLocation;
    return (
      <>
        <h2>5 Day Forecast for {city}, {state}</h2>
        <ForecastCards forecasts={forecasts} />
      </>
    );
  }

}

const mapStateToProps = state => ({
  forecasts: selectForecasts(state),
  loading: selectForecastsLoading(state),
  weatherLocation: selectLocation(state),
  zipCode: selectZipCode(state)
});

const mapDispatchToProps = dispatch => ({
  fetch(zipCode) {
    dispatch(checkWeather(zipCode));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllForecasts);
