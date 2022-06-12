type authReducerActionType = ReturnType<typeof setAuthUserData>
export type InitialStateType = {
    userId: number,
    email: string,
    login: string,
    isFetching: boolean,
    isAuth: boolean
}

const initialState = {
    userId: 2,
    email: '',
    login: '',
    isFetching: true,
    isAuth: false
}

const authReducer = (state: InitialStateType = initialState, action: authReducerActionType) : InitialStateType => {

    switch (action.type) {
        case "SET_USER_DATA" :
        return {
            ...state,
            ...action.data,
            isAuth: true
        }
        default:
            return state
    }

}

export const setAuthUserData = (usersId:number,email:string,login:string) => (
    {type: 'SET_USER_DATA', data: {usersId,email,login}} as const
)

export default authReducer;