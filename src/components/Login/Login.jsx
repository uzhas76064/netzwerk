import React from 'react';
import { Field, reduxForm } from 'redux-form';

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
                <Field name='username' type='text' component='input' placeholder='Username'/>
            </div>
            <div>
                <Field name='password' type='password' component='input' placeholder='Password'/>
            </div>
            <div>
                <Field name='rememberMe' type='checkbox' component='input'/> remember me
            </div>
            <button>Sign in</button>
        </form>
    );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);;

export default Login;