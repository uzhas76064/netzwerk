let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Привет! Это мой первый пост в этой соц-сети", likesCount: 0},
                {id: 2, message: "Вау! Эта соц-сеть работает!!", likesCount: 10},
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
        }
    },

    _callSubscriber() {
        console.log("state changed");
    },
    _addPost(postMessage) {
        let post = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(post);
        this._callSubscriber(this._state);
    },
    getState() {
        return this._state;
    },
    _updateNewPostText(postText) {
        this._state.profilePage.newPostText = postText;
        this._callSubscriber(this._state);
    },


    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD_POST') {
           this._addPost();
        }
        else if (action.type === 'UPDATE_NEW_POST_TEXT') {
           this._updateNewPostText(action.postText)
        }
        else if (action.type === 'UPDATE_NEW_MESSAGE_BODY') {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }
        else if (action.type === 'SEND_MESSAGE') {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }
    }
};

export const sendMessageCreator =() => ({type: 'SEND_MESSAGE'});
export const updateNewMessageBodyCreator = (body) => ({type: 'UPDATE_NEW_MESSAGE_BODY', body: body});
export default store;
