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

let initialState:InitialStateType = {
    users: [
        {
            id: 1,
            photoURL: 'https://steamuserimages-a.akamaihd.net/ugc/1476569307443094470/E789887E031C11F6932BC48D7A46036846703AC8/?imw=512&amp;&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=false',
            followed: false,
            fullName: 'Dmitry',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photoURL: 'https://steamuserimages-a.akamaihd.net/ugc/1476569307443094470/E789887E031C11F6932BC48D7A46036846703AC8/?imw=512&amp;&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=false',
            followed: true,
            fullName: 'Sasha',
            status: 'I am a boss',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            photoURL: 'https://steamuserimages-a.akamaihd.net/ugc/1476569307443094470/E789887E031C11F6932BC48D7A46036846703AC8/?imw=512&amp;&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=false',
            followed: false,
            fullName: 'Andrew',
            status: 'I am a boss',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
    ]
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
    {type: 'SETUSERS', users}
)


export default usersReducer;