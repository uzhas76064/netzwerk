import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setPreloader,
    setUsers,
    setUsersTotalCount,
    unfollow
} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.setPreloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true})
            .then(response => {
                this.props.setPreloader(false);
                this.props.setUsers(response.data.items)
                //this.props.setUsersTotalCount(response.data.totalCount)
            })
    }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        this.props.setPreloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`, {withCredentials: true})
            .then(response => {
                this.props.setPreloader(false);
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/>:null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const dispatchedProps = {
    follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, setPreloader
};


const UsersContainer = connect(mapStateToProps, dispatchedProps)(UsersAPIComponent);

export default UsersContainer;