import React from 'react';
import { useGlobal } from 'reactn';
import { UserSession, AppConfig } from 'blockstack';
import { configure, getConfig, User, UserGroup } from 'radiks';
import { Board } from './compoentns/board';
import Menu from './compoentns/menu';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { CreateRuleElement } from './compoentns/models/createRule';
import { JGeneralInfo } from './compoentns/jumbotron/generalInfo';
import JCreateRule from './compoentns/jumbotron/createRule';
import { CreateConditionElement } from './compoentns/models/createCondition';
import { CreateActionElement } from './compoentns/models/createAction';

const userSession = new UserSession({
    appConfig: new AppConfig(['store_write', 'publish_data'])
});

configure({
    apiServer: 'http://localhost:1260',
    userSession
});

const styles = {
    root: {
        flexGrow: 1
    }
};

function handleSignIn() {
    userSession.redirectToSignIn();
}

function handleSignOut() {
    userSession.signUserOut(window.location.origin);
    window.location = window.location.origin;
}

function componentWillMount() {
    if (userSession.isSignInPending()) {
        userSession.handlePendingSignIn().then((userData) => {
            User.createWithCurrentUser().then(cred => {
                console.log(userData);
                window.location = window.location.origin;
            });
        });
    }
}

const Application= () => {
    
    const mount = componentWillMount();
    
    return (
        <Router>
            <div style={styles.root}>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Menu userSession={userSession} handleSignOut={handleSignOut} handleSignIn={handleSignIn} />
                    </Grid>

                    <Grid item xs={12}>
                        <Route path="/" exact component={JGeneralInfo} />
                        <Route path="/create-rule/" component={JCreateRule} />
                    </Grid>

                    <Grid item xs={12}>
                        <Route path="/" exact component={Board} />
                        <Route path="/create-rule/condition" component={CreateConditionElement} />
                        <Route path="/create-rule/action" component={CreateActionElement} />
                    </Grid>
                </Grid>
            </div>
        </Router>

    );
}

export default Application;

// export default class Application extends React.Component {

//     handleSignIn() {
//         userSession.redirectToSignIn();
//     }

//     handleSignOut() {
//         userSession.signUserOut(window.location.origin);
//         window.location = window.location.origin;
//     }

//     componentWillMount() {
//         if (userSession.isSignInPending()) {
//             userSession.handlePendingSignIn().then((userData) => {
//                 User.createWithCurrentUser().then(cred => {
//                     console.log(userData);
//                     window.location = window.location.origin;
//                 });
//             });
//         }
//     }

//     render() {
//         return (
//             <Router>
//                 <div style={styles.root}>
//                     <Grid container spacing={0}>
//                         <Grid item xs={12}>
//                             <Menu userSession={userSession} handleSignOut={this.handleSignOut} handleSignIn={this.handleSignIn} />
//                         </Grid>

//                         <Grid item xs={12}>
//                             <Route path="/" exact component={JGeneralInfo} />
//                             <Route path="/create-rule/" component={JCreateRule} />
//                         </Grid>

//                         <Grid item xs={12}>
//                             <Route path="/" exact component={Board} />
//                             <Route path="/create-rule/condition" component={CreateConditionElement} />
//                             <Route path="/create-rule/action" component={CreateActionElement} />
//                         </Grid>
//                     </Grid>



//                 </div>
//             </Router>

//         );
//     }
// }