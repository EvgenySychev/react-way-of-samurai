import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";



type StatePropsType = {
   /* state: RootStateType
    newPostText: string
    dispatch: (action: ActionTypes) => void*/
}

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavbarContainer/>

                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                        <Route path='/profile/*' element={<Profile/>}/>
                        <Route path='/news/*' element={<News/>}/>
                        <Route path='/music/*' element={<Music/>}/>
                        <Route path='/settings/*' element={<Settings/>}/>
                        <Route path='/users/*' element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;