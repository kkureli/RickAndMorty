import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const SeeMore = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>See More</Text>
    </TouchableOpacity>
  );
};

export default SeeMore;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#E5E4EA',
    borderRadius: 100,
    width: 61,
    height: 21,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Mulish',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 13,
    letterSpacing: 0.02,
    textAlign: 'right',
    color: '#AAA9B1',
  },
});
