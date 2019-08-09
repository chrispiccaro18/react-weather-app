import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './AllForecasts.css';
import { selectForecasts, selectForecastsLoading, selectLocation, selectValid } from '../../selectors/weatherSelectors';
import { selectZipCode } from '../../selectors/zipCodeSelectors';
import ForecastCards from '../../components/forecasts/ForecastCards';
import { checkWeather, checkWeatherLatLng } from '../../actions/weatherActions';
import Loading from '../../components/loading/Loading';

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
    valid: PropTypes.bool.isRequired,
    fetch: PropTypes.func.isRequired,
    fetchLatLng: PropTypes.func.isRequired
  }

  componentDidMount() {
    if('geolocation' in navigator) {
      /* geolocation is available */
      const { fetchLatLng } = this.props;
      navigator.geolocation.getCurrentPosition(position => {
        fetchLatLng(position.coords.latitude, position.coords.longitude);
      });
    } else {
      /* geolocation IS NOT available */
      const { fetch } = this.props;
      fetch('90048');
    }
  }

  // componentDidUpdate(prevProps) {
  //   const { fetch, zipCode } = this.props;
  //   if(prevProps.zipCode !== zipCode) {
  //     fetch(zipCode);
  //   }
  // }

  render() {
    const {
      forecasts,
      loading,
      weatherLocation,
      valid,
      zipCode
    } = this.props;
    if(loading) return <Loading />;
    if(!valid) return <h2>{zipCode} is not a valid US Zip Code!</h2>;

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
  zipCode: selectZipCode(state),
  valid: selectValid(state)
});

const mapDispatchToProps = dispatch => ({
  fetch(zipCode) {
    dispatch(checkWeather(zipCode));
  },
  fetchLatLng(lat, lng) {
    dispatch(checkWeatherLatLng(lat, lng));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllForecasts);
