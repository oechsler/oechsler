import React, { ReactNode } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Brand } from '../brand/Brand';
import { NavigationItem } from './NavigationItem';
import { typeFilter } from '../../utils/typeFilter';

import './index.sass';

interface NavigationProps {
    children?: ReactNode;
}

const Navigation = (props: NavigationProps) => {
    return (
        <div className='navigation'>
            <Menu secondary inverted>
                <Container>
                    <Menu.Item>
                        <a href='/'>
                            <Brand size={22} inverted />
                        </a>
                    </Menu.Item>
                    <Menu.Menu className='navigation-menu' position='right'>
                        {typeFilter(props.children, [NavigationItem])}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    );
};

Navigation.Item = NavigationItem;
export { Navigation };
