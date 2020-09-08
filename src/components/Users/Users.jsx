import React from 'react';
import classes from "./Users.module.css";
import {v4 as uuidv4} from "uuid";

const Users = props => {
    let dummyImg = 'https://dummyimage.com/75x75/c2c0c2/494a4f.png&text=No+image';
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <h2 className={classes.usersHeader}>Find new friends and make acquaintance!</h2>
            <div>
                {pages.map(p => {
                    return <span key={uuidv4()}
                                 onClick={() => props.onPageChanged(p)}
                                 className={props.currentPage === p && classes.selectedPage}>{p}</span>
                })}
            </div>
            {
                props.users.map(user => (
                    <div className={classes.user} key={user.id}>
                        <div>
                            <div className={classes.userImg}>
                                <img src={user.photos.small !== null ? user.photos.small : dummyImg} alt=""/>
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
                                user.followed ? <button className={classes.followBtn}
                                                        onClick={() => props.unfollow(user.id)}>Unfollow</button>
                                    : <button className={classes.followBtn}
                                              onClick={() => props.follow(user.id)}>Follow</button>
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Users;