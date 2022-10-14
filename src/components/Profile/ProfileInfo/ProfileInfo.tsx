import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus"
import {ProfilePropsType} from "../Profile";
import userPhoto from "../../../assets/images/user.png";
import {ChangeEvent} from "react";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}: ProfilePropsType) => {

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={s.descriptionBlock}>
            <img src={profile.photos?.small || userPhoto}/>
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
            <ProfileStatus status={status} updateStatus={updateStatus}

            />
        </div>
    )
}

export default ProfileInfo;