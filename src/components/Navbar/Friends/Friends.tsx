
import s from './Friends.module.css';
import {SidebarType} from "../../../redux/sidebar-reducer";

type FriendPropsType = {
    friendsInSidebar: Array<SidebarType>
}

const Friends = (props:FriendPropsType) => {
return(
    <div className={s.friends}>
        <div>Friends</div>
        <div>
            <span>
                <img src={props.friendsInSidebar[0].img}/>
                <div> {props.friendsInSidebar[0].name} </div>
            </span>
            <span>
                <img src={props.friendsInSidebar[1].img}/>
                <div> {props.friendsInSidebar[1].name} </div>
            </span>
            <span>
                <img src={props.friendsInSidebar[2].img}/>
                <div> {props.friendsInSidebar[2].name} </div>
            </span>
        </div>
    </div>
)

}

export default Friends