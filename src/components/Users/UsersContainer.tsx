import {followAC, InitialStateType, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Users} from "./Users";

type mapStatePropsType = {
    usersPage: InitialStateType
}

type mapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = mapStatePropsType & mapDispatchPropsType

const mapStateToProps = (state:AppStateType) : mapStatePropsType => {
    return {
        usersPage: state.usersPage
    }
}

const mapDispathToProps = (dispatch: Dispatch) : mapDispatchPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID:number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users:Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect (mapStateToProps,mapDispathToProps)(Users)