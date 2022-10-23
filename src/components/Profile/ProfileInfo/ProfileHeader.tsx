import {ProfileStatus} from "./ProfileStatus";
import userPhoto from "../../../assets/images/user.png";
import {ProfilePropsType} from "../Profile";
import {ChangeEvent} from "react";
import style from "./ProfileHeader.module.scss"

export const ProfileHeader = ({profile, isOwner, status, savePhoto, updateStatus}:ProfilePropsType) => {

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            savePhoto(e.target.files[0])
        }
    }

    return <div className={style.profileHeaderBlock}>
        <div>
            <div>
                <img alt={profile.fullName} src={profile.photos?.small || userPhoto}/>
            </div>
            <div>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
            </div>
        </div>
        <div>
            <h2>
                {profile.fullName}
            </h2>
            <ProfileStatus status={status} updateStatus={updateStatus}/>
            <p>
                {profile.aboutMe}
            </p>
        </div>
    </div>
}