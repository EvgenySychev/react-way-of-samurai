import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import imgProfile from "./../../../assets/images/freedom-beach.jpg"

const ProfileInfo = (props: any) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div >
                <img className={s.img} src={imgProfile}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos?.small}/>
                ava + description
            </div>

        </div>
    )
}

export default ProfileInfo;