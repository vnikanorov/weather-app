import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ForecastItem } from '../../components';

class Forecast extends Component {
  renderItems = () => {
    const { forecast } = this.props

		return forecast.list.map(item => {
      return (
        <ForecastItem key={item.dt} weather={item} />
      );
    })
	}
  
  render() {
    return (
      <div className="forecast">
        {this.renderItems()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  forecast: state.weather.dataForecast,
});

export default connect(
  mapStateToProps,
  null,
)(Forecast);
