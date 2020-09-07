import React from 'react';
import classes from './Users.module.css';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
export default class Users extends React.Component {
    dummyImg = 'https://dummyimage.com/75x75/c2c0c2/494a4f.png&text=No+image';

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                //this.props.setUsersTotalCount(response.data.totalCount)
            })
    }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
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
                                     onClick={() => this.onPageChanged(p)}
                                     className={this.props.currentPage === p && classes.selectedPage}>{p}</span>
                    })}
                </div>
                {
                    this.props.users.map(user => (
                        <div className={classes.user} key={user.id}>
                            <div>
                                <div className={classes.userImg}>
                                    <img src={user.photos.small !== null ? user.photos.small : this.dummyImg} alt=""/>
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
                                                            onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
                                        : <button className={classes.followBtn}
                                                  onClick={() => this.props.follow(user.id)}>Follow</button>
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}