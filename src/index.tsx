import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";

import {Provider} from "react-redux";
import {store} from "./redux/redux-store";


const rerenderEntireTree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>

        </React.StrictMode>,
        document.getElementById('root')
    );

}

rerenderEntireTree()

store.subscribe(( )=>rerenderEntireTree())// здесь необходимо изменить, чтобы отрисовалось дерево.


reportWebVitals();
