import React from 'react';
import Post from './Post/Post';
import classes from "../MyPosts/MyPosts.module.css";
import {v4 as uuidv4} from 'uuid';

const MyPosts = (props) => {
    let newPostInput = React.createRef();

    let postsElements = props.posts.map(post => <Post key={uuidv4()} postText={post.postText} id={post.id} likesCount={post.likesCount}/>);

    const addPost = () => {
        props.addPost();
    };

    const onPostChange = () => {
        let postText = newPostInput.current.value;
        props.updateNewPostText(postText);
    };

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div className={classes.addPost}>
                <textarea onChange={onPostChange} value={props.newPostText} ref={newPostInput} cols="80" rows="10" />
                <button onClick={addPost}>Добавить</button>
            </div>
            <div className={classes.posts}>
                { postsElements }
            </div>
        </div>
    )
};

export default MyPosts;
