import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Container, Content, Header, Body, Icon } from 'native-base';
import { DrawerNavigator, DrawerItems } from 'react-navigation';

import HomeScreen from './intoApp/HomeScreen';

export default class HomeRoute extends Component {
  render() {
    return <MyApp />;
  }
}

const CustomDrawerContentComponent = props => (
  <Container>
    <Header style={styles.drawerHeader}>
      <Body>
        <Icon
          style={styles.drawerImage}
          name="menu"
          /*onPress={()=>this.props.navigation.navigate("DrawerOpen")}*/
        />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
);

const MyApp = DrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
  },
  {
    initialRouteName: 'Home',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  }
);

const styles = StyleSheet.create({
  drawerHeader: {
    height: 55,
    backgroundColor: '#029141',
  },
  drawerImage: {
    alignSelf: 'flex-end',
  },
});
