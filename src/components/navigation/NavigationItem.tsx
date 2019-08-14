import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

interface NavigationItemProps {
    text: string;
    href: string;
}

export const NavigationItem = (props: NavigationItemProps) => {
    const renderLink = () => {
        return (
            <a href={props.href}>
                <Menu.Item link>{props.text}</Menu.Item>
            </a>
        );
    };

    const renderRouterLink = () => {
        return (
            <Link to={props.href}>
                <Menu.Item link>{props.text}</Menu.Item>
            </Link>
        );
    };

    return (
        <div className='navigation-item'>
            {props.href.startsWith('#') ? renderLink() : renderRouterLink()}
        </div>
    );
};
