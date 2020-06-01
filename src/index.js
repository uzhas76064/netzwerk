import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

let posts = [
    {id: 1, message: "Привет! Это мой первый пост в этой соц-сети", likesCount: 0},
    {id: 2, message: "Вау! Эта соц-сеть работает!!", likesCount: 10},
];

let dialogs = [
    {id: 1, name: "Павел"},
    {id: 2, name: "Андрей"},
    {id: 3, name: "Антон"},
    {id: 4, name: "Света"},
    {id: 5, name: "Таня"},
    {id: 6, name: "Артемий"},
];

let messages = [
    {id: 1, message: "Привет"},
    {id: 2, message: "Как дела с учебой?"},
    {id: 3, message: "Что делаешь?"},
    {id: 4, message: "Давай дружить"},
    {id: 6, message: "Зайдем сегодня в магазин?"}
];

ReactDOM.render(
    <BrowserRouter>
        <App d={dialogs} m={messages} post={posts}/>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
