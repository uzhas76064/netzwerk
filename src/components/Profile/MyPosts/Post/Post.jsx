import React from 'react';
import classes from "./Post.module.css";

const Post = () => {
    return (
        <div className={classes.post}>
            <div className={classes.postContent}>
                <img src="https://img.icons8.com/plasticine/100/000000/user.png" alt=""/>
                <p>post1</p>
            </div>
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;