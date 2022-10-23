import React, {useEffect} from "react";
import './App.css';
import {Login} from "./components/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./common/components/Preloader/Preloader";
import {getAuthUserData} from "./redux/auth-reducer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Navbar} from "./components/Navbar/Navbar";
import {Content} from "./components/Content/Content";

const App = () => {

    const initialized = useSelector<AppStateType, boolean>(state => state.app.initialized)
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)

    const dispatch = useDispatch();

    const catchAllUnhandleErrors = (promiseRejectionEvent: any) => {
        alert("Some error occured")
    }

    useEffect(() => {
        dispatch(getAuthUserData())
        window.addEventListener("unhandledrejection", catchAllUnhandleErrors)
        return () => {
            window.removeEventListener("unhandledrejection", catchAllUnhandleErrors)
        }
    }, [])

    if (!initialized) {
        return <Preloader/>
    }

    return <div className='app-wrapper-content'>
        <HeaderContainer/>
        {!isAuth
            ? <Login/>
            : <div className='app-wrapper'>
                <Navbar/>
                <Content/>
            </div>}
    </div>
}

export default App;