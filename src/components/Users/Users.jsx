import React from 'react';
import classes from './Users.module.css';

const Users = props => {
    return (
        <div>
            <h2 className={classes.usersHeader}>Find new friends and make acquaintance!</h2>
            {
                props.users.map(user => (
                    <div className={classes.user} key={user.id}>
                        <div>
                            <div className={classes.userImg}>
                                <img src={user.avatar} alt=""/>
                            </div>
                        </div>
                        <div className={classes.userInfo}>
                            <div className={classes.userDescription}>
                               <div><b>{user.fullName}</b></div>
                                <div><q>{user.status}</q></div>
                            </div>
                            <div className={classes.userLocation}>
                                <div>{user.location.state}</div>
                                <div>{user.location.city}</div>
                            </div>
                                {
                                    user.followed ? <button className={classes.followBtn}
                                            onClick={() => props.unfollow(user.id)}>Unfollow</button>
                                        :<button className={classes.followBtn}
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