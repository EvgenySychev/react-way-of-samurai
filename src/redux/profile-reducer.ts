import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

export type ProfilePageType = {
    post: Array<postDataType>
    newPostText: string
    profile: ProfileType
    status: string
}
export type ProfileType = {
    userId: number
    lookingForAJob: false
    lookingForAJobDescription: string
    aboutMe: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}
export type postDataType = {
    id: number
    message: string
    likesCount: number
}
export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type setUserProfile = ReturnType<typeof setUserProfile>
export type setStatusActionType = ReturnType<typeof setStatus>
export type deletePostActionType = ReturnType<typeof deletePost>

export type ActionProfileReducersTypes = AddPostActionType | setUserProfile | setStatusActionType | deletePostActionType

let initialState: ProfilePageType = {
    post: [
        {id: 1, message: 'Hi? How are you?', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11}
    ],
    newPostText: 'it-kamasutra',
    status: 'add yours status',
    profile: {} as ProfileType
}

const profileReducer = (state = initialState, action: ActionProfileReducersTypes): ProfilePageType => {

    switch (action.type) {
        case "ADD-POST": {
            let newPost: postDataType = {
                id: new Date().getTime(),
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                post: [...state.post, newPost],
                newPostText: ''
            }
        }
        case 'SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        case "SET-STATUS": {
            return { ...state, status: action.status}
        }

case "DELETE-POST": {
    return {...state, post: state.post.filter(p => p.id !== action.postId)}
}

        default:
            return state
    }

}

export const addPostActionCreator = (newPostText:string) => {
    return {type: 'ADD-POST',newPostText} as const
}

export const setUserProfile = (profile: ProfileType) => {
    return {type: 'SET_USER_PROFILE', profile} as const
}

export const setStatus = (status: string) => {
    return {type:'SET-STATUS',status:status} as const
}

export const deletePost = (postId: number) => {
    return {type:'DELETE-POST',postId} as const
}

export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    let response = await usersAPI.getProfile(userId)
            dispatch(setUserProfile(response.data))
}

export const getStatus = (userId:number) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getStatus(userId)
            dispatch(setStatus(response.data))
}

export const updateStatus = (status:string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
}

export default profileReducer;