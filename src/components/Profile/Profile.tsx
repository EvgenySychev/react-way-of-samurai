
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import style from "./Profile.module.css"
import {MyPostContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

export type ProfilePropsType = {
    profile: ProfileType
    status:string
    updateStatus: ()=> void
    isOwner: boolean
    savePhoto:(e:string | Blob) => void
}

export const Profile = ({profile, status,updateStatus, isOwner, savePhoto}: ProfilePropsType) => {

    return (
    <div className={style.profileContainer}>
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