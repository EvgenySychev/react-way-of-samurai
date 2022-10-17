import {Dispatch} from "redux";
import {authAPI, LoginParamsType, securityAPI} from "../api/api";
import {setInitializedSuccess} from "./app-reducer";

type setAuthUserDataActionType = ReturnType<typeof setAuthUserData>
type setIsLoggedInACActionType = ReturnType<typeof setIsLoggedInAC>
type getCaptchaUrlSuccessActionType = ReturnType<typeof getCaptchaUrlSuccess>
type authReducerActionType =
    setAuthUserDataActionType
    | setIsLoggedInACActionType
    | getCaptchaUrlSuccessActionType
export type InitialStateType = {
    userId: number,
    email: string,
    login: string,
    isFetching: boolean,
    isAuth: boolean
    autorizedUserId: number
    captchaUrl: string
}

const initialState = {
    userId: 0,
    email: '',
    login: '',
    isFetching: true,
    isAuth: false,
    autorizedUserId: 0,
    captchaUrl: ''
}

const authReducer = (state = initialState, action: authReducerActionType): InitialStateType => {

    switch (action.type) {
        case "auth/SET_USER_DATA" :
            return {
                ...state,
                ...action.data,
                autorizedUserId: action.data.usersId
            }
        case "auth/SET_IS_LOGGED_IN" :
            return {
                ...state,
                isAuth: action.isAuth
            }
        case "auth/GET_CAPTCHA_URL_SUCCESS":
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state
    }
}

export const setAuthUserData = (usersId: number, email: string, login: string, isAuth: boolean) => (
    {type: 'auth/SET_USER_DATA', data: {usersId, email, login, isAuth}} as const
)

export const setIsLoggedInAC = (isAuth: boolean) => (
    {type: 'auth/SET_IS_LOGGED_IN', isAuth} as const
)

export const getCaptchaUrlSuccess = (captchaUrl: string) => (
    {type: 'auth/GET_CAPTCHA_URL_SUCCESS', captchaUrl} as const
)


export const getAuthUserData = () => async (dispatch: Dispatch) => {
    try {
        const response = await authAPI.me()
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
        dispatch(setInitializedSuccess())
    }
    catch (error) {
        alert(error)
    }
}

export const loginTC = ({
                            email,
                            password,
                            rememberMe,
                            captcha
                        }: LoginParamsType) => async (dispatch: Dispatch) => {
    try {
        const response = await authAPI.login({email, password, rememberMe, captcha})
        if (response.data.resultCode === 0) {
            // @ts-ignore
            dispatch(getAuthUserData())
        } else if (response.data.resultCode === 10) {
            // @ts-ignore
            dispatch(getCaptchaUrl())
        } else if (response.data.messages.length) {
            alert(response.data.messages[0])
        } else alert("some error")
    }
    catch (error) {
        alert(error)
    }
}

export const logoutTC = () => async (dispatch: Dispatch) => {
    try {
        const response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(0, '', '', false))
        }
    }
    catch (error) {
        alert(error)
    }
}

export const getCaptchaUrl = () => async (dispatch: Dispatch) => {
    try {
        const response = await securityAPI.getCaptchaUrl()
        const captchaUrl = response.data.url
        dispatch(getCaptchaUrlSuccess(captchaUrl))
    }
    catch (error) {
        alert(error)
    }
}

export default authReducer;