import React, { Component } from 'react';
import { Icon, Popup, Grid, SemanticICONS } from 'semantic-ui-react';

interface ElevatorButtonProps {
  icon: SemanticICONS;
  href: string;
  description?: string;
  inverted?: boolean;
}

const ElevatorButton = (props: ElevatorButtonProps) => {
  const renderIcon = () => {
    return (
      <a href={props.href} style={{ color: 'white' }}>
        <Icon
          name={props.icon}
          size='big'
          color={props.inverted ? undefined : 'black'}
          link
        />
      </a>
    );
  };

  const renderPopUp = () => {
    return (
      <Popup
        trigger={renderIcon()}
        verticalOffset={10}
        content={props.description}
        position='bottom center'
        inverted={props.inverted}
      />
    );
  };

  return (
    <div>
      <Grid.Column width={2}>
        {props.description !== undefined ? renderPopUp() : renderIcon()}
      </Grid.Column>
    </div>
  );
};

export default ElevatorButton;
