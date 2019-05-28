
import React, { Component } from 'react';
import { Center, AppScaffold, HeaderContainer, BodyContainer, NavigationContainer, Width, Row } from './layout/containers';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Fade from 'react-reveal';

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
                        <Row>
                            <Center><EpicButton>Greenpath</EpicButton></Center>
                            <Center><EpicButton>Forgotten Crossroads</EpicButton></Center>
                            <Center><EpicButton>Ancient Basin</EpicButton></Center>
                        </Row>
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

const AppWrapper = () => <BrowserRouter><Application/></BrowserRouter>;

export default AppWrapper;