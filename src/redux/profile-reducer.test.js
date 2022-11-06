import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer';

const state = {
  post: [
    { id: 1, message: 'Hi? How are you?', likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
  ],
};

it('length of post should be incremented', () => {
  const action = addPostActionCreator('it-kamasutra.com');

  const newState = profileReducer(state, action);

  expect(newState.post.length).toBe(3);
});

it('new post should be added', () => {
  const action = addPostActionCreator('it-kamasutra.com');

  const newState = profileReducer(state, action);

  expect(newState.post[2].message).toBe('it-kamasutra.com');
});

it('after deleting length of messages should be decrement', () => {
  const action = deletePost(1);

  const newState = profileReducer(state, action);

  expect(newState.post.length).toBe(1);
});
