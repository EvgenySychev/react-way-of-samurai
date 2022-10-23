import React from 'react'
import {InitialStateType, UserType} from "../../redux/users-reducer";
import {Paginator} from "../../common/components/Paginator/Paginator";
import {User} from "./User/User";
import style from "./Users.module.css"

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPages: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    usersPage: InitialStateType
    followingInProgress: Array<number>
}

export const Users = (props: UsersPropsType) => {

    return (
        <div>
            <Paginator
                currentPages={props.currentPages}
                onPageChanged={props.onPageChanged}
                totalItemsCount={props.totalUsersCount}
                pageSize={props.pageSize}
            />
            <div className={style.user}>
                {
                    props.usersPage.users.map(u => <User key={u.id}
                                                         user={u}
                                                         followingInProgress={props.followingInProgress}
                                                         follow={props.follow}
                                                         unfollow={props.unfollow}
                        />
                    )
                }
            </div>
        </div>
    )
}