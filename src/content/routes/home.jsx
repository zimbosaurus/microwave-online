
import React, { Component } from 'react';
import { Center, SceneContainer } from '../../layout/containers';
import { Button, FilledButton } from '../../components/input';

class Home extends Component {
    render() {
        return (
            <main>
                <Center>
                    <SceneContainer>
                        <Center>
                            <h1>Scene</h1>
                            <section>
                                <h2>Buttons</h2>
                                <Button>peebutt</Button>
                                <FilledButton>buttpee</FilledButton>
                            </section>
                            <section>
                                <h2>Active Buttons</h2>
                                <Button active>peebutt</Button>
                                <FilledButton active>buttpee</FilledButton>
                            </section>
                        </Center>
                    </SceneContainer>
                    <SceneContainer pee>
                        <Center>
                            <h1>Scene</h1>
                            <section>
                                <h2>Buttons</h2>
                                <Button>peebutt</Button>
                                <FilledButton>buttpee</FilledButton>
                            </section>
                            <section>
                                <h2>Active Buttons</h2>
                                <Button active>peebutt</Button>
                                <FilledButton active>buttpee</FilledButton>
                            </section>
                        </Center>
                    </SceneContainer>
                </Center>
            </main>
        );
    }
}

export default Home;