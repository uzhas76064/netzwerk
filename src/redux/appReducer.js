import {setAuthUserData} from "./authReducer";

const SET_INITIALIZING = 'SET_INITIALIZING';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZING:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const setInitializing = () => ({type: SET_INITIALIZING});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(setAuthUserData());

    Promise.all([promise])
        .then(() => {
            dispatch(setInitializing())
        })
}

export default appReducer;