import {ADD_POST, UPDATE_NEW_POST_TEXT} from './store'

let initialState = {
    posts: [
        {id: 1, postText: "Привет! Это мой первый пост в этой соц-сети", likesCount: 0},
        {id: 2, postText: "Вау! Эта соц-сеть работает!!", likesCount: 10},
    ],
    newPostText: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: 3,
                postText: state.newPostText,
                likesCount: 0
            };
            state.posts.push(post);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text});

export default profileReducer;
