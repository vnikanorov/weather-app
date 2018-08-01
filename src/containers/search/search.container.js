import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';

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

    if (value.length > 2) {
      this.setState({ value: '' });
      setCurrentLocation(value.trim());
    }
  }

  render() {
    const { currentLocation, isFetching, error } = this.props;
    const { value } = this.state;
    return (
      <div className="search">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className={classNames('search-input', { error: error !== null })}
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
        {error && (
          <div className="search-error">
            {error.response.data.message}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentLocation: state.location.currentLocation,
  isFetching: state.weather.isFetchingNewWeather,
  error: state.weather.errorNewWeather,
});

const mapDispatchToProps = dispatch => ({
  setCurrentLocation: (city) => {
    dispatch(locationActions.setCurrentLocation(city));
  },
});

Search.defaultProps = {
  error: null,
};

Search.propTypes = {
  setCurrentLocation: PropTypes.func.isRequired,
  currentLocation: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
