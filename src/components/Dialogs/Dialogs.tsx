import React from 'react';

import { useFormik } from 'formik';

import s from './Dialogs.module.css';
import { DialogsPropsType } from './DialogsContainer';
import DialogItem from './DialogsItem/DialogItem';
import Message from './Message/Message';

type FormikErrorType = {
  newMessageBody?: string;
};

const Dialogs = ({ dialogsPage, onSendMessage }: DialogsPropsType) => {
  const dialogsElements = dialogsPage.dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} />
  ));

  const messagesElements = dialogsPage.messages.map(m => <Message message={m.message} />);

  const formik = useFormik({
    initialValues: {
      newMessageBody: '',
    },
    validate: values => {
      const errors: FormikErrorType = {};

      if (values.newMessageBody.length > 50) {
        errors.newMessageBody =
          'the message is too long, it may be less than 50 characters';
        values.newMessageBody = values.newMessageBody.slice(0, -1);
      }

      return errors;
    },
    onSubmit: values => {
      formik.resetForm();
      onSendMessage(values.newMessageBody);
    },
  });

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <textarea
              rows={7}
              cols={30}
              maxLength={51}
              placeholder="Enter your message, max 50 symbols"
              {...formik.getFieldProps('newMessageBody')}
            />
            {formik.errors.newMessageBody ? (
              <div style={{ color: 'indianred' }}>{formik.errors.newMessageBody}</div>
            ) : null}
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dialogs;
