
export type ProfilePageType = {
    post: Array<postDataType>
    newPostText: string
    profile: ProfileType
}
export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob: false
    lookingForAJobDescription: string
    fullName: string
    userId: number
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

export const setUserProfile = (profile: any) => {
    return {type: 'SET_USER_PROFILE', profile} as const
}

export const upDateNewPostTextActionCreator = (text: string) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: text} as const
}

export default profileReducer;