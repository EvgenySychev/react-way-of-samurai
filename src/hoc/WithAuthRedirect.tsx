import React from 'react';

import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { AppStateType } from '../redux/redux-store';

type mapStateToPropsForRedirectType = {
  isAuth: boolean;
};

const mapStateToPropsForRedirect = (
  state: AppStateType,
): mapStateToPropsForRedirectType => ({
  isAuth: state.auth.isAuth,
});

export const WithAuthRedirectComponent = (Component: any) => {
  const RedirectComponent = (props: mapStateToPropsForRedirectType) => {
    const { isAuth, ...restProps } = props;

    if (!isAuth) return <Navigate to="/login" />;

    return <Component {...restProps} />;
  };

  const ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent,
  );

  return ConnectAuthRedirectComponent;
};
