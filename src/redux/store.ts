import profileReducer, {
    addPostActionCreator,
    upDateNewPostTextActionCreator,
    setUserProfile,
    ProfileType
} from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer, {sendMessageCreator, upDateNewMessageBodyCreator} from "./dialogs-reducer";
import {
    follow,
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    toggleIsFetching,
    unfollow
} from "./users-reducer";

type DialogsItemPropsType = {
    name: string
    id: number
}
type MessagesDataType = {
    message: string
    id: number
}
type postDataType = {
    id: number
    message: string
    likesCount: number
}
type ProfilePageType = {
    post: Array<postDataType>
    newPostText: string
    profile:any
}
type DialogsPageType = {
    dialogs: Array<DialogsItemPropsType>
    messages: Array<MessagesDataType>
    newMessageBody: string
}
type SidebarType = {
    id: number
    name: string
    img: string
}
type friendsInSidebarType = {
    friendsInSidebar: Array<SidebarType>
}
type AddPostActionType = ReturnType<typeof addPostActionCreator>
type UpdateNewPostTextActionType = ReturnType<typeof upDateNewPostTextActionCreator>
type UpdateNewMessageBodyActionType = ReturnType<typeof upDateNewMessageBodyCreator>
type FollowACType = ReturnType<typeof follow>
type UnfollowACType = ReturnType<typeof unfollow>
type SetUsersACType = ReturnType<typeof setUsers>
type SendMassageActionType = ReturnType<typeof sendMessageCreator>
type setCurrentPageACType = ReturnType<typeof setCurrentPage>
type setUsersTotalCountACType = ReturnType<typeof setTotalUsersCount>
type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
type setUserProfileType = ReturnType<typeof setUserProfile>

type ActionProfileReducersTypes = AddPostActionType | setUserProfile | UpdateNewPostTextActionType
type ActionDialogsReducerTypes = SendMassageActionType| UpdateNewMessageBodyActionType
type ActionSidebarReducerTypes = {}

type ActionTypes = ActionProfileReducersTypes | ActionDialogsReducerTypes | ActionSidebarReducerTypes
type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: friendsInSidebarType
}
type StoreType = {
    state: RootStateType
    //addPost: () => void
    //updateNewPostText: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionTypes) => void
    getState: () => RootStateType
}
/*
let store:StoreType = {
    state: {
        profilePage: {
            post: [
                {id: 1, message: 'Hi? How are you?', likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 11}
            ],
            newPostText: 'it-kamasutra',
            profile:{} as ProfileType
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMessageBody: ""
        },
        sidebar: {
            friendsInSidebar: [
                {
                    id: 1,
                    name: 'Anton',
                    img: 'https://i.pinimg.com/originals/db/cd/82/dbcd82c005eb2be4ceacd2da92c47923.jpg'
                },
                {
                    id: 2,
                    name: 'Nikolay',
                    img: 'http://behandsome.ru/wp-content/uploads/2021/01/Luke_Skywalker_Be_Handsome-1024x683.jpg'
                },
                {
                    id: 3,
                    name: 'Dasha',
                    img: 'https://i.pinimg.com/originals/34/77/1f/34771ff82844cea6511e662ab1c6e198.jpg'
                }
            ]
        }
    },
    getState() {
        return this.state
    },
    subscribe(observer: () => void) {
        rerenderEntireTree = observer
    },
    dispatch(action: ActionTypes) {

        this.state.profilePage = profileReducer(this.state.profilePage, action)
        this.state.dialogsPage = dialogsReducer(this.state.dialogsPage, action)
        this.state.sidebar = sidebarReducer(this.state.sidebar, action)
        rerenderEntireTree()

    }
}*/

let rerenderEntireTree = () => {

}

//export default store;