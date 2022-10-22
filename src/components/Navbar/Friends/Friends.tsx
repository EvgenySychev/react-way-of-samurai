import s from './Friends.module.css';
import {SidebarType} from "../../../redux/sidebar-reducer";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {FriendItem} from "./FriendItem";

export const Friends = () => {

    let friendsInSidebar = useSelector<AppStateType, Array<SidebarType>>(state => state.sidebar.friendsInSidebar)

    return (
        <div className={s.friends}>
            <h3>Friends</h3>
            <div>
                {friendsInSidebar.map(f => <FriendItem friendItem={f}/>)
                  }
            </div>
        </div>
    )
}