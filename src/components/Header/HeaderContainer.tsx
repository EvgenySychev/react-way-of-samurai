import React from 'react';

import { connect } from 'react-redux';

import { AppStateType } from '../../redux/redux-store';

import Header from './Header';

// eslint-disable-next-line react/prefer-stateless-function
class HeaderContainer extends React.Component<any> {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps)(HeaderContainer);
