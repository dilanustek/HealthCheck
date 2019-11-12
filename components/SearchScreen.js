import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChemicalList from './ChemicalList';
import FilterBar from './FilterBar';

export default class SearchScreen extends Component {

  static navigationOptions = {
    title: 'Health Check',
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
        <ChemicalList searchQuery={this.state.search} navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
