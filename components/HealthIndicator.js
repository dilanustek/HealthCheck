import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default class HealthIndicator extends Component {

  getHealthIcon = healthLevel => {
    if (healthLevel === 'Good') {
      return require('../assets/greenCheck.png');
    } else if (healthLevel === 'Really good') {
      return require('../assets/greenCheck.png');
    }
    else if (healthLevel === 'Bad') {
      return require('../assets/redX.jpg');
    } else {
      return require('../assets/yellow.png');
    }
  }

  render() {
    loadedImage = this.getHealthIcon(this.props.effect);

    return (
      <View style={styles.chemIcons}>
        <Image style={styles.chemicalIcon}
          source={loadedImage} />
        {(this.props.effect === 'Really good') &&
          <Image style={styles.chemicalIcon} source={loadedImage}
          />
        }
      </View>
    )
  }

}

const styles = StyleSheet.create({
  chemIcons: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    height: 15,
    width: 40,
  }, chemicalIcon: {
    height: 15,
    width: 15,
  },
});