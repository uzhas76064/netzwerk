import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLength, minLength, required} from "../../../utils/validators/validators";
import FormControl from "../../common/FormControls/FormControls";

const Textarea = FormControl('textarea');

const maxLength200 = maxLength(200);
const minLength10 = minLength(10);

const PostForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[required, maxLength200, minLength10]} name='postBody' component={Textarea} />
            <button>Add post</button>
        </form>
    );
};

export default reduxForm({form: 'posts'})(PostForm);