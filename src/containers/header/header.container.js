import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './header.container.css';
import { Menu } from '../../components';

import { layoutActions } from '../../_actions';

class Header extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;

    this.boundActionCreators = bindActionCreators(layoutActions, dispatch);

    this.handleMenuBtn = this.handleMenuBtn.bind(this);
  }

  handleMenuBtn() {
    const { dispatch } = this.props;
    const action = layoutActions.openMenu();
    dispatch(action);
  }

  render() {
    const { layout } = this.props;
    return (
      <div className="header">
        <div className="header-wrap">
          <div className="header-title">
            Wether App
          </div>
          <div
            className="btn-menu"
            onClick={this.handleMenuBtn}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        {layout.menu && <Menu domRef={this.menuRef} {...this.boundActionCreators} />}
      </div>
    );
  }
}

Header.propTypes = {
  layout: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  layout: state.layout,
});

export default connect(
  mapStateToProps,
  null,
)(Header);