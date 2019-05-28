import React, { Component } from 'react';

const classes = {
    highlight: 'highlight'
}

export class Highlight extends Component {
    render() {
        return (
            <span className={classes.highlight}>{this.props.children}</span>
        );
    }
}