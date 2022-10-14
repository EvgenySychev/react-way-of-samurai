
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import {MyPostContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

export type ProfilePropsType = {
    profile: ProfileType
    status:string
    updateStatus: ()=> void
    isOwner: boolean
    savePhoto:(e:string | Blob) => void
}

const Profile = ({profile, status,updateStatus, isOwner, savePhoto}: ProfilePropsType) => {

    return (
    <div>
        <ProfileInfo
            isOwner={isOwner}
            profile={profile}
            status={status}
            updateStatus={updateStatus}
            savePhoto={savePhoto}/>
        <MyPostContainer/>
    </div>
    )
}

export default Profile;