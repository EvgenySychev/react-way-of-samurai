import s from './Friends.module.css';
import {SidebarType} from "../../../redux/sidebar-reducer";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

export const Friends = () => {

    let friendsInSidebar = useSelector<AppStateType, Array<SidebarType>>(state => state.sidebar.friendsInSidebar)

    return (
        <div className={s.friends}>
            <div>Friends</div>
            <div>
                {friendsInSidebar.map(f => <span>
                <img src={f.img}/>
                <div> {f.name} </div>
            </span>)}
            </div>
        </div>
    )
}