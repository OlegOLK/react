import { Component } from 'react';
import ReactDOM from 'react-dom';
import * as radiks from 'radiks'
import { BasicRule } from '../models/basicRule';

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rules: Array(0),
        }
    }

    async  fetchRules() {
        return await BasicRule.fetchOwnLins()
    }

    componentWillMount() {
        this.fetchRules().then(fetchedRules => {
            this.setState({
                rules: fetchedRules
            })
        });
    }

    render() {
        return (
            <RuleElement />
        )
    }
}