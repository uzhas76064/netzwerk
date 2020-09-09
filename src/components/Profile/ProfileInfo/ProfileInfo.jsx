import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img className={classes.profileImage}
                     src="https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
                     alt=""/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                <p>{props.profile.aboutMe}</p>
            </div>
            <div>
                <div>Facebook: {props.profile.contacts.facebook}</div>
                <div>Website: {props.profile.contacts.website}</div>
                <div>VK: {props.profile.contacts.vk}</div>
                <div>Twitter: {props.profile.contacts.twitter}</div>
                <div>Instagram: {props.profile.contacts.instagram}</div>
                <div>Youtube: {props.profile.contacts.youtube}</div>
                <div>Github: {props.profile.contacts.github}</div>
            </div>
            <div>
                Need a job: {props.profile.lookingForAJob ? 'YES':'NO'}
            </div>
        </div>
    )
}

export default ProfileInfo;