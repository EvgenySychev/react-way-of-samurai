import React, {useEffect} from "react";
import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainerWrapper} from "./components/Users/UsersContainer";
import {ProfileContainerWrapper} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";
import {getAuthUserData} from "./redux/auth-reducer";
import {PageNotFound} from "./components/PageNotFound/PageNotFound";

const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));

const App = () => {

    const initialized = useSelector<AppStateType, boolean>(state => state.app.initialized)

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

    return <div className='app-wrapper'>
        <HeaderContainer/>
        <NavbarContainer/>
        <div className='app-wrapper-content'>
            <React.Suspense fallback={<div><Preloader/></div>}>
                <Routes>
                    <Route path="/404" element={<PageNotFound/>}/>
                    <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                    <Route path='/profile/:userId' element={<ProfileContainerWrapper/>}/>
                    <Route path='/profile' element={<ProfileContainerWrapper/>}/>
                    <Route path='/news/*' element={<News/>}/>
                    <Route path='/music/*' element={<Music/>}/>
                    <Route path='/settings/*' element={<Settings/>}/>
                    <Route path='/users/*' element={<UsersContainerWrapper/>}/>
                    <Route path='/login/*' element={<Login/>}/>
                    <Route path='*' element={<ProfileContainerWrapper/>}/>
                </Routes>
            </React.Suspense>
        </div>
    </div>
}

export default App;