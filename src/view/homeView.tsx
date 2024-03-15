/* eslint-disable react/no-unstable-nested-components */
import {ActivityIndicator, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CharacterType} from '../types/character.type';
import {InfoType} from '../types/info.type';
import ListHeader from '../components/home/listHeader/listHeader';
import CharacterCard from '../components/home/characterCard';
import Header from '../components/home/header';
import {DisplayModeEnum} from '../types/displayMode.enums';
import SafeContainer from '../components/common/safeContainer';
import LoadingSpinner from '../components/common/loadingSpinner';
import {StatusEnum} from '../types/status.type';
import services from '../api/services';
import Seperator from '../components/common/seperator';

const HomeView = () => {
  const [loading, setLoading] = useState(false);
  const [charactersList, setCharactersList] = useState<CharacterType[]>([]);
  const [info, setInfo] = useState<InfoType>();
  const [selectedDisplayMode, setSelectedDisplayMode] = useState(
    DisplayModeEnum.LIST,
  );
  const [searchInput, setSearchInput] = useState('');
  const [debounceResult, setDebounceResult] = useState('');
  const [loadMore, setLoadMore] = useState(false); //State to manage Flatlist footer loading indicator
  const [isFilterApplied, setIsFilterApplied] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<
    keyof typeof StatusEnum | null
  >(null);

  const handleChangeDebounce = (value: string) => {
    setDebounceResult(value);
  };

  useEffect(() => {
    if (info?.next) {
      setLoadMore(false); //To show Flatlist footer loading indicator
    }
  }, [info]);

  useEffect(() => {
    services.getCharacters({
      name: debounceResult?.length > 2 ? debounceResult : '',
      selectedStatus,
      setLoading,
      setCharactersList,
      setInfo,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStatus]);

  useEffect(() => {
    if (debounceResult?.length === 0 && isFilterApplied) {
      setIsFilterApplied(false);
      services.getCharacters({
        setLoading,
        selectedStatus,
        setCharactersList,
        setInfo,
      });
    }
    if (debounceResult?.length > 2) {
      setIsFilterApplied(true);
      services.getCharacters({
        name: debounceResult,
        selectedStatus,
        setCharactersList,
        setInfo,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceResult]);

  const fetchMore = () => {
    if (!loading && info) {
      const nextURL = info?.next;
      const pageNumber = nextURL?.match(/page=(\d+)/);
      const nextPage = pageNumber ? pageNumber[1] : null;
      nextPage &&
        services.getCharacters({
          page: Number(nextPage),
          name: debounceResult?.length > 2 ? debounceResult : '',
          selectedStatus,
          setCharactersList,
          setInfo,
        });
      !nextPage && setLoadMore(true); //hide Flatlist footer loading indicator
    }
  };

  useEffect(() => {
    services.getCharacters({setLoading, setCharactersList, setInfo});
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <SafeContainer>
      <Header
        displayMode={selectedDisplayMode}
        setSelectedDisplayMode={setSelectedDisplayMode}
      />

      <FlatList
        ListFooterComponent={!loadMore ? <ActivityIndicator /> : <></>}
        onEndReached={fetchMore}
        key={selectedDisplayMode === DisplayModeEnum.GRID ? 2 : 1}
        numColumns={selectedDisplayMode === DisplayModeEnum.GRID ? 2 : 1}
        ItemSeparatorComponent={() => <Seperator />}
        ListHeaderComponent={
          <ListHeader
            inputProps={{
              handleChangeDebounce,
              onChangeText: setSearchInput,
              value: searchInput,
            }}
            statusProps={{
              selectedStatus,
              setSelectedStatus,
            }}
          />
        }
        data={charactersList}
        keyExtractor={item => String(item.id)}
        renderItem={({item, index}) => (
          <CharacterCard
            item={item}
            index={index}
            displayMode={selectedDisplayMode}
          />
        )}
      />
    </SafeContainer>
  );
};

export default HomeView;
