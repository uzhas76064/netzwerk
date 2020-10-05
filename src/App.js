import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {setAuthUserData} from "./redux/authReducer";

class App extends React.Component {
    componentDidMount() {
        this.props.setAuthUserData();
    }

    render() {
        return (
            <>
                <HeaderContainer/>
                <div className="app-wrapper">
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/messages" render={() => <DialogsContainer/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>
                        <Route path='/login' component={Login}/>
                    </div>
                </div>
            </>
        );
    }
}

export default connect(null, {setAuthUserData})(App);
