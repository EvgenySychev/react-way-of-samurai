
import s from './Friends.module.css';
import {FriendsInSidebarType} from "../../../redux/sidebar-reducer";

type FriendPropsType = {
    stateN:FriendsInSidebarType
}

const Friends = (props:FriendPropsType) => {
return(
    <div className={s.friends}>
        <div>Friends</div>
        <div>
            <span>
                <img src={props.stateN.friendsInSidebar[0].img}/>
                <div> {props.stateN.friendsInSidebar[0].name} </div>
            </span>
            <span>
                <img src={props.stateN.friendsInSidebar[1].img}/>
                <div> {props.stateN.friendsInSidebar[1].name} </div>
            </span>
            <span>
                <img src={props.stateN.friendsInSidebar[2].img}/>
                <div> {props.stateN.friendsInSidebar[2].name} </div>
            </span>
        </div>
    </div>
)

}

export default Friends