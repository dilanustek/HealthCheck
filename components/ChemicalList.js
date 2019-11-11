import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const chemicalList = require('./chemicalList.json')

export default class ChemicalList extends Component {

  render() {

    const filteredList = chemicalList.filter(
      chemical => chemical.name.toLowerCase().includes(
        this.props.searchQuery.toLowerCase()
      )
    )

    return (
      <View style={styles.container}>
        <FlatList
          data={filteredList}
          renderItem={({ item }) =>
            <Text style={styles.item}> {item.name}</Text>}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});