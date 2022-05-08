import s from './MyPosts.module.css';
import Post from './Post/Post';
import React, {ChangeEvent} from "react";
import {ActionTypes, addPostActionCreator, upDateNewPostTextActionCreator} from "../../../redux/state";

type postDataType = {
    id: number
    message: string
    likesCount: number
}

type postPropsType = {
    post: Array<postDataType>
    //addPost: () => void
    newPostText: string
    //updateNewPostText: (newText: string) => void
    dispatch: (action:ActionTypes)=> void
}

const MyPosts = (props: postPropsType) => {


    let postsElements = props.post.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(upDateNewPostTextActionCreator(e.currentTarget.value))
    }

    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;