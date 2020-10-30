import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, setUserProfile, updateStatus, uploadPhoto} from '../../redux/profileReducer'
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.PureComponent {
    updateProfile = () => {
        let userId = this.props.match.params.userId;

        if(!userId) {
            userId = this.props.userId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }

        this.props.setUserProfile(userId);
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.updateProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId ) {
            this.updateProfile();
        }
    }

    render() {
        return <Profile {...this.props}
                        uploadPhoto={this.props.uploadPhoto}
                        isOwner={!this.props.match.params.userId}
                        updateStatus={this.props.updateStatus}
                        status={this.props.status}
                        profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

let dispatchedProps = {
    setUserProfile,
    getStatus,
    updateStatus,
    uploadPhoto
}

export default compose(
    connect(mapStateToProps, dispatchedProps),
    withRouter,
    WithAuthRedirect
)(ProfileContainer);