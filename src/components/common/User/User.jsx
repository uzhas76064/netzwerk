import React from 'react';
import classes from "../../Users/Users.module.css";
import {NavLink} from "react-router-dom";

const User = ({user, follow, unfollow}) => {
    let dummyImg = 'https://dummyimage.com/75x75/c2c0c2/494a4f.png&text=No+image';

    return (
        <div className={classes.user} key={user.id}>
            <div>
                <div className={classes.userImg}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small !== null ? user.photos.small : dummyImg} alt=""/>
                    </NavLink>
                </div>
            </div>
            <div className={classes.userInfo}>
                <div className={classes.userDescription}>
                    <div><b>{user.name}</b></div>
                    <div><q>{user.status}</q></div>
                </div>
                <div className={classes.userLocation}>
                    <div>{"user.location.state"}</div>
                    <div>{"user.location.city"}</div>
                </div>
                {
                    user.followed ? <button className={classes.followBtn} onClick={() => unfollow(user.id)}>Unfollow</button>
                        : <button className={classes.followBtn} onClick={() => follow(user.id)}>Follow</button>
                }
            </div>
        </div>
    );
};

export default User;