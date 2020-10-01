import {SEND_MESSAGE} from "./store";

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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
             return {
                ...state,
                messages: [...state.messages, {id: 6, message: action.messageBody}]
            }
        default:
            return state;
    }
};
export const sendMessageCreator = (messageBody) => ({type: SEND_MESSAGE, messageBody});

export default dialogsReducer;
