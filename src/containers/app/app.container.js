import React, { Component } from 'react';
import { connect } from 'react-redux';

import './app.container.css';

import { locationActions } from '../../_actions';

class App extends Component {
  componentDidMount() {
    const { getLocation } = this.props;
    getLocation();
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getLocation: () => {
    dispatch(locationActions.fetchLocation());
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(App);
