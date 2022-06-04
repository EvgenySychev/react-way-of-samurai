import React from 'react'
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {InitialStateType, UserType} from "../../redux/users-reducer";

type UsersPropsType = {
    totalUsersCount:number
    pageSize:number
    currentPages: number
    users:Array<UserType>
    onPageChanged: (pageNumber:number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    usersPage:InitialStateType
}

let Users = (props:UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i<= pagesCount; i++ ) {
        pages.push(i)
    }


    return (
        <div>
            <div>
                {pages.map(p=> {
                    if (props.currentPages) {
                        return <span className = {styles.selectedPage} onClick={(e)=> props.onPageChanged(p)} >{p}</span>
                    }

                })}
            </div>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            {/*<img src={u.photos.small != null ? u.photos.small : userPhoto}/>*/}
                            <img src={userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}> Unfollow </button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}> Follow </button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users