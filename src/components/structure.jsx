import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { routeNames } from "../content/routes/routes";

const classes = {
    navigation: 'structure-navigation'
}

const RouteLink = (props) => <Link to={props.route}>{props.children}</Link>

const Routes = (props) => Object.keys(props.routes).map((key, i) => <RouteLink key={i} route={props.routes[key]}>{key}</RouteLink>);

export class Navigation extends Component {
    render() {
        return (
            <nav className={classes.navigation}>
                <Routes routes={this.props.routes} />
            </nav>
        );
    }
}