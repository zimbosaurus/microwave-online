
import React, { Component } from 'react';

export const classes = {
    button: 'button',
    filled: 'filled',
    active: 'active',
    epicButton: 'epic'
};

/**
 * A link that leads to an URL when pressed.
 */
export class Link extends Component {
    render() {
        return (
            <div></div>
        );
    }
}

/**
 * A button which triggers an action when it is pressed.
 */
export class Button extends Component {

    getClassNames() {

        let className = `${classes.button}${this.props.filled ? " " + classes.filled : ''}${this.props.active ? " " + classes.active : ''}${" " + this.props.className || ''}`;

        return className;
    }

    render() {
        return (
            <button className={this.getClassNames()}>{this.props.children}</button>
        );
    }
}

/**
 * A button that is filled.
 */
export class FilledButton extends Component {
    render() {
        return (
            this.props.active ? <Button active filled>{this.props.children}</Button> : <Button filled>{this.props.children}</Button>
        );
    }
}

export class EpicButton extends Component {
    render() {
        return (
            <Button className={classes.epicButton}>{this.props.children}</Button>
        );
    }
}