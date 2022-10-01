import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import {Provider} from "react-redux";
import {store} from "./redux/redux-store";
import ReactDOM from 'react-dom';


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
);


reportWebVitals();
