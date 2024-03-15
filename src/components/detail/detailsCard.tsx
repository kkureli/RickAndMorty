import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {CharacterType} from '../../types/character.type';
import HttpClient from '../../api/httpclient';
import {Episode} from '../../types/episode.type';
import LoadingSpinner from '../common/loadingSpinner';
import BookmarkIcon from '../../assets/svg/BookmarkIcon';
import {FavoritesContext} from '../../context/favoritesProvider';
import BookmarkFilledIcon from '../../assets/svg/BookmarkFilledIcon';

type Props = {
  item: CharacterType;
};

const DetailsCard = (props: Props) => {
  const {
    item,
    item: {name, status, species, episode, gender, location, origin},
  } = props;
  const [episodeDetails, setEpisodeDetails] = useState<Episode>();
  const [loading, setLoading] = useState(false);
  const lastSeenEpisodeURL = episode[episode.length - 1];
  const parts = lastSeenEpisodeURL.split('/');
  const episodeId = parts[parts.length - 1];
  const {favoritedCharacters, setFavoritedCharacters} =
    useContext(FavoritesContext);
  const isFavoritedPreviously = favoritedCharacters.find(e => e.id === item.id);

  const getEpisodeDetail = async () => {
    try {
      setLoading(true);
      const data: Episode = await HttpClient.Get(`episode/${episodeId}`);
      setEpisodeDetails(data);
    } catch (error) {
      //error handling
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  useEffect(() => {
    getEpisodeDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [episodeId]);

  const onAddFavorite = () => {
    if (isFavoritedPreviously) {
      const filteredIds = favoritedCharacters.filter(e => e.id !== item.id);
      setFavoritedCharacters(filteredIds || []);
    } else {
      setFavoritedCharacters(prev =>
        prev ? [...prev, {id: item.id}] : [{id: item.id}],
      );
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <View style={styles.row}>
            <Text style={styles.name}>{name}</Text>
            <TouchableOpacity
              testID="add-to-favorites-button"
              onPress={onAddFavorite}>
              {isFavoritedPreviously ? (
                <BookmarkFilledIcon />
              ) : (
                <BookmarkIcon />
              )}
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Status: {status}</Text>
          <Text style={styles.text}>Species: {species}</Text>
          <Text style={styles.text}>Number of episodes: {episode?.length}</Text>
          <Text style={styles.text}>Gender: {gender}</Text>
          <Text style={styles.text}>Origin location name: {origin.name}</Text>
          <Text style={styles.text}>
            Last known location name: {location.name}
          </Text>
          <Text style={styles.text}>
            Last seen episode name and air date:
            {'\n'}
            {episodeDetails?.name} - {episodeDetails?.air_date}
          </Text>
        </>
      )}
    </View>
  );
};

export default DetailsCard;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'white',
    height: '60%',
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 24,
  },
  name: {
    fontFamily: 'Mulish',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 25,
    letterSpacing: 0.02,
    textAlign: 'left',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    marginTop: 8,
    fontFamily: 'Mulish',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 15,
    letterSpacing: 0.02,
    textAlign: 'left',
  },
});
