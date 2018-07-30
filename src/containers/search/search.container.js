import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { MoonLoader } from 'react-spinners';

import searchIcon from '../../icons/baseline-search-24px.svg';
import './search.container.css';

import { locationActions } from '../../_actions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const { setCurrentLocation } = this.props;
    const { value } = this.state;

    event.preventDefault();

    this.setState({ value: '' });

    setCurrentLocation(value);
  }

  render() {
    const { currentLocation, isFetching } = this.props;
    const { value } = this.state;
    return (
      <div className="search">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder={currentLocation || 'Search city...'}
            value={value}
            onChange={this.handleChange}
          />
          <button type="submit" className="search-btn" disabled={value.length < 2 && isFetching}>
            {isFetching ? (
              <MoonLoader size={15} />
            ) : (
              <img src={searchIcon} alt="search" />
            )}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentLocation: state.location.currentLocation,
  isFetching: state.weather.isFetchingNewWeather,
});

const mapDispatchToProps = dispatch => ({
  setCurrentLocation: (city) => {
    dispatch(locationActions.setCurrentLocation(city));
  },
});

Search.propTypes = {
  setCurrentLocation: PropTypes.func.isRequired,
  currentLocation: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
