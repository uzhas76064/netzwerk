import React from 'react';
import classes from "../../Users/Users.module.css";
import {v4 as uuidv4} from "uuid";

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
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
                                 onClick={() => onPageChanged(p)}
                                 className={currentPage === p ? classes.selectedPage : null}>{p}</span>
                })}
            </div>
        </div>
    );
}

export default Paginator;