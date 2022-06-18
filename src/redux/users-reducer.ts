
export type locationType = {
    city: string,
    country: string
}
export type UserType ={
    id:number,
    photos:PhotoAPIType,
    followed: boolean,
    name: string,
    status: string,
    location: locationType
}
export type PhotoAPIType = {
    small: string
    large: string
}
export type InitialStateType = {
    users:Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
export type FollowACType = ReturnType<typeof follow>
export type UnfollowACType = ReturnType<typeof unfollow>
export type SetUsersACType = ReturnType<typeof setUsers>
export type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export type setUsersTotalCountACType = ReturnType<typeof setTotalUsersCount>
export type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>

export type ActionUsersReducerTypes = FollowACType | UnfollowACType | SetUsersACType |setCurrentPageACType | setUsersTotalCountACType | toggleIsFetchingACType


const initialState:InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}



const usersReducer = (state = initialState, action: ActionUsersReducerTypes) : InitialStateType => {

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

export const follow = (usersID:number) => (
    {type: 'FOLLOW', usersID} as const
)

export const unfollow = (usersID:number) => (
    {type: 'UNFOLLOW', usersID} as const
)

export const setUsers = (users: Array<UserType>) => (
    {type: 'SETUSERS', users} as const
)

export const setCurrentPage = (currentPage:number) => (
    {type:'SET-CURRENT-PAGE',currentPage} as const
)

export const setTotalUsersCount = (totalUsersCount:number) => (
    {type:'SET-TOTAL-USERS-COUNT',count:totalUsersCount} as const
)

export const toggleIsFetching = (isFetching:boolean) => (
    {type:'TOGGLE_IS_FETCHING', isFetching} as const
)




export default usersReducer;