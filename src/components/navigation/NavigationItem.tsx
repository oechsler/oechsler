import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

interface NavigationItemProps {
    text: string;
    href: string;
}

export const NavigationItem = (props: NavigationItemProps) => {
    const renderAnchorLink = () => {
        const handleClick = (
            event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        ) => {
            const id = event.currentTarget.href.split('#')[1];
            const elem = document.getElementById(id);

            if (elem !== null) elem.scrollIntoView({ behavior: 'smooth' });
            event.preventDefault();
        };

        return (
            <a href={props.href} onClick={(e) => handleClick(e)}>
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
            {props.href.startsWith('#')
                ? renderAnchorLink()
                : renderRouterLink()}
        </div>
    );
};
