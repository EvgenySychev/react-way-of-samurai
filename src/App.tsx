import React, {useEffect} from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainerWrapper} from "./components/Users/UsersContainer";
import {ProfileContainerWrapper} from "./components/Profile/ProfileContainer";

import {Login} from "./components/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";
import {getAuthUserData} from "./redux/auth-reducer";
import {PageNotFound} from "./components/PageNotFound/PageNotFound";
import {
    UnAuthorizedRedirect
} from "./components/unAuthorizedRedirect/UnAuthorizedRedirect";
import HeaderContainer from "./components/Header/HeaderContainer";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";

const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));

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
        <div className='app-wrapper'>
            {isAuth ? <NavbarContainer/> : ''}
            <React.Suspense fallback={<div><Preloader/></div>}>
                <Routes>
                    <Route path="/404" element={<PageNotFound/>}/>
                    <Route path='/login/*' element={<Login/>}/>
                    <Route element={<UnAuthorizedRedirect/>}>
                        <Route path='/profile/:userId'
                               element={<ProfileContainerWrapper/>}/>
                        <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                        <Route path='/profile' element={<ProfileContainerWrapper/>}/>
                        <Route path='/news/*' element={<News/>}/>
                        <Route path='/music/*' element={<Music/>}/>
                        <Route path='/settings/*' element={<Settings/>}/>
                        <Route path='/users/*' element={<UsersContainerWrapper/>}/>
                    </Route>
                    <Route path='*' element={<ProfileContainerWrapper/>}/>
                </Routes>
            </React.Suspense>
        </div>
    </div>
}

export default App;