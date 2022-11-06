import { useState } from 'react';

import { Preloader } from '../../../common/components/Preloader/Preloader';
import { ProfilePropsType } from '../Profile';

import { ProfileData } from './ProfileData';
import { ProfileDataForm } from './ProfileDataForm';
import { ProfileHeader } from './ProfileHeader';
import s from './ProfileInfo.module.css';

export const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
}: ProfilePropsType) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const setEditModeCallBack = (editModeDataForm: boolean) => {
    setEditMode(editModeDataForm);
  };

  return (
    <div className={s.descriptionBlock}>
      <ProfileHeader
        profile={profile}
        isOwner={isOwner}
        status={status}
        savePhoto={savePhoto}
        updateStatus={updateStatus}
      />
      {editMode ? (
        <ProfileDataForm profile={profile} setEditModeCallBack={setEditModeCallBack} />
      ) : (
        <ProfileData
          profile={profile}
          isOwner={isOwner}
          goToEditMode={() => {
            setEditMode(true);
          }}
        />
      )}
    </div>
  );
};
