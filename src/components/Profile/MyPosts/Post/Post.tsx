
import s from './Post.module.css';

type PostPropsType = {
    message: string
    likesCount: number
}

const Post = (props:PostPropsType) => {
    return (
        <div className={s.item}>
            <img src='https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg' />
            { props.message }
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;