import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import state, {addPost, RootStateType, subscribe, updateNewPostText} from "./redux/state";

const rerenderEntireTree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} newPostText={state.profilePage.newPostText}
                 updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

}

rerenderEntireTree()

subscribe(rerenderEntireTree)


reportWebVitals();
