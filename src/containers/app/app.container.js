import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BounceLoader } from 'react-spinners';

import './app.container.css';

import { locationActions } from '../../_actions';

import { CurrentWeather } from '../../components';

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
    } = this.props;

    console.log('isFetchingWeather', isFetchingWeather);
    console.log('currentLocation', currentLocation);
    console.log('currentWeather', currentWeather);

    if (isFetchingWeather) {
      return (
        <div className="bounce-loader">
          <BounceLoader color="#fff" />
        </div>
      );
    }

    return (
      <div className="App">
        <CurrentWeather weather={currentWeather} location={currentLocation} />
      </div>
    );
  }
}

App.propTypes = {
  getLocation: PropTypes.func.isRequired,
  currentWeather: PropTypes.object.isRequired,
  currentLocation: PropTypes.object.isRequired,
  isFetchingWeather: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  currentWeather: state.weather.data,
  currentLocation: state.location.data,
  isFetchingWeather: state.weather.isFetching,
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
