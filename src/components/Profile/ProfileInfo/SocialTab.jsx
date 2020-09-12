import React from 'react';
import classes from "./ProfileInfo.module.css";

const SocialTab = props => {
    return (
        <>
            <div className={classes.facebook}>
                <a href={props.profile.contacts.facebook}>
                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                    <span>Facebook</span>
                </a>
            </div>
            <div className={classes.vk}>
                <a href={props.profile.contacts.vk}>
                    <i className="fa fa-vk" aria-hidden="true"></i>
                    <span>VKontakte</span>
                </a>
            </div>
            <div className={classes.twitter}>
                <a href={props.profile.contacts.twitter}>
                    <i className="fa fa-twitter-square" aria-hidden="true"></i>
                    <span>Twitter</span>
                </a>
            </div>
            <div className={classes.instagram}>
                <a href={props.profile.contacts.instagram}>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                    <span>Instagram</span>
                </a>
            </div>
            <div className={classes.youtube}>
                <a href={props.profile.contacts.youtube}>
                    <i className="fa fa-youtube-square" aria-hidden="true"></i>
                    <span>Youtube</span>
                </a>
            </div>
        </>
    );
};

export default SocialTab;