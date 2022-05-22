import {ActionTypes, DialogsPageType} from "./store";

export type DialogsItemPropsType = {
    name: string
    id: number
}
export type MessagesDataType = {
    message: string
    id: number
}

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

export type initialStateType = typeof initialState

const dialogsReducer = (state: initialStateType = initialState, action: ActionTypes) :initialStateType => {

    switch (action.type) {

        case "UPDATE-NEW-MESSAGE-BODY": {
            return {
                ...state,
                newMessageBody: action.body
            }
        }
        case "SEND_MASSAGE": {
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            }
        }

        default:
            return state
    }
}

export const sendMessageCreator = () => {
    return {type: 'SEND_MASSAGE'} as const
}

export const upDateNewMessageBodyCreator = (body: string) => {
    return {type: 'UPDATE-NEW-MESSAGE-BODY', body: body} as const
}

export default dialogsReducer;