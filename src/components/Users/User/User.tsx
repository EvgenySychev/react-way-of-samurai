import React from 'react'
import style from "./User.module.css";
import userPhoto from "../../../assets/images/user.png";
import {UserType} from "../../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UserPropsType = {
    user: UserType
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    followingInProgress: Array<number>
}

export const User = ({user, followingInProgress, unfollow, follow}: UserPropsType) => {

    return (
        <div className={style.userBlock}>
            <div className={style.user}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={style.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                unfollow(user.id)
                            }}> Unfollow </button> :
                            <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                follow(user.id)
                            }}> Follow </button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>
                            {user.status
                                ? user.status
                                : "---------"
                            }
                        </div>
                        <div>{`ID ${user.id}`}</div>
                    </span>
                </span>
            </div>
        </div>)
}