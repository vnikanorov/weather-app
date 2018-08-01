import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BounceLoader } from 'react-spinners';

import './app.container.css';

import { locationActions } from '../../_actions';

import { Forecast, Header } from '..';

import {
  CurrentWeather,
  Footer,
  WeatherInformation,
} from '../../components';

class App extends Component {
  componentDidMount() {
    const { getLocation } = this.props;
    getLocation();
  }

  render() {
    const {
      currentWeather,
      currentLocation,
      isFetchingWeather,
      isFetchingForecast,
      errorLocation,
      errorWeather,
      weatherForecast,
    } = this.props;

    if (errorLocation || errorWeather) {
      return (
        <div className="error-container">
          {errorLocation ? (
            <div className="error-message">
              Oops:
              {errorLocation.info}
            </div>
          ) : (
            <div className="error-message">
              Oops:
              {errorWeather.message}
            </div>
          )}
        </div>
      );
    }

    if (isFetchingWeather) {
      return (
        <div className="bounce-loader">
          <BounceLoader color="#fff" />
        </div>
      );
    }

    return (
      <div className="App">
        <Header location={currentLocation} />
        <CurrentWeather weather={currentWeather} />
        <div className="more-informations">
          <Forecast isFetching={isFetchingForecast} />
          <div className="more-info-container">
            <WeatherInformation
              {...currentWeather}
              weatherForecast={weatherForecast}
              isFetchingForecast={isFetchingForecast}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  getLocation: PropTypes.func.isRequired,
  currentWeather: PropTypes.object.isRequired,
  weatherForecast: PropTypes.object.isRequired,
  currentLocation: PropTypes.object.isRequired,
  isFetchingWeather: PropTypes.bool.isRequired,
  isFetchingForecast: PropTypes.bool.isRequired,
  errorLocation: PropTypes.object,
  errorWeather: PropTypes.object,
};

App.defaultProps = {
  errorLocation: {},
  errorWeather: {},
};

const mapStateToProps = state => ({
  currentWeather: state.weather.data,
  weatherForecast: state.weather.dataForecast,
  currentLocation: state.location.data,
  isFetchingWeather: state.weather.isFetching,
  isFetchingForecast: state.weather.isFetchingForecast,
  errorLocation: state.location.error,
  errorWeather: state.weather.error,
});

const mapDispatchToProps = dispatch => ({
  getLocation: () => {
    dispatch(locationActions.fetchLocation());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
