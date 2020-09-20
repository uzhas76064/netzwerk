import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={classes.profileImageContainer}>

            </div>
            <div className={classes.descriptionBlock}>
                <q>{props.profile.aboutMe}</q>
                <img src={props.profile.photos.large} alt=""/>
            </div>
            <div className={classes.profileInfo}>
                <div className={classes.website}>
                    <a href={props.website}>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                        <span>Website</span>
                    </a>
                </div>
                <div className={classes.github}>
                    <a href={props.github}>
                        <i className="fa fa-github-square" aria-hidden="true"></i>
                        <span>Github</span>
                    </a>
                </div>
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
            </div>
            <div>
                Need a job: {props.profile.lookingForAJob ? 'YES':'NO'}
            </div>
        </div>
    )
}

export default ProfileInfo;