import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';

const sparklinesLineColor = '#ffffffad';

class ChartWeather extends Component {
  render() {
    const { data } = this.props;

    console.log('data', data);

    return (
      <div className="chart-weather">
        <Sparklines data={data}>
          <SparklinesLine color={sparklinesLineColor} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
      </div>
    );
  }
}

ChartWeather.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ChartWeather;
