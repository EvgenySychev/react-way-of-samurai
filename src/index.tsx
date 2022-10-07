import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import {Provider} from "react-redux";
import {store} from "./redux/redux-store";
import ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom";


ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>
    ,
    document.getElementById('root')
);


reportWebVitals();
