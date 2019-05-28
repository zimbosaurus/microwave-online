
import React, { Component } from 'react';

export const classes = {
    containerPage: 'container-page',
    containerTop: 'container-page-top',
    containerBottom: 'container-page-bottom',
    containerBody: 'container-body',
    containerHeader: 'container-header',
    containerNavigation: 'container-navigation',
    body: 'body',
    page: 'page',
    header: 'header',
    navigation: 'navigation',
    center: 'layout-center',
    row: 'layout-row',
    scene: 'container-scene'
}

export class Center extends Component {
    render() {
        return (
            <div className={classes.center}>{this.props.children}</div>
        );
    }
}

export class Width extends Component {
    render() {
        return (
            <div style={{width: `${this.props.width}%`}}>{this.props.children}</div>
        );
    }
}

export class Row extends Component {
    render() {
        return (
            <div className={classes.row}>{this.props.children}</div>
        );
    }
}

export class BodyContainer extends Component {
    render() {
        return (
            <div className={classes.body}>{this.props.children}</div>
        );
    }
}

export class HeaderContainer extends Component {
    render() {
        return (
            <div className={classes.header}>{this.props.children}</div>
        );
    }
}

export class NavigationContainer extends Component {
    render() {
        return (
            <div className={classes.navigation}>{this.props.children}</div>
        );
    }
}

/**
 * A scene is a container sized as large as the devices screen.
 */
export class SceneContainer extends Component {
    render() {
        return (
            <div className={`${classes.scene}${this.props.pee ? ' pee' : ''}`}>{this.props.children}</div>
        );
    }
}

export class AppScaffold extends Component {
    render() {

        const None = () => <React.Fragment/>;

        const Top = () => this.props.header ? (
            <div className={classes.containerTop}>
                    <div className={classes.containerHeader}>{this.props.header}</div>
            </div>
        ) : <None/>;

        const Nav = () => this.props.navigation ? (
            <div className={classes.containerNavigation}>{this.props.navigation}</div>
        ) : <None/>;

        const Body = () => this.props.body ? (
            <div className={classes.containerBody}>{this.props.body}</div>
        ) : <None/>;

        const Bottom = () => (
            <div className={classes.containerBottom}>
                    <Nav/>
                    <Body/>
            </div>
        );

        return (
            <div className={classes.containerPage}>

                <Top/>
                <Bottom/>

            </div>
        );
    }
}