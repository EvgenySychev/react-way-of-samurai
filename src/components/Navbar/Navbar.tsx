import {NavLink} from 'react-router-dom';
import style from './Navbar.module.scss';
import {Friends} from "./Friends/Friends";
import userPhoto from "../../assets/images/user.png";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType} from "../../redux/profile-reducer";
import {SidebarItem} from "../../redux/sidebar-reducer";

export const Navbar = () => {

    let profile = useSelector<AppStateType, ProfileType>(state => state.profilePage.profile)
    let sidebarItems = useSelector<AppStateType,Array<SidebarItem>>(state => state.sidebar.sidebarItems)

    return (
        <div className={style.navbar}>
            <div className={style.userInfoBlock}>
                <div className={style.userPhoto}>
                    <img alt={profile.fullName} src={profile.photos?.small || userPhoto}/>
                </div>
                <div>{profile.fullName}</div>
                <div>{profile.userId}</div>
            </div>
            <hr/>
            <ul>
                {sidebarItems.map(s => <li>
                    <NavLink to={s.link}>
                        <span>
                             {s.linkTitle}
                        </span>
                    </NavLink>
                </li>)}
            </ul>
            <Friends/>
        </div>
    )
}
