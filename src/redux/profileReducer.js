import {ADD_POST, UPDATE_NEW_POST_TEXT} from './store'
import {ProfileAPI} from "../api/api";

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let profileAPI = new ProfileAPI();

let initialState = {
    posts: [
        {id: 1, postText: "Привет! Это мой первый пост в этой соц-сети", likesCount: 0},
        {id: 2, postText: "Вау! Эта соц-сеть работает!!", likesCount: 10},
    ],
    newPostText: "",
    profile: null,
    status: ''
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
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text});
export const setProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}

export const updateStatus = (ststus) => (dispatch) => {
    profileAPI.updateStatus(ststus)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setStatus(ststus))
            }
        })
}

export const setUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.fetchProfile(userId)
            .then(response => {
                dispatch(setProfile(response.data));
            })
    }
}

export default profileReducer;
