import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage:ProfilePageType
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}
const Profile = (props:ProfilePropsType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts post = {props.profilePage.post} addPost={props.addPost} newPostText={props.profilePage.newPostText} updateNewPostText={props.updateNewPostText}/>
    </div>
}

export default Profile;