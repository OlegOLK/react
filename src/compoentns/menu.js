import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import styles from '../globals/globalStyles';
import { UserData } from 'blockstack';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SignInButton from './signIn';
import { Portrait } from './portrait';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            classes: props.classes
        }
    }

    loadUserData() {
        const data = this.props.userSession.loadUserData();
        console.log('data', data);
        return data.username;
    }

    render() {
        return (
            <div>
                <CssBaseline />
                <AppBar position="static" color="default" className={this.state.classes.appBar} >
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap className={this.state.classes.toolbarTitle}>
                            <Link to="/" >  Project vault
                          </Link>
                        </Typography>
                        <Button>Docs</Button>
                        <Button>Enterprise</Button>
                        <Button>Support</Button>
                        {
                            !this.props.userSession.isUserSignedIn() ?
                                <SignInButton onClick={this.props.handleSignIn} />
                                :
                                <Portrait
                                    handleSignOut={this.props.handleSignOut}
                                    userName={this.loadUserData()}
                                />
                        }
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Menu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);