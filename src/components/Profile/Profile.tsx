import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType} from "../../redux/store";

type ProfilePropsType = {
    profilePage:ProfilePageType
    //addPost: () => void
    newPostText: string
    //updateNewPostText: (newText: string) => void
    dispatch: (action:ActionTypes)=> void
}
const Profile = (props:ProfilePropsType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts post = {props.profilePage.post} dispatch={props.dispatch} newPostText={props.profilePage.newPostText}/>
    </div>
}

export default Profile;