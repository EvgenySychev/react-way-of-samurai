import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";

const ProfileInfo = (props: any) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src='https://ophuket.ru/assets/images/freedom-beach.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small}/>
                ava + description
            </div>

        </div>
    )
}

export default ProfileInfo;