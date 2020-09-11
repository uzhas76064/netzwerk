import React from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.item}>
                    <NavLink to="/profile">
                        <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                        <span>Profile</span>
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/users">
                        <i className="fa fa-users" aria-hidden="true"></i>
                        <span>Users</span>
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/messages">
                        <i className="fa fa-commenting-o" aria-hidden="true"></i>
                        <span>Messages</span>
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/news">
                        <i className="fa fa-newspaper-o" aria-hidden="true"></i>
                        <span>News</span>
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/music">
                        <i className="fa fa-music" aria-hidden="true"></i>
                        <span>Music</span>
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/settings">
                        <i className="fa fa-cogs" aria-hidden="true"></i>
                        <span>Settings</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;