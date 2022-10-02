import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {MyPostsPropsType} from "./MyPostsContainer";
import {useFormik} from "formik";

const MyPosts = (props: MyPostsPropsType) => {

    const formik = useFormik({
        initialValues: {
            newPostText:''
        },
        onSubmit: values => {
            props.addPost(values.newPostText)
        }
    })

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            My posts
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <textarea placeholder='Enter your message' {...formik.getFieldProps("newPostText")}
                              />
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