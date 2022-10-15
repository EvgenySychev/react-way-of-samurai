
export type DialogsItemPropsType = {
    name: string
    id: number
}
export type MessagesDataType = {
    message: string
    id: number
}
export type SendMassageActionType = ReturnType<typeof sendMessageCreator>

export type ActionDialogsReducerTypes = SendMassageActionType

let initialState= {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ] as Array<DialogsItemPropsType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ] as Array<MessagesDataType>,
    newMessageBody: ""
}

export type initialDialogsStateType = typeof initialState

const dialogsReducer = (state = initialState, action: ActionDialogsReducerTypes) :initialDialogsStateType => {

    switch (action.type) {
        case "dialogs/SEND_MASSAGE": {
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: action.newMessageBody}]
            }
        }
        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody:string) => {
    return {type: 'dialogs/SEND_MASSAGE',newMessageBody} as const
}

export default dialogsReducer;