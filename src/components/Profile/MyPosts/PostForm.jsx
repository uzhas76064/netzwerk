import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators/validators";
import FormControl from "../../common/FormControls/FormControls";

const Textarea = FormControl('textarea');
const maxLength50 = maxLength(50);

const PostForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[required, maxLength50]} name='postBody' component={Textarea} />
            <button>Add post</button>
        </form>
    );
};

export default reduxForm({form: 'posts'})(PostForm);