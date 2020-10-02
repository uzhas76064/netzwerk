import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../utils/validators/validators";

const maxLength100 = maxLength(100);

const MessageForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='input' validate={[required, maxLength100]} name='messageBody' placeholder="Введите сообщение"/>
            <button>Отправить</button>
        </form>
    );
};

export default reduxForm({form: 'messages'})(MessageForm);