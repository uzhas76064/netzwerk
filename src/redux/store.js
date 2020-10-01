import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const ADD_POST = 'ADD_POST';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, postText: "Привет! Это мой первый пост в этой соц-сети", likesCount: 0},
                {id: 2, postText: "Вау! Эта соц-сеть работает!!", likesCount: 10},
            ],
            newPostText: ""
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },

    _callSubscriber() {
        console.log("state changed");
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};

export default store;
