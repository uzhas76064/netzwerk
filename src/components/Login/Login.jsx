import React from 'react';
import { reduxForm } from 'redux-form';
import {required} from "../../utils/validators/validators";
import FormControl, {createField} from "../common/FormControls/FormControls";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const Input = FormControl('input');

export const Login = ({isAuth, login}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe);
    }

    if (isAuth) {
        return <Redirect to='/profile'/>
    }

    return (
        <div>
            <h3>Login</h3>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField([required], 'email', 'email', Input, 'Email', null)}
            {createField([required], 'password', 'password', Input, 'Password', null)}
            {createField(null, 'rememberMe', 'checkbox', Input, null, 'remember me')}

            {error ? <div>{error}</div>:null}
            <button>Sign in</button>
        </form>
    );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);