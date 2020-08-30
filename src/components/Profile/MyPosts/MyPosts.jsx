import React from 'react';
import Post from './Post/Post';
import classes from "../MyPosts/MyPosts.module.css";
import {updateNewPostTextActionCreator} from "../../../redux/profileReducer";

const MyPosts = (props) => {
    let newPostInput = React.createRef();

    let postsElements = props.post.map(post => <Post postText={post.postText} id={post.id} likesCount={post.likesCount}/>);

    const addPost = () => {
        props.dispatch({type: 'ADD_POST'});
        newPostInput.current.value = "";
    };

    const onPostChange = () => {
        let postText = newPostInput.current.value;
        props.dispatch(updateNewPostTextActionCreator(postText));
    };

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div className={classes.addPost}>
                <textarea onChange={onPostChange} value={props.newPostText} ref={newPostInput} cols="80" rows="10" />
                <button onClick={addPost}>Добавить</button>
            </div>
            <div>
                { postsElements }
            </div>
        </div>
    )
};

export default MyPosts;
