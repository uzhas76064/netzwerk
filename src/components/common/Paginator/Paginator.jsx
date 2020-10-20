import React, {useState} from 'react';
import classes from "./Paginator.module.css";
import {v4 as uuidv4} from "uuid";
import cn from 'classnames';


const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div>
            <h2>Find new friends and make acquaintance!</h2>
            <div className={classes.paginator}>
                { portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                    return <span key={uuidv4()}
                                 onClick={() => onPageChanged(p)}
                                 className={ cn({
                                     [classes.selectedPage]: currentPage === p
                                 }, classes.pageNumber) }>{p}</span>
                })}
                { portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }
            </div>
        </div>
    );
}

export default Paginator;