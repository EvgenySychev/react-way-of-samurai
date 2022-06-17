
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import {MyPostContainer} from "./MyPosts/MyPostsContainer";
import {ProfileContainerPropsType} from "./ProfileContainer";

const Profile = (props: ProfileContainerPropsType) => {

    return (
    <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostContainer/>
    </div>
    )
}

export default Profile;