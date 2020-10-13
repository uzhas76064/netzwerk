import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "../common/User/User";
import {v4 as uuidv4} from "uuid";

const Users = props => {
    return (
        <div>
            <Paginator totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}/>
            {
                props.users.map(user => (
                    <User follow={props.follow} unfollow={props.unfollow} key={uuidv4()} user={user}/>
                ))
            }
        </div>
    );
};

export default Users;