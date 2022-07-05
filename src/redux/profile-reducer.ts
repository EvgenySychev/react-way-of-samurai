import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type ProfilePageType = {
    post: Array<postDataType>
    newPostText: string
    profile: ProfileType
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
export type UpdateNewPostTextActionType = ReturnType<typeof upDateNewPostTextActionCreator>

export type ActionProfileReducersTypes = AddPostActionType | setUserProfile | UpdateNewPostTextActionType

let initialState: ProfilePageType = {
    post: [
        {id: 1, message: 'Hi? How are you?', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11}
    ],
    newPostText: 'it-kamasutra',
    profile: {} as ProfileType
}

const profileReducer = (state = initialState, action: ActionProfileReducersTypes): ProfilePageType => {

    switch (action.type) {
        case "ADD-POST": {
            let newPost: postDataType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                post: [...state.post, newPost],
                newPostText: ''
            }
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case 'SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }

}

export const addPostActionCreator = () => {
    return {type: 'ADD-POST'} as const
}

export const setUserProfile = (profile: ProfileType) => {
    return {type: 'SET_USER_PROFILE', profile} as const
}

export const upDateNewPostTextActionCreator = (text: string) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: text} as const
}

export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}

export default profileReducer;