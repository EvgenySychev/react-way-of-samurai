import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    post: [
        {id: 1, message: 'Hi? How are you?', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11}
    ]
}

it('length of post should be incremented', () => {
    let action = addPostActionCreator("it-kamasutra.com")


    let newState = profileReducer(state, action)

    expect(newState.post.length).toBe(3)
})

it('new post should be added', () => {
    let action = addPostActionCreator("it-kamasutra.com")

    let newState = profileReducer(state, action)

    expect(newState.post[2].message).toBe("it-kamasutra.com")
})

it('after deleting length of messages should be decrement', () => {
    let action = deletePost(1)

    let newState = profileReducer(state, action)

    expect(newState.post.length).toBe(1)
})