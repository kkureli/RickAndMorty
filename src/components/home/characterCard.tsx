import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useContext} from 'react';
import {CharacterType} from '../../types/character.type';
import {DisplayModeEnum} from '../../types/displayMode.enums';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../../types/routes';
import {ScreenNames} from '../../navigation/screens.enum';
import {FavoritesContext} from '../../context/favoritesProvider';
import BookmarkFilledIcon from '../../assets/svg/BookmarkFilledIcon';

const {width} = Dimensions.get('window');
const itemWidth = (width - 60) / 2;

type Props = {
  item: CharacterType;
  displayMode: DisplayModeEnum;
  index: number;
  showBookmarked?: boolean;
};

const CharacterCard = (props: Props) => {
  const {
    item,
    item: {image, name, status, species},
    showBookmarked = true,
    index,
  } = props;
  const imageSource: ImageSourcePropType = {uri: image};
  const {displayMode} = props;
  const isGridModeSelected = displayMode === DisplayModeEnum.GRID;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  const onCardPress = () => {
    navigation.navigate(ScreenNames.DETAIL, {
      item,
    });
  };
  const {favoritedCharacters} = useContext(FavoritesContext);
  const isFavoritedPreviously = favoritedCharacters.find(e => e.id === item.id);

  return (
    <TouchableOpacity
      testID={`character-card-${index + 1}`}
      onPress={onCardPress}
      style={isGridModeSelected ? styles.gridDisplayCard : styles.card}>
      <Image
        source={imageSource}
        style={isGridModeSelected ? styles.gridImg : styles.img}
      />
      <View
        style={
          isGridModeSelected ? styles.infoContainerGrid : styles.infoContainer
        }>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.text}>Species: {species}</Text>
        <Text style={styles.text}>Status: {status}</Text>
      </View>
      {showBookmarked && isFavoritedPreviously && (
        <View style={!isGridModeSelected && styles.bookmark}>
          <BookmarkFilledIcon />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CharacterCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'silver',
  },
  gridDisplayCard: {
    marginTop: 15,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: itemWidth,
    paddingBottom: 8,
  },
  img: {
    width: 85,
    height: 85,
    resizeMode: 'contain',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  gridImg: {
    width: 85,
    height: 85,
    resizeMode: 'contain',
  },
  name: {
    fontFamily: 'Mulish',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 18,
    letterSpacing: 0.02,
    textAlign: 'left',
  },
  text: {
    fontFamily: 'Mulish',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: 15,
    letterSpacing: 0.02,
    textAlign: 'left',
    color: '#110E47',
  },
  infoContainer: {
    marginLeft: 16,
    justifyContent: 'space-between',
  },
  infoContainerGrid: {
    justifyContent: 'space-between',
  },
  bookmark: {
    marginLeft: 8,
  },
});
