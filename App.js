import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChemicalList from './components/ChemicalList';
import FilterBar from './components/FilterBar';
import { Header } from 'react-native-elements';

export default class App extends Component {

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
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'HealthCheck', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
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
