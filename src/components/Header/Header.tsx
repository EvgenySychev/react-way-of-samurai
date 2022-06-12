import s from './Header.module.css' ;
import {Route, Routes} from "react-router-dom";

const Header = (props: any) => {
    return <header className={s.header}>
        <div>
            <img
                src='https://yt3.ggpht.com/ytc/AAUvwnjFqg_NjHqYp7rasnKp0GNX2j64AijZFfkyEOsZFw=s900-c-k-c0x00ffffff-no-rj'/>
        </div>


        <div className={s.loginBlock}>
            {props.isAuth ? props.login :
                <Routes>
                    <Route path='/login'/>
                </Routes>}

        </div>
    </header>
}

export default Header;