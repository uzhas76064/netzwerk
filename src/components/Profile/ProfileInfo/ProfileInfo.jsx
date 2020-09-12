import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import {NavLink, Route} from "react-router-dom";
import SocialTab from "./SocialTab";
import OtherTab from "./OtherTab";

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
            <div className={classes.tabs}>
                <NavLink to='#social-networks'>
                    <span>Social</span>
                </NavLink>
                <NavLink to='#other'>
                    <span>Other</span>
                </NavLink>
            </div>
            <div className={classes.profileInfo}>
                <Route path='#ocial-networks' render={() => <SocialTab/>}/>
                <Route path='#other' render={() => <OtherTab/>}/>
            </div>
            <div>
                Need a job: {props.profile.lookingForAJob ? 'YES':'NO'}
            </div>
        </div>
    )
}

export default ProfileInfo;