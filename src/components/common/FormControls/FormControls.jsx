import React from "react"
import classes from './FormControls.module.css';
import {Field} from "redux-form";

const FormControl = (Component) => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <>
            <div className={classes.formControl + ' ' + (hasError ? classes.error : null)}>
                <Component {...input} {...props}/>
            </div>
            {hasError ? <div className={classes.errorText}>{meta.error}</div>: null}
        </>
    )
}

export  const createField = (validators, name, type, component, placeholder, text) => {
    return (
       <div>
           <Field validate={validators} name={name} type={type}
                  component={component} placeholder={placeholder}/>{text}
       </div>
    )
}

export default FormControl;