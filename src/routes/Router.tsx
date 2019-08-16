import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './home/Home';

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Home} />>
            </Switch>
        </BrowserRouter>
    );
};
