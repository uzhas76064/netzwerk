import React from 'react';
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    console.log(props.smallPhoto)

    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <h1>SocialPeople</h1>
                <div className={classes.loginBlock}>
                    { props.isAuth ?
                        (<div>
                            <span className={classes.currentUser}>{props.login}</span>
                            <button className={classes.logoutButton} onClick={props.logout}>Logout</button>
                        </div>) :
                        <NavLink to='/login'>Login</NavLink>
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;
