import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import {Provider} from "react-redux";
import {store} from "./redux/redux-store";
// @ts-ignore
import {createRoot} from "react-dom/client";


createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App/>
    </Provider>,
);


reportWebVitals();
