import React from 'react';
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src="https://img.icons8.com/dusk/64/000000/social-network.png" alt="logo" />
                <h1>SocialPeople</h1>
            </div>
        </header>
    );
}

export default Header;