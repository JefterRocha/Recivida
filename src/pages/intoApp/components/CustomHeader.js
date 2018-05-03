import React, { Component } from 'react';

import { Header, Body, Title, Left, Icon } from 'native-base';

export default class CustomHeader extends Component {
  render() {
    return (
      <Header style={{ backgroundColor: '#00600f' }}>
        <Left>
          <Icon
            name="menu"
            onPress={() => this.props.navigation.navigate('DrawerOpen')}
          />
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
      </Header>
    );
  }
}
