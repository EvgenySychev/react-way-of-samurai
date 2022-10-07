import React, {useEffect} from "react";
import './App.css';
import News from './components/News/News';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import {UsersContainerWrapper} from "./components/Users/UsersContainer";
import {ProfileContainerWrapper} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";
import {getAuthUserData} from "./redux/auth-reducer";

const App = () => {

    const initialized = useSelector<AppStateType>(state => state.app.initialized)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAuthUserData())
    }, [])

    if (!initialized) {
        return <Preloader/>
    }

    return <div className='app-wrapper'>
        <HeaderContainer/>
        <NavbarContainer/>
        <div className='app-wrapper-content'>
            <Routes>
                <Route path='/*' element={<ProfileContainerWrapper/>}/>
                <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                <Route path='/profile' element={<ProfileContainerWrapper/>}/>
                <Route path='/profile/:userId' element={<ProfileContainerWrapper/>}/>
                <Route path='/news/*' element={<News/>}/>
                <Route path='/music/*' element={<Music/>}/>
                <Route path='/settings/*' element={<Settings/>}/>
                <Route path='/users/*' element={<UsersContainerWrapper/>}/>
                <Route path='/login/*' element={<Login/>}/>
            </Routes>
        </div>
    </div>
}

export default App;