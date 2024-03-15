/* eslint-disable react/no-unstable-nested-components */
import {FlatList, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {FavoritesContext} from '../context/favoritesProvider';
import CharacterCard from '../components/home/characterCard';
import {DisplayModeEnum} from '../types/displayMode.enums';
import Seperator from '../components/common/seperator';
import SafeContainer from '../components/common/safeContainer';

const FavoritesView = () => {
  const {favoritedCharacters} = useContext(FavoritesContext);

  return (
    <SafeContainer>
      <FlatList
        ItemSeparatorComponent={() => <Seperator />}
        contentContainerStyle={styles.container}
        data={favoritedCharacters}
        keyExtractor={item => String(item.id)}
        renderItem={({item, index}) => (
          <CharacterCard
            displayMode={DisplayModeEnum.LIST}
            item={item}
            index={index}
            showBookmarked={false}
          />
        )}
      />
    </SafeContainer>
  );
};

export default FavoritesView;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    marginTop: 20,
  },
});
