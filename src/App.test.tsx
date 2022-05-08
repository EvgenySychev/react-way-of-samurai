import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import store from "././redux/state";


test('renders learn react link', () => {
  render(<App state={store._state} addPost={store.addPost.bind(store)} newPostText={store._state.profilePage.newPostText}
              updateNewPostText={store.updateNewPostText.bind(store)}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
