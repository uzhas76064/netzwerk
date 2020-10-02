import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {required} from "../../utils/validators/validators";
import FormControl from "../common/FormControls/FormControls";

const Input = FormControl('input');

export const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <h3>Login</h3>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required]} name='username' type='text' component={Input} placeholder='Username'/>
            </div>
            <div>
                <Field validate={[required]} name='password' type='password' component={Input} placeholder='Password'/>
            </div>
            <div>
                <Field name='rememberMe' type='checkbox' component='input'/> remember me
            </div>
            <button>Sign in</button>
        </form>
    );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default Login;