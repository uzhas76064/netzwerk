import React from 'react';
import "./Profile.css";
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
        <div>
          <img className="profile-cover" src="https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80" alt=""/>
        </div>
        <div>
          ava + descr
        </div>
        <MyPosts/>
      </div>
    );
}

export default Profile