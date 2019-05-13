import React from 'react';

const styles = {
    section: {
        height: '100px',
        'backgroundColor': 'aliceblue',
    }
}

export class JGeneralInfo extends React.Component {

    render() {
        return (
            <div 
            style={styles.section}
            >
                Hello world
            </div>
        );
    }
}