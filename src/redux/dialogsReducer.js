import {SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY} from "./store";

let initialState = {
    dialogs: [
        {id: 1, name: "Павел"},
        {id: 2, name: "Андрей"},
        {id: 3, name: "Антон"},
        {id: 4, name: "Света"},
        {id: 5, name: "Таня"},
        {id: 6, name: "Артемий"},
    ],
    messages: [
        {id: 1, message: "Привет"},
        {id: 2, message: "Как дела с учебой?"},
        {id: 3, message: "Что делаешь?"},
        {id: 4, message: "Давай дружить"},
        {id: 6, message: "Зайдем сегодня в магазин?"}
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
             return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
             return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state;
    }
};
export const sendMessageCreator =() => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;
