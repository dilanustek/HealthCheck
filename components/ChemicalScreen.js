import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ChemicalScreen extends Component {

  static navigationOptions = {
    title: 'Health Check a Chemical',
  };

  render() {
    return (
      <View>
        <Text>Hello world I'm a chemical!</Text>
      </View>
    );
  }
}