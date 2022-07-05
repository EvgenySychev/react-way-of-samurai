import s from './Header.module.css' ;
import {Route, Routes} from "react-router-dom";
import logo from "./../../assets/images/cs_networking.jpg";
import {Login} from "../Login/Login";

const Header = (props: any) => {
    return <header className={s.header}>
        <div className={s.login}>
            <div>
                <img
                    src={logo}/>
            </div>


            <div className={s.loginBlock}>
                {props.isAuth ? props.login : 'LOGIN'
                }

            </div>
        </div>

    </header>
}

export default Header;
