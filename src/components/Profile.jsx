import React from 'react';
import "./Profile.css";

const Profile = () => {
    return (
        <div className="content">
        <div>
          <img className="profile-cover" src="https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80" alt=""/>
        </div>
        <div>
          ava + descr
        </div>
        <div>
          my posts
          <div>
            new post
          </div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>
    );
}

export default Profile