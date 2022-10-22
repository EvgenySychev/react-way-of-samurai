import s from './Header.module.scss' ;
import logo from "./../../assets/images/cs_networking.jpg";
import {logoutTC} from "../../redux/auth-reducer";
import {useDispatch} from "react-redux";
import React from "react";

const Header = (props: any) => {

    const dispatch = useDispatch()

    const logout = () => {
        dispatch(logoutTC())
    }

    return <header className={s.header}>
        <div className={s.login}>
            <div>
                <img
                    src={logo}/>
            </div>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? (<div>{props.login}
                        <button onClick={logout}>LOGOUT</button>
                    </div>)
                    : <button>LOGIN</button>
                }
            </div>
        </div>
    </header>
}

export default Header;
