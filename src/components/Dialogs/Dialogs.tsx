import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import {
    ActionTypes,
    addPostActionCreator,
    DialogsPageType,
    sendMessageCreator,
    upDateNewMessageBodyCreator
} from "../.././redux/state";


type DialogsPropsType = {
    stateD: DialogsPageType
    dispatch: (action:ActionTypes)=> void
}


const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.stateD.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.stateD.messages.map(m => <Message message={m.message}/>)
    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())

    }
    let onSendMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(upDateNewMessageBodyCreator(e.currentTarget.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                        onChange={onSendMessageChange}
                        value={props.stateD.newMessageBody} placeholder='Enter your message'></textarea>
                        </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>)
}

export default Dialogs;