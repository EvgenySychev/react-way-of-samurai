import {
    InitialStateType,
    setCurrentPage,
    UserType, toggleFollowingProgress, getUsersTC, follow, unfollow
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";

export type mapStatePropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type mapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type UsersPropsType = mapStatePropsType & mapDispatchPropsType

export class UsersContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPages, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {

        this.props.getUsersTC(pageNumber, this.props.pageSize)
    }



    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPages={this.props.currentPages}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   usersPage={this.props.usersPage}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainerWrapper = compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsersTC,
    })
)
(UsersContainer)

