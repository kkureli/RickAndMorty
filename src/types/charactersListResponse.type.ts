import {CharacterType} from './character.type';
import {InfoType} from './info.type';

export type CharactersListResponseType = {
  info: InfoType;
  results: CharacterType[];
};
