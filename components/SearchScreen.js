import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChemicalList from './ChemicalList';
import FilterBar from './FilterBar';
import { Header } from 'react-native-elements';

export default class SearchScreen extends Component {

  static navigationOptions = {
    title: 'Welcome',
  };

  state = {
    search: '',
  };

  updateSearch = searchText => {
    this.setState({
      search: searchText
    });
  };


  render() {
    return (
      <View style={styles.container}>
        <FilterBar searchQuery={this.state.search} updateSearch={this.updateSearch} />
        <ChemicalList searchQuery={this.state.search} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
