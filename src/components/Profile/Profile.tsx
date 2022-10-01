
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import {MyPostContainer} from "./MyPosts/MyPostsContainer";
import {ProfileContainerPropsType} from "./ProfileContainer";

const Profile = (props: ProfileContainerPropsType) => {

    return (
    <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        {MyPostContainer}
    </div>
    )
}

export default Profile;