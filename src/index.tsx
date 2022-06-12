import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";

import {Provider} from "react-redux";
import {store} from "./redux/redux-store";
import {createRoot} from "react-dom/client";


//const rerenderEntireTree = () => {

    createRoot(document.getElementById('root')!).render(

            <Provider store={store}>
                <App />
            </Provider>,
    );
//}

//rerenderEntireTree()
reportWebVitals();
