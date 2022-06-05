import {ActionTypes} from "./store";

export type locationType = {
    city: string,
    country: string
}

export type UserType ={
    id:number,
    photos:string,
    followed: boolean,
    name: string,
    status: string,
    location: locationType
}

export type InitialStateType = {
    users:Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const initialState:InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
                users: action.users}

        case 'SET-CURRENT-PAGE' :
            return {
                ...state,
                currentPage: action.currentPage}
        case 'SET-TOTAL-USERS-COUNT' :
            return {
                ...state,
                totalUsersCount: action.count}
        case 'TOGGLE_IS_FETCHING' :
            return {
                ...state,
                isFetching: action.isFetching
            }

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

export const setCurrentPageAC = (currentPage:number) => (
    {type:'SET-CURRENT-PAGE',currentPage} as const
)

export const setUsersTotalCountAC = (totalUsersCount:number) => (
    {type:'SET-TOTAL-USERS-COUNT',count:totalUsersCount} as const
)

export const toggleIsFetchingAC = (isFetching:boolean) => (
    {type:'TOGGLE_IS_FETCHING', isFetching} as const
)




export default usersReducer;