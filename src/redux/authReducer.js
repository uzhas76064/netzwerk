import {HeaderAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';


let headerAPI = new HeaderAPI();

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;
    }
}

export const setAuth = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: {userId, login, email, isAuth}});

export const setAuthUserData = () => (dispatch) => {
    return headerAPI.doAuth()
        .then(response => {
            if (response.resultCode === 0) {
                let {login, id, email} = response.data;
                dispatch(setAuth(id, email, login, true))
            }
        })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    headerAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuthUserData());
            } else {
                let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : 'Something went wrong';
                dispatch(stopSubmit('login', {_error: errorMessage}));
            }
        })
}

export const logout = () => (dispatch) => {
    headerAPI.logout()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
}

export default authReducer;