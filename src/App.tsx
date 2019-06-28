import React, { Component } from 'react';
import { Hero } from './components/hero/Hero';
import { Elevator } from './components/elevator/Elevator';
//import Navigation from './components/navigation/Navigation';

import thumbnail from './img/thumb-overview.jpg';
import moment from 'moment';

export const App = () => {
    return (
        <div>
            <Hero
                background={{
                    blur: 8,
                    color: '#fda900',
                    image: thumbnail,
                    opacity: 0.2,
                }}
                inverted>
                {/* <Navigation>
                        <Navigation.Item href='#' text='About me.' />
                        <Navigation.Item href='#' text='Recent notes.' />
                        <Navigation.Item href='#' text='Projects.' />
                    </Navigation> */}
                <Elevator
                    image='https://secure.gravatar.com/avatar/760c95a88c6d3a3607c12730ca89c792?size=1024'
                    name='Samuel Oechsler'
                    age={moment().diff('1998-11-21', 'years', false)}
                    status={
                        <span>
                            Student, developer&nbsp;
                            <a href='https://medialesson.de'>@medialesson</a>
                        </span>
                    }
                    inverted>
                    <Elevator.Button
                        icon='github'
                        href='https://github.com/Boxwrapper'
                        description='Fork me on GitHub'
                        inverted
                    />
                    <Elevator.Button
                        icon='xbox'
                        href='http://live.xbox.com/de-DE/Profile?gamertag=MuratYilderim'
                        description='Add me on XBOX Live'
                        inverted
                    />
                </Elevator>
            </Hero>
        </div>
    );
};
