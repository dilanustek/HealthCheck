import React, { Component, Dimensions } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';

export default class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Health Check',
  };

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  onPress = () => {
    this.setState({
      type:
        this.state.type === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back,
    })
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={styles.page}>
          <Camera style={styles.camera} type={this.state.type}>
            <View
              style={styles.buttonPositioner}>
              <TouchableOpacity
                style={styles.flipTouchable}
                onPress={this.onPress}>
                <Text style={styles.flipText}> Flip </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}


const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonPositioner: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  flipTouchable: {
    flex: 0.15,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  flipText: {
    fontSize: 18,
    margin: 10,
    color: 'white',
  },
});