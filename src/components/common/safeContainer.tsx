import {SafeAreaView, StyleSheet, View} from 'react-native';
import React, {ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

const SafeContainer = (props: Props) => {
  const {children} = props;
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

export default SafeContainer;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {flex: 1, padding: 24, paddingBottom: 0, paddingTop: 0},
});
