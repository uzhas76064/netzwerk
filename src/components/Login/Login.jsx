import React from 'react';
import { reduxForm } from 'redux-form';
import {required} from "../../utils/validators/validators";
import FormControl, {createField} from "../common/FormControls/FormControls";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {login} from "../../redux/authReducer";

const Input = FormControl('input');

export const Login = ({isAuth, login, captchaUrl}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (isAuth) {
        return <Redirect to='/profile'/>
    }

    return (
        <div>
            <h3>Login</h3>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    );
};

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField([required], 'email', 'email', Input, 'Email', null)}
            {createField([required], 'password', 'password', Input, 'Password', null)}
            {createField(null, 'rememberMe', 'checkbox', Input, null, 'remember me')}

            {error ? <div>{error}</div>:null}

            {captchaUrl ? <img src={captchaUrl} alt=""/>:null}
            {captchaUrl ? createField([required], 'captcha', 'text', Input, 'Captcha'):null}

            <button>Sign in</button>
        </form>
    );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captcha,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);