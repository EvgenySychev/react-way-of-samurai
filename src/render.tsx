import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import state, {addPost, RootStateType, updateNewPostText} from "./redux/state";

 export const renderTree = (state: RootStateType) => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} newPostText={state.profilePage.newPostText}
                 updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

}