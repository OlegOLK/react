import Button from '@material-ui/core/Button';
import React from 'react';

function SignInButton(props) {
    return (
        <Button color="primary" variant="outlined" onClick={props.onClick}>
            Login with blockstack
        </Button>
    )
}

export default SignInButton;