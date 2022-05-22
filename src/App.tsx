import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {ActionTypes, RootStateType} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


type StatePropsType = {
    /*state: RootStateType
    //addPost: () => void
    newPostText: string
    //updateNewPostText: (newText: string) => void
    dispatch: (action: ActionTypes) => void*/
}

const App = (props: StatePropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar stateN={props.state.sidebar}/>

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