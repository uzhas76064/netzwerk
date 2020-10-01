import React from 'react';
import Post from './Post/Post';
import classes from "../MyPosts/MyPosts.module.css";
import {v4 as uuidv4} from 'uuid';
import PostForm from "./PostForm";

const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post key={uuidv4()} postText={post.postText} id={post.id} likesCount={post.likesCount}/>);

    const addPost = (values) => {
        props.addPost(values.postBody);
    };

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div className={classes.addPost}>
                <PostForm onSubmit={addPost}/>
            </div>
            <div className={classes.posts}>
                { postsElements }
            </div>
        </div>
    )
};

export default MyPosts;
