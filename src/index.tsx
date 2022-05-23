import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";


const rerenderEntireTree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );

}

rerenderEntireTree()

store.subscribe(( )=>rerenderEntireTree())// здесь необходимо изменить, чтобы отрисовалось дерево.


reportWebVitals();
