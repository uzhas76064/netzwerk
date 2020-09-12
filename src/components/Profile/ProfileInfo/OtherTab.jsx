import React from 'react';
import classes from "./ProfileInfo.module.css";

const OtherTab = props => {
    return (
        <>
            <div className={classes.website}>
                <a href={props.profile.contacts.website}>
                    <i className="fa fa-globe" aria-hidden="true"></i>
                    <span>Website</span>
                </a>
            </div>
            <div className={classes.github}>
                <a href={props.profile.contacts.github}>
                    <i className="fa fa-github-square" aria-hidden="true"></i>
                    <span>Github</span>
                </a>
            </div>
        </>
    );
};

export default OtherTab;