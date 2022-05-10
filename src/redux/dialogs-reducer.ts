import {ActionTypes, DialogsPageType} from "./state";

const dialogsReducer = (state: DialogsPageType, action:ActionTypes) => {


        if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            state.newMessageBody = action.body
        } else if (action.type === 'SEND_MASSAGE') {
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages = [...state.messages,{id: 6, message: body}]
        }

    return state
}

export const sendMessageCreator = () => {
    return {type: 'SEND_MASSAGE'} as const
}

export const upDateNewMessageBodyCreator = (body: string) => {
    return {type: 'UPDATE-NEW-MESSAGE-BODY', body:body} as const
}

export default dialogsReducer;