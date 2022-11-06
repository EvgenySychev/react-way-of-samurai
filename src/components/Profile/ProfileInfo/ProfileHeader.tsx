import { ChangeEvent } from 'react';

import userPhoto from '../../../assets/images/user.png';
import { ProfilePropsType } from '../Profile';

import style from './ProfileHeader.module.scss';
import { ProfileStatus } from './ProfileStatus';

export const ProfileHeader = ({
  profile,
  isOwner,
  status,
  savePhoto,
  updateStatus,
}: ProfilePropsType) => {
  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div className={style.profileHeaderBlock}>
      <div className={style.profileImgBlock}>
        <div>
          <img alt={profile.fullName} src={profile.photos?.small || userPhoto} />
        </div>
        <div>{isOwner && <input type="file" onChange={onMainPhotoSelected} />}</div>
      </div>
      <div>
        <h2>{profile.fullName}</h2>
        <ProfileStatus isOwner={isOwner} status={status} updateStatus={updateStatus} />
        <p>{profile.aboutMe}</p>
      </div>
    </div>
  );
};
