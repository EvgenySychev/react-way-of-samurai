import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {RootStateType} from "./redux/state";


type StatePropsType = {
    state:RootStateType
    addPost: () => void
    newPostText:string
    updateNewPostText: (newText: string) => void
}

const App = (props:StatePropsType) => {
  return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Header />
          <Navbar stateN = {props.state.sidebar} />

          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/dialogs/*' element={<Dialogs stateD = {props.state.dialogsPage} />}/>
              <Route path='/profile/*' element={<Profile profilePage = {props.state.profilePage} addPost={props.addPost} newPostText={props.newPostText} updateNewPostText={props.updateNewPostText}/>} />
              <Route path='/news/*' element={<News />} />
              <Route path='/music/*' element={<Music />}/>
              <Route path='/settings/*' element={<Settings />}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>)
}

export default App;