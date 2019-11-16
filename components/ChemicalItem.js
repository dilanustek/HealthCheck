import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';

export default class ChemicalItem extends Component {

  static navigationOptions = {
    title: 'Health Check',
  };

  getHealthIcon = healthLevel => {
    if (healthLevel === 'Good') {
      return require('../assets/greenCheck.png');
    } else if (healthLevel === 'Bad') {
      return require('../assets/redX.jpg');
    } else {
      return require('../assets/yellow.png');
    }
  }

  render() {
    const navigate = this.props.navigation.navigate;

    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => navigate('Chemical', {
            name: this.props.name,
            products: this.props.products,
            details: this.props.details
          })}
        >
          <View style={styles.chemicalRow}>
            <Text> {this.props.name} </Text>
            <Image style={styles.chemicalIcon}
              source={this.getHealthIcon(this.props.effect)} />
          </View>
        </TouchableHighlight>
      </View >
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
