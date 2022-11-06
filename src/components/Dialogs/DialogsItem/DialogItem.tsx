import React from 'react';

import { NavLink } from 'react-router-dom';

import s from '../Dialogs.module.css';

type DialogItemPropsType = {
  name: string;
  id: number;
};

const DialogItem = ({ id, name }: DialogItemPropsType) => {
  const path = `/dialogs/${id}`;

  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={path}> {name} </NavLink>
    </div>
  );
};

export default DialogItem;
