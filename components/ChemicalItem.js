import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import HealthIndicator from './HealthIndicator.js';

export default class ChemicalItem extends Component {

  static navigationOptions = {
    title: 'Health Check',
  };

  render() {
    const navigate = this.props.navigation.navigate;

    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => navigate('Chemical', {
            name: this.props.name,
            effect: this.props.effect,
            products: this.props.products,
            details: this.props.details,
          })}
        >
          <View style={styles.chemicalRow}>
            <Text style={styles.chemicalName}> {this.props.name} </Text>
            <HealthIndicator effect={this.props.effect} />
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
  chemicalName: {
    fontSize: 18,
  },
});
