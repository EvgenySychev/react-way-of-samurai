
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {initialDialogsStateType, sendMessageCreator, upDateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Navigate} from "react-router-dom";
import React from "react";
import {WithAuthRedirectComponent} from "../../hoc/WithAuthRedirect";

export type DialogsPropsType = mapStatePropsType & mapDispatchPropsType

type mapStatePropsType = {
    dialogsPage: initialDialogsStateType

}
type mapDispatchPropsType = {
    onSendMessageClick: () => void
    onSendMessageChange: (text:string) => void
}

const mapStateToProps = (state:AppStateType) : mapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispathToProps = (dispatch: Dispatch) : mapDispatchPropsType => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageCreator())

        },
        onSendMessageChange: (text:string) => {
            dispatch(upDateNewMessageBodyCreator(text))
        }
    }
}

let AuthRedirectComponent = WithAuthRedirectComponent(Dialogs)

export const DialogsContainer = connect (mapStateToProps,mapDispathToProps)(AuthRedirectComponent)