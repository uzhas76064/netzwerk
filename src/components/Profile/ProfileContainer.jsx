import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from '../../redux/profileReducer'
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if(!userId) {
            userId = 2;
        }
        this.props.setUserProfile(userId);
    }

    render() {

        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

let dispatchedProps = {
    setUserProfile
}

export default compose(
    connect(mapStateToProps, dispatchedProps),
    withRouter,
    WithAuthRedirect
)(ProfileContainer);