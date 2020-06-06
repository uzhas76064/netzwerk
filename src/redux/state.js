const state = {
    profilePage: {
        posts: [
            {id: 1, message: "Привет! Это мой первый пост в этой соц-сети", likesCount: 0},
            {id: 2, message: "Вау! Эта соц-сеть работает!!", likesCount: 10},
        ],
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
        ]
    }
};

export default state;