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
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {UserAPI} from "../../api/api";

let userAPI = new UserAPI();

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.setPreloader(true);
        userAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setPreloader(false);
                this.props.setUsers(data.items)
                //this.props.setUsersTotalCount(response.data.totalCount)
            })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.setPreloader(true);
        userAPI.getUsers(page, this.props.pageSize)
            .then(data => {
                this.props.setPreloader(false);
                this.props.setUsers(data.items)
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
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing,
        toggleIsFollowing: state.usersPage.toggleIsFollowing
    }
}

const dispatchedProps = {
    follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, setPreloader
};


const UsersContainer = connect(mapStateToProps, dispatchedProps)(UsersAPIComponent);

export default UsersContainer;