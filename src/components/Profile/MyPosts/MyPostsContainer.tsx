import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

export type MyPostsPropsType = mapStatePropsType & mapDispatchPropsType
type postDataType = {
    id: number
    message: string
    likesCount: number
}
type mapStatePropsType = {
    posts: Array<postDataType>,
    newPostText: string
}
type mapDispatchPropsType = {
    addPost: (newPostBody:string) => void
}

const mapStateToProps = (state:AppStateType) : mapStatePropsType => {
    return {
        posts: state.profilePage.post,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch) : mapDispatchPropsType => {
    return {
        addPost: (newPostText:string) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

export const MyPostContainer = connect (mapStateToProps,mapDispatchToProps)(MyPosts)