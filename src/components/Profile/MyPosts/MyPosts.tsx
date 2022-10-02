import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {MyPostsPropsType} from "./MyPostsContainer";
import {useFormik} from "formik";

type FormikErrorType = {
    newPostText?: string
}

const MyPosts = (props: MyPostsPropsType) => {

    const formik = useFormik({
        initialValues: {
            newPostText: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (values.newPostText.length > 150) {
                errors.newPostText = 'the message is too long, it may be less than 150 characters';
                values.newPostText = values.newPostText.slice(0, -1)
            }
            return errors;
        },
        onSubmit: values => {
            formik.resetForm()
            props.addPost(values.newPostText)
        }
    })

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            My posts
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <textarea
                        rows={7}
                        cols={50}
                        maxLength={151}
                        placeholder='Enter your message, max 150 symbols'
                        {...formik.getFieldProps("newPostText")}
                    />
                    {formik.errors.newPostText ?
                        <div style={{color: 'indianred'}}>{formik.errors.newPostText}</div> : null}
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </form>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;