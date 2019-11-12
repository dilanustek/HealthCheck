import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';

export default class ChemicalItem extends Component {

  // onPress = () => {
  //   navigate('ChemicalScreen')
  // }

  static navigationOptions = {
    title: 'Health Check',
  };

  // iconLink = '../assets/greenCheck.png';

  getHealthIcon = healthLevel => {
    if (healthLevel === 'Good') {
      return '../assets/greenCheck.png';
    } else if (healthLevel === 'Bad') {
      return '../assets/redX.jpg';
    } else {
      return '../assets/yellow.png';
    }
  }

  render() {
    const navigate = this.props.navigation.navigate;

    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => navigate('Chemical')}
        >
          <View style={styles.chemicalRow}>
            <Text> {this.props.name} </Text>
            {/* <Image source={require(this.getHealthIcon(this.props.effect))} /> */}
            <Image style={styles.chemicalIcon} source={require('../assets/yellow.png')} />
          </View>
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
    padding: 20,
  },
  chemicalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chemicalIcon: {
    height: 15,
    width: 15,
  }
});
