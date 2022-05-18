import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {ActionTypes, RootStateType} from "./redux/store";


type StatePropsType = {
    state:RootStateType
    //addPost: () => void
    newPostText:string
    //updateNewPostText: (newText: string) => void
    dispatch: (action:ActionTypes)=> void
}

const App = (props:StatePropsType) => {
  return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Header />
          <Navbar stateN = {props.state.sidebar} />

          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/dialogs/*' element={<Dialogs stateD = {props.state.dialogsPage} dispatch={props.dispatch}/>}/>
              <Route path='/profile/*' element={<Profile profilePage = {props.state.profilePage} dispatch={props.dispatch} newPostText={props.newPostText}/>} />
              <Route path='/news/*' element={<News />} />
              <Route path='/music/*' element={<Music />}/>
              <Route path='/settings/*' element={<Settings />}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>)
}

export default App;