import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Dimensions } from 'react-native';
import { NavigationActions } from 'react-navigation';


export default class PhotoScreen extends Component {
  photo = this.props.navigation.getParam('photo');

  render() {
    const styles = StyleSheet.create({
      photo: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
      },
    });

    return (
      <View>
        <Text> here</Text>
        <Image style={styles.photo} source={this.photo} ></Image>
      </View >
    )
  }
}
