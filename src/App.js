import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Redirect, Route, Switch} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import WithSuspense from "./hoc/WithSuspense";

const ProfileContainer = React.lazy(() => import(`./components/Profile/ProfileContainer`));
const UsersContainer = React.lazy(() => import(`./components/Users/UsersContainer`));
const Login = React.lazy(() => import(`./components/Login/Login`));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <>
                <HeaderContainer/>
                <div className="app-wrapper">
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Switch>
                            <Route exact path='/' render={() => <Redirect to='profile'/>}/>
                            <Route path="/profile/:userId?" render={WithSuspense(ProfileContainer)}/>
                            <Route path="/messages" render={() => <DialogsContainer/>}/>
                            <Route path="/users" render={WithSuspense(UsersContainer)}/>
                            <Route path="/news" component={News}/>
                            <Route path="/music" component={Music}/>
                            <Route path="/settings" component={Settings}/>
                            <Route path='/login' render={WithSuspense(Login)}/>
                            <Route render={() => <div>404</div>}/>
                        </Switch>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);
