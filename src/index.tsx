import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/state";

const rerenderEntireTree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={store._state} dispatch={store.dispatch.bind(store)} newPostText={store._state.profilePage.newPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)


reportWebVitals();
