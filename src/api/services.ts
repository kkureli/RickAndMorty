import {CharacterType} from '../types/character.type';
import {CharactersListResponseType} from '../types/charactersListResponse.type';
import {Episode} from '../types/episode.type';
import {InfoType} from '../types/info.type';
import {StatusEnum} from '../types/status.type';
import HttpClient from './httpclient';

const services = {
  getCharacters: async ({
    page = 1,
    name,
    setLoading,
    selectedStatus, //First render haric her zaman filtreler
    setCharactersList,
    setInfo,
  }: {
    page?: number;
    name?: string;
    setLoading?: React.Dispatch<React.SetStateAction<boolean>>; //To show loading state
    selectedStatus?: keyof typeof StatusEnum | null;
    setCharactersList: React.Dispatch<React.SetStateAction<CharacterType[]>>;
    setInfo: React.Dispatch<React.SetStateAction<InfoType | undefined>>;
  }) => {
    try {
      setLoading && setLoading(true);

      let endpoint = `character/?page=${page}`;
      if (name) {
        endpoint += `&name=${name}`;
      }
      if (selectedStatus) {
        endpoint += `&status=${selectedStatus}`;
      }

      const data: CharactersListResponseType = await HttpClient.Get(endpoint);

      page > 1
        ? setCharactersList(prev => [...prev, ...data?.results])
        : setCharactersList(data?.results);
      setInfo(data.info);
    } catch (error) {
      //error handling
    } finally {
      setTimeout(() => {
        setLoading && setLoading(false);
      }, 500);
    }
  },

  getEpisodeDetail: async ({
    setLoading,
    episodeId,
    setEpisodeDetails,
  }: {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>; //To show loading state
    episodeId: string;
    setEpisodeDetails: React.Dispatch<
      React.SetStateAction<Episode | undefined>
    >;
  }) => {
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
  },
};

export default services;
