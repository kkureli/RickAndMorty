import {StyleSheet, View} from 'react-native';
import React from 'react';
import Title from './homeTitle';
import SeeMore from './seeMore';

const ListHeader = () => {
  return (
    <View style={styles.container}>
      <Title />
      <SeeMore />
    </View>
  );
};

export default ListHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
