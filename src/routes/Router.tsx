import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RouterStore } from '../stores/RouterStore';
import { FooterContainer } from '../containers/FooterContainer';
import { TopContainer } from '../containers/TopContainer';

// Route components
import { Home } from './home/Home';
import { Error } from './error/Error';

export const Router = () => {
    return (
        <BrowserRouter>
            <RouterStore>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route render={() => <Error code={404} />} />
                </Switch>

                <FooterContainer />
                <TopContainer />
            </RouterStore>
        </BrowserRouter>
    );
};
