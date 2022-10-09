import {Dispatch} from "redux";
import {authAPI, LoginParamsType} from "../api/api";
import {setinitializedSuccess} from "./app-reducer";

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
    userId: 0,
    email: '',
    login: '',
    isFetching: true,
    isAuth: false
}

const authReducer = (state = initialState, action: authReducerActionType): InitialStateType => {

    switch (action.type) {
        case "auth/SET_USER_DATA" :
            return {
                ...state,
                ...action.data
            }
        case "auth/SET_IS_LOGGED_IN" :
            return {
                ...state,
                isAuth: action.isAuth
            }
        default:
            return state
    }
}

export const setAuthUserData = (usersId: number, email: string, login: string, isAuth: boolean) => (
    {type: 'auth/SET_USER_DATA', data: {usersId, email, login, isAuth}} as const
)

export const setIsLoggedInAC = (isAuth: boolean) => (
    {type: 'auth/SET_IS_LOGGED_IN', isAuth: isAuth} as const
)


export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
    dispatch(setinitializedSuccess())
}

export const loginTC = ({email, password, rememberMe}: LoginParamsType) => async (dispatch: Dispatch) => {
    let response = await authAPI.login({email, password, rememberMe})
    if (response.data.resultCode === 0) {
        // @ts-ignore
        dispatch(getAuthUserData())
    } else if (response.data.messages.length) {
        alert(response.data.messages[0])
    } else alert("some error")
}

export const logoutTC = () => async (dispatch: Dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(0, '', '', false))
    }
}

export default authReducer;