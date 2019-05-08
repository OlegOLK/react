import { Component } from 'react';
import ReactDOM from 'react-dom';
import * as radiks from 'radiks'
import { BasicRule } from '../models/basicRule';

class RuleElement extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="RuleCard">
                <image alt={ this.props.imageAlt } href={ this.props.imageHref } />
                <p>Conditions count: { this.props.Conditions.length }</p>
                <p>Actions count: { this.props.Actions.length }</p>
            </div>
        )
    }
}