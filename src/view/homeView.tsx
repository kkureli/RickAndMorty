import {ActivityIndicator, FlatList, View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CharacterType} from '../types/character.type';
import {CharactersListResponseType} from '../types/charactersListResponse.type';
import HttpClient from '../api/httpclient';
import {InfoType} from '../types/info.type';
import ListHeader from '../components/home/listHeader/listHeader';
import CharacterCard from '../components/home/characterCard';
import Header from '../components/home/header';
import {DisplayModeEnum} from '../types/displayMode.enums';
import SafeContainer from '../components/common/safeContainer';
import LoadingSpinner from '../components/common/loadingSpinner';
import SearchInput from '../components/common/searchInput';
import StatusOptions from '../components/home/statusOptions';
import {StatusEnum} from '../types/status.type';

const HomeView = () => {
  const [loading, setLoading] = useState(false);
  const [charactersList, setCharactersList] = useState<CharacterType[]>([]);
  const [info, setInfo] = useState<InfoType>();
  const [selectedDisplayMode, setSelectedDisplayMode] = useState(
    DisplayModeEnum.LIST,
  );
  const [searchInput, setSearchInput] = useState('');
  const [debounceResult, setDebounceResult] = useState('');
  const [noMore, setNoMore] = useState(false); //State to manage Flatlist footer loading indicator
  const [isFilterApplied, setIsFilterApplied] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<
    keyof typeof StatusEnum | null
  >(null);

  const handleChangeDebounce = (value: string) => {
    setDebounceResult(value);
  };

  useEffect(() => {
    getCharacters({
      name: debounceResult?.length > 2 ? debounceResult : '',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStatus]);

  useEffect(() => {
    if (debounceResult?.length === 0 && isFilterApplied) {
      setIsFilterApplied(false);
      getCharacters();
    }
    if (debounceResult?.length > 2) {
      setIsFilterApplied(true);
      getCharacters({page: 1, name: debounceResult});
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceResult]);

  const getCharacters = async ({
    page = 1,
    name = page > 1 && debounceResult?.length > 2 ? debounceResult : '',
  }: {
    page?: number;
    name?: string;
    status?: keyof typeof StatusEnum | null;
  } = {}) => {
    try {
      setNoMore(false); //show Flatlist footer loading indicator
      page === 1 && !name && setLoading(true);

      let endpoint = `character/?page=${page}`;
      if (name) {
        endpoint += `&name=${name}`;
      }
      if (selectedStatus) {
        endpoint += `&status=${selectedStatus}`;
      }

      const data: CharactersListResponseType = await HttpClient.Get(endpoint);

      page > 1
        ? setCharactersList([...charactersList, ...data?.results])
        : setCharactersList(data?.results);
      setInfo(data.info);
    } catch (error) {
      //error handling
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  const fetchMore = () => {
    if (!loading && info) {
      const nextURL = info?.next;
      const pageNumber = nextURL?.match(/page=(\d+)/);
      const nextPage = pageNumber ? pageNumber[1] : null;
      nextPage && getCharacters({page: Number(nextPage)});
      !nextPage && setNoMore(true); //hide Flatlist footer loading indicator
    }
  };

  useEffect(() => {
    getCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        ListFooterComponent={!noMore ? <ActivityIndicator /> : <></>}
        onEndReached={fetchMore}
        key={selectedDisplayMode === DisplayModeEnum.GRID ? 2 : 1}
        numColumns={selectedDisplayMode === DisplayModeEnum.GRID ? 2 : 1}
        ListHeaderComponent={
          <>
            <View style={styles.listHeaderFilters}>
              <SearchInput
                onChangeText={setSearchInput}
                value={searchInput}
                handleChangeDebounce={handleChangeDebounce}
              />
              <StatusOptions
                selectedStatus={selectedStatus}
                setSelectedStatus={setSelectedStatus}
              />
            </View>
            <ListHeader />
          </>
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

const styles = StyleSheet.create({
  listHeaderFilters: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});
