import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, setUserProfile, updateStatus} from '../../redux/profileReducer'
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if(!userId) {
            userId = 11558;
        }
        this.props.setUserProfile(userId);
        this.props.getStatus(userId)
    }

    render() {

        return <Profile {...this.props} updateStatus={this.props.updateStatus} status={this.props.status} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

let dispatchedProps = {
    setUserProfile,
    getStatus,
    updateStatus
}

export default compose(
    connect(mapStateToProps, dispatchedProps),
    withRouter,
    WithAuthRedirect
)(ProfileContainer);