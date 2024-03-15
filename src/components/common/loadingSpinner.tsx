import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';

const LoadingSpinner = () => {
  return (
    <View testID="loading-spinner" style={styles.container}>
      <ActivityIndicator color="gray" size="large" />
    </View>
  );
};

export default LoadingSpinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
