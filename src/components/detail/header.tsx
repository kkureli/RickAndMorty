import {SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import BackButtonIcon from '../../assets/svg/BackButtonIcon';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../../types/routes';

const Header = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={onBack} style={styles.button}>
        <BackButtonIcon />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  button: {
    paddingLeft: 24,
  },
});
