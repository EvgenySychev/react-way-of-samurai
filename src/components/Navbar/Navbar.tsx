import {NavLink} from 'react-router-dom';
import style from './Navbar.module.scss';
import {Friends} from "./Friends/Friends";

export const Navbar = () => {
    return (
        <div className={style.nav}>
            <nav >
                <div>
                    <NavLink to="/profile">Profile</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs" >Messages</NavLink>
                </div>
                <div>
                    <NavLink to="/users" >Users</NavLink>
                </div>
                <div>
                    <NavLink to="/news" > News</NavLink>
                </div>
                <div>
                    <NavLink to="/music" >Music</NavLink>
                </div>
                <div>
                    <NavLink to="/settings" >Settings</NavLink>
                </div>
            </nav>
            <Friends />
        </div>
    )
}
