import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import Icon from 'react-native-vector-icons/Feather';


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

  takePicture = () => {
    if (this.camera) {
      this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved })
        .then(() => this.camera.pausePreview());
    }
  };

  onPictureSaved = photo => {
    console.log(photo);
    this.props.navigation.navigate('Photo', { photo: photo });
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={styles.page}>
          <Camera style={styles.camera} type={this.state.type} ref={(ref) => { this.camera = ref }} >
            <View style={styles.buttonPositioner}>
              <View style={styles.bottomPositioner}>

                <TouchableOpacity
                  style={styles.flipTouchable}
                  onPress={this.onPress}>
                  <Text style={styles.flipText}> Flip </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.captureButton} onPress={this.takePicture} />

              </View>
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
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  },
  bottomPositioner: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  flipTouchable: {
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
  },
  flipText: {
    fontSize: 18,
    margin: 10,
    color: 'white',
  },
  captureButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fff",
  }
});