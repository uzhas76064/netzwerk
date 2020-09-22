import {ADD_POST, UPDATE_NEW_POST_TEXT} from './store'
import {ProfileAPI} from "../api/api";
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let profileAPI = new ProfileAPI();

let initialState = {
    posts: [
        {id: 1, postText: "Привет! Это мой первый пост в этой соц-сети", likesCount: 0},
        {id: 2, postText: "Вау! Эта соц-сеть работает!!", likesCount: 10},
    ],
    newPostText: "",
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: 3,
                postText: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, post],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text});
export const setProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.fetchProfile(userId)
            .then(response => {
                dispatch(setProfile(response.data));
            })
    }
}

export default profileReducer;
