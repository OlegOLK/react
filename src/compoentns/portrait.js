import React from 'react';
import { Button } from '@material-ui/core';

export class Portrait extends React.Component {

    render() {
        return (
            <Button onClick={this.props.handleSignOut}> {this.props.userName}</Button>
        );
    }
}