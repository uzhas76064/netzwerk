import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    let path = `/message/${props.id}`;

    return (
        <div className={classes.dialog}>
            <svg className="bi bi-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                 xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="8"/>
            </svg>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;