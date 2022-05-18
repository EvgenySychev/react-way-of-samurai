import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';
import Friends from "./Friends/Friends";
import {friendsInSidebarType} from "../../redux/store";


type NavbarPropsType = {
    stateN: friendsInSidebarType
}

const Navbar = (props:NavbarPropsType) => {
    return (
        <div>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to="/profile">Profile</NavLink>
                </div>
                <div className={`${s.item} ${s.activ}`}>
                    <NavLink to="/dialogs" className={s.activeLink}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" className={s.activeLink}> News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" className={s.activeLink}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" className={s.activeLink}>Settings</NavLink>
                </div>
            </nav>
            <Friends stateN={props.stateN}/>
        </div>
    )
}

export default Navbar;
