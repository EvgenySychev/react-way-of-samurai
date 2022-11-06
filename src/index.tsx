import React from 'react';

import './index.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './App';
import { store } from './redux/redux-store';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root'),
);

reportWebVitals();
