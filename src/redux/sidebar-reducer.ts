
export type SidebarType = {
    id: number
    name: string
    img: string
}
export type FriendsInSidebarType = {
    friendsInSidebar: Array<SidebarType>
}
export type ActionSidebarReducerTypes = {}

let initialState:FriendsInSidebarType = {
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

const sidebarReducer = (state = initialState, action:ActionSidebarReducerTypes): FriendsInSidebarType => {

    return {...state}
}

export default sidebarReducer;