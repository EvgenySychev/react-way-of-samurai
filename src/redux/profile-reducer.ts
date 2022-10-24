import {Dispatch} from "redux";
import {profileAPI, upDateProfileType, usersAPI} from "../api/api";

export type ProfilePageType = {
    post: Array<postDataType>
    newPostText: string
    status: string
    profile: ProfileType
    ownerProfile: ProfileType
}

export type ContactsProfileType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
    fullName: string
    contacts: ContactsProfileType
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
export type setUserProfileType = ReturnType<typeof setUserProfile>
export type setUserOwnerProfileType = ReturnType<typeof setUserOwnerProfile>
export type setStatusActionType = ReturnType<typeof setStatus>
export type deletePostActionType = ReturnType<typeof deletePost>
export type savePhotoSuccessActionType = ReturnType<typeof savePhotoSuccess>
export type upDateProfileSuccessActionType = ReturnType<typeof upDateProfileSuccess>

export type ActionProfileReducersTypes = AddPostActionType
    | setUserProfileType
    | setUserOwnerProfileType
    | setStatusActionType
    | deletePostActionType
    | savePhotoSuccessActionType
    | upDateProfileSuccessActionType

let initialState: ProfilePageType = {
    post: [
        {id: 1, message: 'Hi? How are you?', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11}
    ],
    newPostText: 'it-kamasutra',
    status: 'add yours status',
    profile: {
        userId: 0,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        aboutMe: '',
        fullName: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: ''
        },
        photos: {
            small: '',
            large: ''
        }
    },
    ownerProfile: {
        userId: 0,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        aboutMe: '',
        fullName: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: ''
        },
        photos: {
            small: '',
            large: ''
        }
    }
}

const profileReducer = (state = initialState, action: ActionProfileReducersTypes): ProfilePageType => {

    switch (action.type) {
        case "profile/ADD-POST": {
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
        case 'profile/SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile,
            }
        }
        case 'profile/SET_USER_OWNER_PROFILE': {
            return {
                ...state,
                ownerProfile: action.profile,
            }
        }

        case "profile/SET-STATUS": {
            return {...state, status: action.status}
        }

        case "profile/DELETE-POST": {
            return {...state, post: state.post.filter(p => p.id !== action.postId)}
        }

        case "profile/SAVE-PHOTO-SUCCESS": {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }

        case "profile/UPDATE-PROFILE-SUCCESS": {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    contacts: {...action.profile.contacts},
                    lookingForAJob: action.profile.lookingForAJob,
                    lookingForAJobDescription: action.profile.lookingForAJobDescription,
                    aboutMe: action.profile.aboutMe,
                    fullName: action.profile.fullName
                }
            }
        }
        default:
            return state
    }

}

export const addPostActionCreator = (newPostText: string) => {
    return {type: 'profile/ADD-POST', newPostText} as const
}

export const setUserProfile = (profile: ProfileType) => {
    return {type: 'profile/SET_USER_PROFILE', profile} as const
}

export const setUserOwnerProfile = (profile: ProfileType) => {
    return {type: 'profile/SET_USER_OWNER_PROFILE', profile} as const
}

export const setStatus = (status: string) => {
    return {type: 'profile/SET-STATUS', status: status} as const
}

export const deletePost = (postId: number) => {
    return {type: 'profile/DELETE-POST', postId} as const
}

export const savePhotoSuccess = (photos: any) => {
    return {type: 'profile/SAVE-PHOTO-SUCCESS', photos} as const
}

export const upDateProfileSuccess = (data: upDateProfileType) => {
    return {
        type: 'profile/UPDATE-PROFILE-SUCCESS',
        profile: {...data, contacts: data.contacts}
    } as const
}

export const getUserProfile = (userId: number) => async (dispatch: Dispatch, getState: any) => {
    const autorizedUserId = getState().auth.autorizedUserId
    const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
    if (response.data.userId === autorizedUserId) {
        dispatch(setUserOwnerProfile(response.data))
    }

}

export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    try {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    } catch (error) {
        alert(error)
    }
}

export const savePhoto = (file: string | Blob) => async (dispatch: Dispatch) => {
    try {
        const response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos))
        }
    } catch (error) {
        alert(error)
    }
}

export const upDateProfile = (data: upDateProfileType) => async (dispatch: Dispatch, getState: any) => {
    const userId = getState().auth.autorizedUserId
    const response = await profileAPI.upDateProfile(data)
    if (response.data.resultCode === 0) {
        // @ts-ignore
        dispatch(getUserProfile(userId))
    }
}

export default profileReducer;