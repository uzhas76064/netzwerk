import React from 'react';
import Post from './Post/Post';
import classes from "../MyPosts/MyPosts.module.css";

const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div className={classes.addPost}>
                <textarea name="" id="" cols="80" rows="10"></textarea>
                <button>Добавить</button>
            </div>
            <div>
                <Post message="Привет! Это мой первый пост в этой соц-сети"/>
                <Post message="Вау! Эта соц-сеть работает!!"/>
            </div>
        </div>
    )
}

export default MyPosts;