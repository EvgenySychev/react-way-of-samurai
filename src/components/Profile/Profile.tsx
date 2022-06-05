
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import {MyPostContainer} from "./MyPosts/MyPostsContainer";

const Profile = (props:any) => {
    return <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostContainer/>
    </div>
}

export default Profile;