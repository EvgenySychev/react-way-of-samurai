import { useSelector } from 'react-redux';

import { AppStateType } from '../../../redux/redux-store';
import { FriendsInSidebarType } from '../../../redux/sidebar-reducer';

import { FriendItem } from './FriendItem';
import s from './Friends.module.css';

export const Friends = () => {
  const friendsInSidebar = useSelector<AppStateType, Array<FriendsInSidebarType>>(
    state => state.sidebar.friendsInSidebar,
  );

  return (
    <div className={s.friends}>
      <h3>Friends</h3>
      <div>
        {friendsInSidebar.map(f => (
          <FriendItem key={f.id} friendItem={f} />
        ))}
      </div>
    </div>
  );
};
