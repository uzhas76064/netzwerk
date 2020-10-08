import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    unfollow
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    fetching, following,
    getCurrentPage,
    getPageSize,
    getTotalUsersCount,
    getUsersSelector, toggleFollowing
} from "../../redux/selectors/users-selectors";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page) => {
        this.props.getUsers(page, this.props.pageSize);
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

/*const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing,
        toggleIsFollowing: state.usersPage.toggleIsFollowing
    }
}*/

const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: fetching(state),
        isFollowing: following(state),
        toggleIsFollowing: toggleFollowing(state)
    }
}

const dispatchedProps = {
    follow, unfollow, setCurrentPage, getUsers,
};


const UsersContainer = connect(mapStateToProps, dispatchedProps)(UsersAPIComponent);

export default UsersContainer;