import s from './Post.module.css';

type PostPropsType = {
  message: string;
  likesCount: number;
};

const Post = ({ message, likesCount }: PostPropsType) => {
  return (
    <div className={s.item}>
      <img
        key=""
        src="https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg"
      />
      {message}
      <div>
        <span>like</span> {likesCount}
      </div>
    </div>
  );
};

export default Post;
