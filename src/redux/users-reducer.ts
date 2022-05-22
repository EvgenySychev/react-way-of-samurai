import {ActionTypes} from "./store";

export type locationType = {
    city: string,
    country: string
}

export type UserType ={
    id:number,
    photoURL:string,
    followed: boolean,
    fullName: string,
    status: string,
    location: locationType
}

export type InitialStateType = {
    users:Array<UserType>
}

const initialState:InitialStateType = {
    users: []
}

const usersReducer = (state: InitialStateType = initialState, action: ActionTypes) : InitialStateType => {

    switch (action.type) {
        case 'FOLLOW':
        return {
            ...state,
            users: state.users.map(u => {
                    if (u.id === action.usersID) {
                        return {...u,followed: true}
                    }
                    return u
            })
        }
        case 'UNFOLLOW':
        return {
        ...state,
                users: state.users.map(u => {
                if (u.id === action.usersID) {
                    return {...u,followed: false}
                }
                return u
            })
        }
        case 'SETUSERS' :
            return {
                ...state,
                users: [...state.users, ...action.users]}
        default:
            return state
    }

}

export const followAC = (usersID:number) => (
    {type: 'FOLLOW', usersID} as const
)

export const unfollowAC = (usersID:number) => (
    {type: 'UNFOLLOW', usersID} as const
)

export const setUsersAC = (users: Array<UserType>) => (
    {type: 'SETUSERS', users} as const
)


export default usersReducer;