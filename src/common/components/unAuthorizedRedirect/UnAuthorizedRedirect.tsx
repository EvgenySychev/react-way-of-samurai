import React, { ReactElement } from 'react';

import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

import { AppStateType } from '../../../redux/redux-store';

export const UnAuthorizedRedirect = (): ReactElement => {
  const isLoggedIn = useSelector<AppStateType, boolean>(state => state.auth.isAuth);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};
