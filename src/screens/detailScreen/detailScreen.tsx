import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ScreenNames} from '../../navigation/screens.enum';
import {RootStackParamsList} from '../../types/routes';
import DetailView from '../../view/detailView';

type ScreenProps = NativeStackScreenProps<
  RootStackParamsList,
  ScreenNames.DETAIL
>;

export default function DetailScreen({route}: ScreenProps) {
  return <DetailView {...route.params} />;
}
