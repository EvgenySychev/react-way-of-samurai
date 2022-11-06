import React from 'react';

import preloader from '../../../assets/images/preloader.gif';

import style from './Preloader.module.scss';

export const Preloader = () => {
  return (
    <div className={style.preloader}>
      <img alt={preloader} src={preloader} />
    </div>
  );
};
