import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BounceLoader } from 'react-spinners';

import './forecast.container.css';

import { ForecastItem } from '../../components';

class Forecast extends Component {
  renderItems() {
    const { forecast } = this.props;

    return forecast.list.map(item => (
      <ForecastItem key={item.dt} weather={item} />
    ));
  }

  render() {
    const { isFetching } = this.props;

    if (isFetching) {
      return (
        <div className="bounce-loader">
          <BounceLoader color="#fff" />
        </div>
      );
    }

    return (
      <div className="forecast">
        {this.renderItems()}
      </div>
    );
  }
}

Forecast.propTypes = {
  forecast: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  forecast: state.weather.dataForecast,
});

export default connect(
  mapStateToProps,
  null,
)(Forecast);
