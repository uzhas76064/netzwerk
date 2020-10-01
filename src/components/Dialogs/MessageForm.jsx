import React from 'react';
import {Field, reduxForm} from "redux-form";

const MessageForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='input' name='messageBody' placeholder="Введите сообщение"/>
            <button>Отправить</button>
        </form>
    );
};

export default reduxForm({form: 'messages'})(MessageForm);