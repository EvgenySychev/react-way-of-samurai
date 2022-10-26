import s from './Header.module.scss' ;
import {logoutTC} from "../../redux/auth-reducer";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {HeaderLogo} from "./HeaderLogo";
import userPhoto from "../../assets/images/user.png";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType} from "../../redux/profile-reducer";

const Header = (props: any) => {

    let ownerProfile = useSelector<AppStateType, ProfileType>(state => state.profilePage.ownerProfile)
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(logoutTC())
    }

    return <header className={s.header}>
        <div className={s.login}>
            <HeaderLogo/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? (<div className={s.loginInfo}>
                        <p>{props.login}</p>
                        <img style={{height: '35px', width: '35px'}}
                             src={ownerProfile.photos?.small || userPhoto}
                             alt="ownerPhoto"/>
                        <button onClick={logout}>LOGOUT</button>
                    </div>)
                    : <button
                        onClick={() => alert('there will be a transition to register page soon')}>REGISTER</button>
                }
            </div>
        </div>
    </header>
}

export default Header;
