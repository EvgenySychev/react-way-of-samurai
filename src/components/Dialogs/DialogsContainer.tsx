import {DialogsPageType, postDataType} from "../../redux/store";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {sendMessageCreator, upDateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

export type DialogsPropsType = mapStatePropsType & mapDispatchPropsType

type mapStatePropsType = {
    dialogsPage: DialogsPageType
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

export const DialogsContainer = connect (mapStateToProps,mapDispathToProps)(Dialogs)