import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {required} from "../../utils/validators/validators";
import FormControl from "../common/FormControls/FormControls";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const Input = FormControl('input');

export const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to='/profile'/>
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
                <Field validate={[required]} name='email' type='email' component={Input} placeholder='Email'/>
            </div>
            <div>
                <Field validate={[required]} name='password' type='password' component={Input} placeholder='Password'/>
            </div>
            <div>
                <Field name='rememberMe' type='checkbox' component='input'/> remember me
            </div>
            {props.error ? <div>{props.error}</div>:null}
            <button>Sign in</button>
        </form>
    );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);