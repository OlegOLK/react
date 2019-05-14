import React from 'react';
import { BasicRule } from '../models/basicRule';
import { Grid } from '@material-ui/core';
import { RuleElement } from './models/rule';

import { BrowserRouter as Router} from "react-router-dom";



const styles = {
    board: {
        padding: '20px'
    }
}

export class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rules: Array(0),
        }
    }

    async  fetchRules() {
        try {
            return await BasicRule.fetchOwnList();
        } catch (error) {
            console.log(error);
        }
    }

    componentWillMount() {
        this.fetchRules().then(fetchedRules => {
            this.setState({
                rules: fetchedRules ? fetchedRules : Array(0)
            })
        });
    }

    render() {

        const items = [];

        this.state.rules.forEach(r => {
            items.push(
                <Grid container
                    spacing={24}
                    direction="row"
                    justify="center"
                    alignItems="center">

                    <RuleElement rule={r} />
                </Grid>
            )
        });

        return (
            <Router>
                <div style={styles.board}>
                    {
                        items
                    }

                    <Grid container
                        spacing={24}
                        direction="row"
                        justify="center"
                        alignItems="center">

                        <RuleElement />
                    </Grid>

                </div>
            </Router>
        );
    }
}