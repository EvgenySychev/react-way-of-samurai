import s from './ProfileInfo.module.css';
import {Preloader} from "../../../common/components/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus"
import {ProfilePropsType} from "../Profile";
import userPhoto from "../../../assets/images/user.png";
import {ChangeEvent, useState} from "react";
import {ProfileDataForm} from "./ProfileDataForm";
import {ProfileData} from "./ProfileData";

export const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}: ProfilePropsType) => {

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            savePhoto(e.target.files[0])
        }
    }

    const setEditModeCallBack = (editModeDataForm: boolean) => {
        setEditMode(editModeDataForm)
    }

    return (
        <div className={s.descriptionBlock}>
            <img src={profile.photos?.small || userPhoto}/>
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
            <ProfileStatus status={status} updateStatus={updateStatus}/>
            {editMode
                ? <ProfileDataForm
                    profile={profile}
                    setEditModeCallBack={setEditModeCallBack}/>
                : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
                    setEditMode(true)
                }}/>}
        </div>
    )
}
