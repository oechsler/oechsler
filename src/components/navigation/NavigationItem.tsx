import React from 'react';
import { Menu } from 'semantic-ui-react';

interface NavigationItemProps {
  text: string;
  href: string;
}

const NavigationItem = (props: NavigationItemProps) => {
  return (
    <div className='navigation-item'>
      <a href={props.href}>
        <Menu.Item link>{props.text}</Menu.Item>
      </a>
    </div>
  );
};

export default NavigationItem;
