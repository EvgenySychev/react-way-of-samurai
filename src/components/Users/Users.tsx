import React from 'react';

import { Paginator } from '../../common/components/Paginator/Paginator';
import { InitialStateType } from '../../redux/users-reducer';

import { User } from './User/User';
import style from './Users.module.scss';

type UsersPropsType = {
  totalUsersCount: number;
  pageSize: number;
  onPageChanged: (pageNumber: number) => void;
  follow: (userID: number) => void;
  unfollow: (userID: number) => void;
  usersPage: InitialStateType;
  followingInProgress: Array<number>;
};

export const Users = ({
  totalUsersCount,
  pageSize,
  onPageChanged,
  follow,
  unfollow,
  usersPage,
  followingInProgress,
}: UsersPropsType) => {
  return (
    <div className={style.usersBlock}>
      <Paginator
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />
      <div className={style.user}>
        {usersPage.users.map(u => (
          <User
            key={u.id}
            user={u}
            followingInProgress={followingInProgress}
            follow={follow}
            unfollow={unfollow}
          />
        ))}
      </div>
    </div>
  );
};
