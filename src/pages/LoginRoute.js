import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Logo from './components/Logo';
import Form from './components/FormLogin';

export default class LoginRoute extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Form navigation={this.props.navigation} type="Logar" />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>
            Não tem conta ainda?
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SignupPath')}>
            <Text style={styles.signupButton}>
              Registre-se
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#029141',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  signupText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
});
