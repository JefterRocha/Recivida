import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';

import LoginRoute from './pages/LoginRoute';
import SignupRoute from './pages/SignupRoute';
import HomeRoute from './pages/HomeRoute';

export default StackNavigator(
  {
    LoginPath: { screen: LoginRoute },
    SignupPath: { screen: SignupRoute },
    HomePath: { screen: HomeRoute }
  },
  {
    headerMode: 'none',
    initialRouteName: 'LoginPath',
  }
);
