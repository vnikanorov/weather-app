import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
    return (
      <div className="forecast">
        {this.renderItems()}
      </div>
    );
  }
}

Forecast.propTypes = {
  forecast: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  forecast: state.weather.dataForecast,
});

export default connect(
  mapStateToProps,
  null,
)(Forecast);
