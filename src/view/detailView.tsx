import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {CharacterType} from '../types/character.type';
import {ImageSourcePropType} from 'react-native/types';
import DetailsCard from '../components/detail/detailsCard';
import Header from '../components/detail/header';

type Props = {
  item: CharacterType;
};

const DetailView = (props: Props) => {
  const {
    item,
    item: {image},
  } = props;
  const imageSource: ImageSourcePropType = {uri: image};

  return (
    <View testID="detail-screen" style={styles.container}>
      <Image source={imageSource} style={styles.img} />
      <Header />
      <DetailsCard item={item} />
    </View>
  );
};

export default DetailView;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  img: {
    width: '100%',
    height: '55%',
    position: 'absolute',
  },
});
