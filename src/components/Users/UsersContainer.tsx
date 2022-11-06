import React from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { Preloader } from '../../common/components/Preloader/Preloader';
import { AppStateType } from '../../redux/redux-store';
import {
  InitialStateType,
  setCurrentPage,
  UserType,
  toggleFollowingProgress,
  getUsersTC,
  follow,
  unfollow,
} from '../../redux/users-reducer';

import { Users } from './Users';

export type mapStatePropsType = {
  usersPage: InitialStateType;
  pageSize: number;
  totalUsersCount: number;
  isFetching: boolean;
  followingInProgress: Array<number>;
};

type mapDispatchPropsType = {
  follow: (userID: number) => void;
  unfollow: (userID: number) => void;
  setUsers: (users: Array<UserType>) => void;
  setCurrentPage: (pageNumber: number) => void;
  setTotalUsersCount: (totalCount: number) => void;
  toggleIsFetching: (isFetching: boolean) => void;
};

export type UsersPropsType = mapStatePropsType & mapDispatchPropsType;

export class UsersContainer extends React.Component<any, any> {
  componentDidMount() {
    this.props.getUsersTC(this.props.currentPages, this.props.pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsersTC(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            usersPage={this.props.usersPage}
            followingInProgress={this.props.followingInProgress}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
  return {
    usersPage: state.usersPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export const UsersContainerWrapper = compose<React.ComponentType>(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsersTC,
  }),
)(UsersContainer);
