import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import classes from './Profile.module.css';

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo status={props.status} updateStatus={props.updateStatus} profile={props.profile}/>
            <MyPostsContainer store={props.store} />
        </div>
    );
};

export default Profile;
