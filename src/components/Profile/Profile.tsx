
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import {MyPostContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

export type ProfilePropsType = {
    profile: ProfileType
    status:string
    updateStatus: ()=> void
}

const Profile = ({profile, status,updateStatus}: ProfilePropsType) => {

    return (
    <div>
        <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
        <MyPostContainer/>
    </div>
    )
}

export default Profile;