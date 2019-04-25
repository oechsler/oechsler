import React, { Component } from 'react';
import { Icon, Popup, Grid, SemanticICONS } from 'semantic-ui-react';

interface ElevatorButtonProps {
  icon: SemanticICONS;
  href: string;
  description?: string;
  inverted?: boolean;
}

export default class ElevatorButton extends Component<ElevatorButtonProps> {
  renderIcon = () => {
    return (
      <a href={this.props.href} style={{ color: 'white' }}>
        <Icon
          name={this.props.icon}
          size='big'
          color={this.props.inverted ? undefined : 'black'}
          link
        />
      </a>
    );
  };

  renderPopUp = () => {
    return (
      <Popup
        trigger={this.renderIcon()}
        verticalOffset={10}
        content={this.props.description}
        position='bottom center'
        inverted={this.props.inverted}
      />
    );
  };

  render = () => {
    return (
      <div>
        <Grid.Column width={2}>
          {this.props.description !== undefined
            ? this.renderPopUp()
            : this.renderIcon()}
        </Grid.Column>
      </div>
    );
  };
}
