import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class PhotoScreen extends Component {

  render() {
    return (
      <View>
        <Text> here</Text>
        <Image source={this.props.navigation.getParam('photo')}></Image>
      </View>
    )
  }
}   