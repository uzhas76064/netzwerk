import React from 'react';
import "./Profile.css";
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts post={props.post}/>
        </div>
    );
}

export default Profile;