import s from './ProfileInfo.module.css';
import {Preloader} from "../../../common/components/Preloader/Preloader";
import {ProfilePropsType} from "../Profile";
import {useState} from "react";
import {ProfileDataForm} from "./ProfileDataForm";
import {ProfileData} from "./ProfileData";
import {ProfileHeader} from "./ProfileHeader";

export const ProfileInfo = ({
                                profile,
                                status,
                                updateStatus,
                                isOwner,
                                savePhoto
                            }: ProfilePropsType) => {

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const setEditModeCallBack = (editModeDataForm: boolean) => {
        setEditMode(editModeDataForm)
    }

    return (
        <div className={s.descriptionBlock}>
            <ProfileHeader profile={profile}
                           isOwner={isOwner}
                           status={status}
                           savePhoto={savePhoto}
                           updateStatus={updateStatus}/>
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
