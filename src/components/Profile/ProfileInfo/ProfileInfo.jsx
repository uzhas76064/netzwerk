import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={classes.profileImage}
                     src="https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
                     alt=""/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + descr
            </div>
        </div>
    )
}

export default ProfileInfo;