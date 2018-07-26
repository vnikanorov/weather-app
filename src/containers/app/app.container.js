import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BounceLoader } from 'react-spinners';

import './app.container.css';

import { locationActions } from '../../_actions';

import { Forecast } from '..';

import { CurrentWeather, Header } from '../../components';

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
    } = this.props;

    console.log('isFetchingWeather', isFetchingWeather);
    console.log('currentLocation', currentLocation);
    console.log('currentWeather', currentWeather);
    console.log('errorLocation', errorLocation);
    console.log('errorWeather', errorWeather);

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

    if (isFetchingWeather || isFetchingForecast) {
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
        <Forecast />
      </div>
    );
  }
}

App.propTypes = {
  getLocation: PropTypes.func.isRequired,
  currentWeather: PropTypes.object.isRequired,
  currentLocation: PropTypes.object.isRequired,
  isFetchingWeather: PropTypes.bool.isRequired,
  isFetchingForecast: PropTypes.bool.isRequired,
  errorLocation: PropTypes.object,
  errorWeather: PropTypes.object,
};

const mapStateToProps = state => ({
  currentWeather: state.weather.data,
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
