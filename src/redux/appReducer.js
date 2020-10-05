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

export const initialize = () => (dispatch) => {

}

export default appReducer;