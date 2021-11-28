import React from 'react';
import ReactDOM from 'react-dom';
import profileReducer, { addPostActionCreator } from './profile-reducer';

let state = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
        { id: 3, message: 'Blabla', likesCount: 11 },
        { id: 4, message: 'Dada', likesCount: 11 },
    ],
};

//

it('length of post should be incremented', () => {
    let action = addPostActionCreator('it-kamasutra');

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);
});

//

it('message of new post should be correct   ', () => {
    let action = addPostActionCreator('it-kamasutra');

    let newState = profileReducer(state, action);

    expect(newState.posts[4].message).toBe('it-kamasutra');
});
