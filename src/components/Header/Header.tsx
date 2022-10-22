import s from './Header.module.scss' ;
import {logoutTC} from "../../redux/auth-reducer";
import {useDispatch} from "react-redux";
import React from "react";
import {HeaderLogo} from "./HeaderLogo";

const Header = (props: any) => {

    const dispatch = useDispatch()

    const logout = () => {
        dispatch(logoutTC())
    }

    return <header className={s.header}>
        <div className={s.login}>
            <HeaderLogo/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? (<div style={{color: 'black'}}>{props.login}
                        <button onClick={logout}>LOGOUT</button>
                    </div>)
                    : <button onClick={()=>alert('there will be a transition to register page soon')}>REGISTER</button>
                }
            </div>
        </div>
    </header>
}

export default Header;
