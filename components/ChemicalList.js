import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ChemicalItem from './ChemicalItem';


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
          renderItem={({ item }) => <ChemicalItem name={item.name} />}
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
});