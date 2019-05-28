
import React, { Component } from 'react';
import Fade from 'react-reveal';
import { Center, AppScaffold, HeaderContainer, BodyContainer, NavigationContainer, Width } from './layout/containers';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { routes, Home, About } from './content/routes/routes';
import { Highlight } from './components/typography';
import { EpicButton } from './components/input';

class Application extends Component {
    render() {

        const header = (
            <HeaderContainer>
                <Center>
                    <Width width={75}>
                        <h1>Microswag.online</h1>
                        <h2>Welcome to <Highlight>microswag.online</Highlight>. Here you will be met with nothing of significance or value.</h2>
                        <Center><EpicButton>Greenpath</EpicButton></Center>
                    </Width>
                </Center>
            </HeaderContainer>
        );
        const body = (
            <BodyContainer>
                <Switch>
                    <Route path='/' component={Home} />
                    <Route path={routes.Home} component={Home} />
                    <Route path={routes.About} component={About} />
                </Switch>
            </BodyContainer>
        );

        return (
            <AppScaffold header={header} body={body} />
        );
    }
}

class AppWrapper extends Component {
    render() {
        return (
            <BrowserRouter><Application/></BrowserRouter>
        );
    }
}

export default AppWrapper;