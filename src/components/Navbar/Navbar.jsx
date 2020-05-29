import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className="nav">
        <ul>
          <li className={classes.item}>
            <a href="/profile">Profile</a>
          </li>
          <li className={classes.item}>
            <a href="/messages">Messages</a>
          </li>
          <li className={classes.item}>
            <a href="/news">News</a>
          </li>
          <li className={classes.item}>
            <a href="/music">Music</a>
          </li>
          <li className={classes.item}>
            <a href="/settings">Settings</a>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar;