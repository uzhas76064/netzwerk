import React from "react"
import classes from './FormControls.module.css';

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

export default FormControl;