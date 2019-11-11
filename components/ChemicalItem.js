import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class ChemicalItem extends Component {

  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  onPress = () => {
    // this.setState({
    //   open? false : true;
    // }) 
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
          onPress={this.onPress}
        >
          <Text> {this.props.name} </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    fontSize: 50,
    height: 50,
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 20
  },
});
