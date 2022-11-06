import React from 'react';

import { useFormik } from 'formik';

import s from './MyPosts.module.css';
import { MyPostsPropsType } from './MyPostsContainer';
import Post from './Post/Post';

type FormikErrorType = {
  newPostText?: string;
};

export const MyPosts = React.memo((props: MyPostsPropsType) => {
  const formik = useFormik({
    initialValues: {
      newPostText: '',
    },
    validate: values => {
      const errors: FormikErrorType = {};

      if (values.newPostText.length > 150) {
        errors.newPostText =
          'the message is too long, it may be less than 150 characters';
        values.newPostText = values.newPostText.slice(0, -1);
      }

      return errors;
    },
    onSubmit: values => {
      formik.resetForm();
      props.addPost(values.newPostText);
    },
  });

  const postsElements = [...props.posts]
    .reverse()
    .map(p => <Post message={p.message} likesCount={p.likesCount} />);

  return (
    <div className={s.postsBlock}>
      My posts
      <form onSubmit={formik.handleSubmit}>
        <div>
          <textarea
            rows={7}
            cols={50}
            maxLength={151}
            placeholder="Enter your message, max 150 symbols"
            {...formik.getFieldProps('newPostText')}
          />
          {formik.errors.newPostText ? (
            <div style={{ color: 'indianred' }}>{formik.errors.newPostText}</div>
          ) : null}
        </div>
        <div>
          <button type="submit">Add post</button>
        </div>
      </form>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});
