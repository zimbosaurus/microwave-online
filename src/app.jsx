
import React, { Component } from 'react';

import Fade from 'react-reveal';

import { routes, Home, About } from './content/routes/routes';
import { Center, AppScaffold, HeaderContainer, BodyContainer, NavigationContainer, Width, Row } from './layout/containers';

import { Highlight } from './components/typography';
import { EpicButton } from './components/input';

import Router, { setPage, getPage } from './routing/routing';

const pages = {
    'home': <Home/>,
    'about': <About/>
};

const fallbackRoute = 'home';

class Application extends Component {

    constructor(props) {
        super(props);

        this.router = new Router(pages, (page) => this.pageChanged(page), fallbackRoute);

        this.state = {
            page: this.router.getInitialPage()
        };
    }

    pageChanged(page) {
        this.setState({page: page});
    }
    
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
        const Page = (props) => this.state.page;
        const body = (
            <BodyContainer><Page/></BodyContainer>
        );

        return (
            <AppScaffold header={header} body={body} />
        );
    }
}

const AppWrapper = () => <Application/>;

export default AppWrapper;