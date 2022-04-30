
//import './Profile.css';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <div>
        <div>
            <img src='https://ophuket.ru/assets/images/freedom-beach.jpg' />
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>

    </div>
}

export default ProfileInfo;