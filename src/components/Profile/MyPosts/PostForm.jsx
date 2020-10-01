import React from 'react';
import {Field, reduxForm} from "redux-form";

const PostForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='postBody' component='textarea' cols="80" rows="10" />
            <button>Add post</button>
        </form>
    );
};

export default reduxForm({form: 'posts'})(PostForm);