import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus"
import {ProfilePropsType} from "../Profile";

const ProfileInfo = ({profile, status, updateStatus}: ProfilePropsType) => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={s.descriptionBlock}>
            <img src={profile.photos?.small}/>
            <ProfileStatus status={status} updateStatus={updateStatus}

            />
        </div>
    )
}

export default ProfileInfo;