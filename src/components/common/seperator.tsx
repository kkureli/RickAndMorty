import {StyleSheet, View} from 'react-native';
import React from 'react';

const Seperator = () => {
  return <View style={styles.container} />;
};

export default Seperator;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 1,
    backgroundColor: 'silver',
  },
});
