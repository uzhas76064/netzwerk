import React from 'react';
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.postContent}>
                <img src="https://img.icons8.com/plasticine/100/000000/user.png" alt=""/>
                <p>{props.message}</p>
            </div>
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;