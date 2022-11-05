import React from 'react';

import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';

import { WithAuthRedirectComponent } from '../../hoc/WithAuthRedirect';
import { initialDialogsStateType, sendMessageCreator } from '../../redux/dialogs-reducer';
import { AppStateType } from '../../redux/redux-store';

import Dialogs from './Dialogs';

export type DialogsPropsType = mapStatePropsType & mapDispatchPropsType;

type mapStatePropsType = {
  dialogsPage: initialDialogsStateType;
};
type mapDispatchPropsType = {
  onSendMessage: (newMessageBody: string) => void;
};

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispathToProps = (dispatch: Dispatch): mapDispatchPropsType => {
  return {
    onSendMessage: (newMessageBody: string) => {
      dispatch(sendMessageCreator(newMessageBody));
    },
  };
};

export const DialogsContainer = compose<React.ComponentType>(
  connect(mapStateToProps, mapDispathToProps),
  WithAuthRedirectComponent,
)(Dialogs);
