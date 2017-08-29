import { Text, ScrollView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class MainScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  render() {
    const styles = StyleSheet.create({
      background: {
        padding: 30,
      },
    });

    return (
      <ScrollView style={styles.background}>
        <Text>MAIN SCREEN</Text>
      </ScrollView>
    );
  }
}
