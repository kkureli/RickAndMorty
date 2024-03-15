import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {ScreenNames} from '../navigation/screens.enum';
import {CharacterType} from './character.type';

export type RootStackParamsList = {
  [ScreenNames.HOME]: undefined;
  [ScreenNames.DETAIL]: DetailScreenProps;
};

export type ScreenType = {
  name: ScreenNames;
  component: (routeParams: any) => JSX.Element;
  title?: string;
  options?: NativeStackNavigationOptions;
};

export type DetailScreenProps = {
  item: CharacterType;
};
