import {Dispatch} from "redux";
import {authAPI, LoginParamsType} from "../api/api";

type authReducerActionType = setAuthUserDataActionType | setIsLoggedInACActionType
type setAuthUserDataActionType = ReturnType<typeof setAuthUserData>
type setIsLoggedInACActionType = ReturnType<typeof setIsLoggedInAC>
export type InitialStateType = {
    userId: number,
    email: string,
    login: string,
    isFetching: boolean,
    isAuth: boolean
}

const initialState = {
    userId: 7429,
    email: '',
    login: '',
    isFetching: true,
    isAuth: false
}

const authReducer = (state = initialState, action: authReducerActionType): InitialStateType => {

    switch (action.type) {
        case "SET_USER_DATA" :
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case "SET_IS_LOGGED_IN" :
            return {
                ...state,
                isAuth:action.isAuth
            }
        default:
            return state
    }
}

export const setAuthUserData = (usersId: number, email: string, login: string) => (
    {type: 'SET_USER_DATA', data: {usersId, email, login}} as const
)

export const setIsLoggedInAC = (isAuth:boolean) => (
    {type: 'SET_IS_LOGGED_IN',isAuth:isAuth} as const
)


export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
}

export const loginTC = ({email, password, rememberMe}:LoginParamsType) => (dispatch: Dispatch) => {
    authAPI.login({email, password, rememberMe})
        .then((response => {
            if (response.data.resultCode === 0) {
                dispatch(setIsLoggedInAC(true))
            }
        }))
}

export default authReducer;