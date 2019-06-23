import React, { Component } from 'react';
import Router, { pageObserver, observePage } from './routing';
import * as Routing from './routing';

export const ROUTE_FALLBACK = '*';

export class RoutingController extends Component<any, {page : string}> {

    constructor(props) {
        super(props);
        this.state = {
            page: ''
        }
    }

    componentDidMount() {
        observePage(this.pageChanged);
    }

    pageChanged(pageRoute : string) : void {
        console.log(`page changed: ${pageRoute}`);
        this.setState({page: pageRoute});
    }

    render() {
        return (
            <React.Fragment>{this.props.children}</React.Fragment>
        );
    }
}

export class Route extends Component<{path : string, component : JSX.Element}, any> {
    isCurrent() : boolean {
        return Routing.getPage() == this.props.path || this.props.path == ROUTE_FALLBACK;
    }
    render() {
        if (this.isCurrent()) console.log(`route: ${this.props.path}`);
        return (
            this.isCurrent() ? this.props.component : <React.Fragment/>
        );
    }
}