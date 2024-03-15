import {StyleSheet, Text} from 'react-native';
import React from 'react';

const Title = () => {
  return <Text style={styles.title}>Movie List</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Merriweather',
    fontSize: 16,
    fontWeight: '900',
    lineHeight: 20,
    letterSpacing: 0.02,
    textAlign: 'left',
    color: '#110E47',
  },
});
