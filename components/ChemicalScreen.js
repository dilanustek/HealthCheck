import React, { Component } from 'react';
import { Text, Li, Ul } from 'react-native-elements'
import { StyleSheet, View } from 'react-native';

export default class ChemicalScreen extends Component {

  static navigationOptions = {
    title: 'Health Check a Chemical',
  };

  render() {
    // const products = this.props.navigation.getParam('products').join(", ")
    const products = this.props.navigation.getParam('products')
      .map((x, i) => <Text key={i}>{x} </Text>);

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.navigation.getParam('name')}</Text>
        <View style={styles.products}>
          <Text h4>Common Products</Text>
          {products}
        </View>
        <View style={styles.details}>
          <Text h4>Details</Text>
          <Text>{this.props.navigation.getParam('details')}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    margin: 10,
    fontSize: 28,
    fontWeight: "bold",
  },
  products: {
    margin: 10,
    marginBottom: 20,
  },
  details: {
    margin: 10,
  },
});