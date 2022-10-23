import React from "react";
import {Preloader} from "../../common/components/Preloader/Preloader";
import {Route, Routes} from "react-router-dom";
import {PageNotFound} from "../PageNotFound/PageNotFound";
import {Login} from "../Login/Login";
import {
    UnAuthorizedRedirect
} from "../../common/components/unAuthorizedRedirect/UnAuthorizedRedirect";
import {ProfileContainerWrapper} from "../Profile/ProfileContainer";
import {DialogsContainer} from "../Dialogs/DialogsContainer";
import {UsersContainerWrapper} from "../Users/UsersContainer";

const News = React.lazy(() => import('../News/News'));
const Music = React.lazy(() => import('../Music/Music'));
const Settings = React.lazy(() => import('../Settings/Settings'));

export const Content = () => {
    return <div className='content'>
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

}

