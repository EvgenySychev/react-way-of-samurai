import React, { useEffect } from 'react';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';

import { Preloader } from './common/components/Preloader/Preloader';
import { Content } from './components/Content/Content';
import HeaderContainer from './components/Header/HeaderContainer';
import { Login } from './components/Login/Login';
import { Navbar } from './components/Navbar/Navbar';
import { getAuthUserData } from './redux/auth-reducer';
import { AppStateType } from './redux/redux-store';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const App = () => {
  const initialized = useSelector<AppStateType, boolean>(state => state.app.initialized);
  const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth);

  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const catchAllUnhandleErrors = () => {
    return alert('Some error occured');
  };

  useEffect(() => {
    dispatch(getAuthUserData());
    window.addEventListener('unhandledrejection', catchAllUnhandleErrors);

    return () => {
      window.removeEventListener('unhandledrejection', catchAllUnhandleErrors);
    };
  }, []);

  if (!initialized) {
    return <Preloader />;
  }

  return (
    <div className="app-wrapper-content">
      <HeaderContainer />
      {!isAuth ? (
        <Login />
      ) : (
        <div className="app-wrapper">
          <Navbar />
          <Content />
        </div>
      )}
    </div>
  );
};

export default App;
