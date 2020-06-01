import React from 'react';
import Post from './Post/Post';
import classes from "../MyPosts/MyPosts.module.css";

const MyPosts = (props) => {
    let postsElements = props.post.map(post => <Post message={post.message} id={post.id} likesCount={post.likesCount}/>);

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div className={classes.addPost}>
                <textarea name="" id="" cols="80" rows="10"></textarea>
                <button>Добавить</button>
            </div>
            <div>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;