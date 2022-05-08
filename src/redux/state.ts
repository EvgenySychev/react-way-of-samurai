export type DialogsItemPropsType = {
    name: string
    id: number
}
export type MessagesDataType = {
    message: string
    id: number
}
export type postDataType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    post: Array<postDataType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs:Array<DialogsItemPropsType>
    messages:Array<MessagesDataType>
}
export type SidebarType = {
    id: number
    name: string
    img: string
}
export type friendsInSidebarType = {
    friendsInSidebar: Array<SidebarType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: friendsInSidebarType
}
export type StoreType = {
    _state: RootStateType
    addPost: ()=> void
    updateNewPostText: ()=> void
    subscribe: ()=> void
}
/*export type ObserveType = {
    observer: (state:RootStateType) => void
}*/

let store = {
    _state: {
        profilePage: {
            post: [
                {id: 1, message: 'Hi? How are you?', likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 11}
            ],
            newPostText: 'it-kamasutra'
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
            ]
        },
        sidebar: {
            friendsInSidebar: [
                {id: 1, name: 'Anton', img: 'https://i.pinimg.com/originals/db/cd/82/dbcd82c005eb2be4ceacd2da92c47923.jpg'},
                {id: 2, name: 'Nikolay', img: 'http://behandsome.ru/wp-content/uploads/2021/01/Luke_Skywalker_Be_Handsome-1024x683.jpg'},
                {id: 3, name: 'Dasha', img: 'https://i.pinimg.com/originals/34/77/1f/34771ff82844cea6511e662ab1c6e198.jpg'}
            ]}
    },
    subscribe (observer:()=> void) {
        rerenderEntireTree = observer
    },

    addPost () {
        const newPost : postDataType = {
            id: new Date().getTime(),
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.newPostText = ''
        this._state.profilePage.post.push(newPost)
        rerenderEntireTree()
    },
    updateNewPostText (newText: string) {

        this._state.profilePage.newPostText = newText
        rerenderEntireTree()
    }
}

let rerenderEntireTree = () => {

}

export default store;