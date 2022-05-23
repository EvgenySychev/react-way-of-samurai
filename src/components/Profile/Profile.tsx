import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType} from "../../redux/store";
import {MyPostContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    /*profilePage:ProfilePageType
    //addPost: () => void
    newPostText: string
    //updateNewPostText: (newText: string) => void
    dispatch: (action:ActionTypes)=> void*/
}
const Profile = () => {
    return <div>
        <ProfileInfo/>
        <MyPostContainer/>
    </div>
}

export default Profile;