import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Logo from './components/Logo';
import Form from './components/FormSignup';

export default class Signup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Form type="Cadastrar" />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Já tem uma conta?</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('LoginPath')}>
            <Text style={styles.signupButton}> Entre</Text>
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
