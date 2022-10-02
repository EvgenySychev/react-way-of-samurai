import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {useFormik} from "formik";

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)

    const formik = useFormik({
        initialValues:{
            newMessageBody:''
        },
        onSubmit: values => {
            formik.resetForm()
            props.onSendMessage(values.newMessageBody)
        }
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <textarea
                             placeholder='Enter your message' {...formik.getFieldProps("newMessageBody")}/>
                    </div>
                    <div>
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>)
}

export default Dialogs;