import React from 'react';

import { NavLink } from 'react-router-dom';

import userPhoto from '../../../assets/images/user.png';

import style from './DialogItem.module.scss';

type DialogItemPropsType = {
  name: string;
  id: number;
};

const DialogItem = ({ id, name }: DialogItemPropsType) => {
  const path = `/dialogs/${id}`;

  return (
    <div className={style.dialogBlock}>
      <div>
        <NavLink to={path} className={style.dialogNav}>
          <div className={style.userImg}>
            <img src={userPhoto} alt="user" />
          </div>
          <div className={style.descriptionBlock}>
            <h4>{name}</h4>
            <p> Status status statussssssssssss status status status status </p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default DialogItem;
