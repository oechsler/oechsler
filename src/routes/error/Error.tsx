import React, { useEffect, useState, useContext, useLayoutEffect } from 'react';
import { Page } from '../../components/page/Page';
import { RouterStore } from '../../stores/RouterStore';
import { Header, Icon } from 'semantic-ui-react';
import { STATUS_CODES } from 'http';

import './index.sass';
import { Link } from 'react-router-dom';

interface ErrorProps {
    code: number;
}

const Error = (props: ErrorProps) => {
    const routerContext = useContext(RouterStore.Context);

    const [height, setHeight] = useState(0);
    useLayoutEffect(() => {
        const calculateHeight = () =>
            setHeight(window.innerHeight - routerContext.footerHeight);

        window.addEventListener('resize', () => calculateHeight());
        calculateHeight();
    }, [routerContext.footerHeight]);

    return (
        <Page height={height} className='error'>
            <Header size='huge' as='h1'>
                <Icon name='ban' />
                <Header.Content as='span'>
                    {props.code}
                    <Header.Subheader as='span'>
                        {STATUS_CODES[props.code]}
                    </Header.Subheader>
                </Header.Content>
            </Header>
            <p>Ups, well something went wrong here!</p>
        </Page>
    );
};

export { Error };
