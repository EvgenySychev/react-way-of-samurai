import {SidebarType} from "../../../redux/sidebar-reducer";

type FriendItemPropsType = {
    friendItem: SidebarType
}

export const FriendItem = ({friendItem}: FriendItemPropsType) => {

    return (
        <span>
                <img alt={friendItem.name} src={friendItem.img}/>
                <div> {friendItem.name} </div>
            </span>
    )
}