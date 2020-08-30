import {ADD_POST, SEND_MESSAGE, UPDATE_NEW_POST_TEXT} from './store'

const profileReducer = (state, action) => {
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

export const addPostActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text});

export default profileReducer;
