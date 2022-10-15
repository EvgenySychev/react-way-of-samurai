import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus"
import {ProfilePropsType} from "../Profile";
import userPhoto from "../../../assets/images/user.png";
import {ChangeEvent, useState} from "react";
import {ProfileDataForm} from "./ProfileDataForm";

type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}: ProfilePropsType) => {

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            savePhoto(e.target.files[0])
        }
    }

    const setEditModeCallBack = (editModeDataForm:boolean) => {
        setEditMode(editModeDataForm)
    }

    return (
        <div className={s.descriptionBlock}>
            <img src={profile.photos?.small || userPhoto}/>
            <ProfileStatus status={status} updateStatus={updateStatus}/>
            {editMode
                ? <ProfileDataForm
                    profile = {profile}
                    setEditModeCallBack={setEditModeCallBack}/>
                : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
                setEditMode(true)
            }}/>}
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}: any) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}
        <div>
            {profile.fullName}
        </div>
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? 'YES' : 'NO'}
        </div>
        <div>
            {profile.lookingForAJob &&
                <div>
                    <b>My skills and technologies</b> {profile.lookingForAJobDescription}
                </div>}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}
            />
        })}
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}: ContactPropsType) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;