import React from 'react'
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {InitialStateType, UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPages: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    usersPage: InitialStateType
    followingInProgress:Array<number>
}

let Users = (props: UsersPropsType) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span
                        className={props.currentPages === p ? styles.selectedPage : ''}
                        //здесь надо пофиксить, спан жирным не рисует
                        onClick={(e) => props.onPageChanged(p)}>-{p}
                    </span>
                })}
            </div>
            {
                props.usersPage.users.map(u => <div key={u.id}>

                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id ===u.id)} onClick={() => {
                                    props.unfollow(u.id)
                                }}> Unfollow </button>
                                : <button disabled={props.followingInProgress.some(id => id ===u.id)} onClick={() => {
                                    props.follow(u.id)
                                }}> Follow </button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                            <div>{`ID ${u.id}`}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users