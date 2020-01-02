import React, { useState, useContext, useLayoutEffect } from 'react';
import { Page } from '../../components/page/Page';
import { RouterStore } from '../../stores/RouterStore';
import { Header } from 'semantic-ui-react';

import './index.sass';

const Imprint = () => {
    const routerContext = useContext(RouterStore.Context);

    const [height, setHeight] = useState(0);
    useLayoutEffect(() => {
        const calculateHeight = () =>
            setHeight(window.innerHeight - routerContext.footerHeight);

        window.addEventListener('resize', () => calculateHeight());
        calculateHeight();
    }, [routerContext.footerHeight]);

    return (
        <Page height={height} className='imprint'>
            <Header as='h1'>Imprint</Header>

            <Header as='h3'>According to § 5 TMG</Header>
            <p>
                <span>Samuel Oechsler</span>
                <span>Spichernstraße 22</span>
                <span>75173 Pforzheim</span>
            </p>

            <Header as='h2'>Contact</Header>
            <p>
                <span>Telefon: 07231 4709400</span>
                <span>E-Mail: you@oechsler.it</span>
            </p>
        </Page>
    );
};

export { Imprint };
