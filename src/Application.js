import React from 'react';

import { UserSession, AppConfig } from 'blockstack';
import { configure, getConfig, User, UserGroup } from 'radiks';

import Menu from './compoentns/menu'



const userSession = new UserSession({
    appConfig: new AppConfig(['store_write', 'publish_data'])
});

configure({
    apiServer: 'http://localhost:1260',
    userSession
});


export default class Application extends React.Component {

    handleSignIn() {
        userSession.redirectToSignIn();
    }

    handleSignOut() {
        userSession.signUserOut(window.location.origin);
        window.location = window.location.origin;
    }

    componentWillMount(){
        if (userSession.isSignInPending()) {
            userSession.handlePendingSignIn().then((userData) => {
                console.log(userData);
                window.location = window.location.origin;
            });
          }
        // if(userSession.isUserSignedIn()){
        //     console.log(userSession.loadUserData().username)
        //     return;
        // }
        // if (userSession.isSignInPending()) {
        //     userSession.handlePendingSignIn().then((userData) => {
        //         console.log('WRF');
        //         User.createWithCurrentUser();
        //         //window.location = window.location.origin;
        //     })
        // }
    }

    render() {
        return (
            <div>
                <Menu userSession={userSession} handleSignOut={this.handleSignOut} handleSignIn={this.handleSignIn}/>
            </div>
        );
    }
}