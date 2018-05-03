import React, { Component } from 'react';
import { Text } from 'react-native';

import { Container, Content } from 'native-base';
import CustomHeader from './components/CustomHeader';

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    drawerLabel: 'Home',
  });
  render() {
    return (
      <Container>
        <CustomHeader title="Home" navigation={this.props.navigation} />
        <Content
          contentContainerStyle={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
          }}>
          <Text style={{ color: 'black' }}>
            Logoff
          </Text>
        </Content>
      </Container>
    );
  }
}
