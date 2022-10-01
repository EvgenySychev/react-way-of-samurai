import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus"

const ProfileInfo = (props: any) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos?.small}/>
            <ProfileStatus status={props.status}/>
        </div>
    )
}

export default ProfileInfo;