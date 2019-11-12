import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class FilterBar extends Component {


  render() {

    return (
      <View style={styles.container}>
        <SearchBar
          platform="android"
          placeholder="Type the chemical name here..."
          onChangeText={searchText => this.props.updateSearch(searchText)}
          value={this.props.searchQuery}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
  },
});