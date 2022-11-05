import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import userPhoto from '../../assets/images/user.png';
import { ProfileType } from '../../redux/profile-reducer';
import { AppStateType } from '../../redux/redux-store';
import { SidebarItem } from '../../redux/sidebar-reducer';

import { Friends } from './Friends/Friends';
import style from './Navbar.module.scss';

export const Navbar = () => {
  const ownerProfile = useSelector<AppStateType, ProfileType>(
    state => state.profilePage.ownerProfile,
  );
  const sidebarItems = useSelector<AppStateType, Array<SidebarItem>>(
    state => state.sidebar.sidebarItems,
  );

  return (
    <div className={style.navbar}>
      <div className={style.userInfoBlock}>
        <div className={style.userPhoto}>
          <img
            alt={ownerProfile.fullName}
            src={ownerProfile.photos?.small || userPhoto}
          />
        </div>
        <div>{ownerProfile.fullName}</div>
        <div>{ownerProfile.userId}</div>
      </div>
      <hr />
      <ul>
        {sidebarItems.map(s => (
          <li key={s.id}>
            <NavLink to={s.link}>
              <span>{s.linkTitle}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      <Friends />
    </div>
  );
};
