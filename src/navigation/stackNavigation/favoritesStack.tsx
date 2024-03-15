import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamsList, ScreenType} from '../../types/routes';
import {ScreenNames} from '../screens.enum';
import DetailScreen from '../../screens/detailScreen/detailScreen';
import FavoritesScreen from '../../screens/favoritesScreen/favoritesScreen';
const Stack = createNativeStackNavigator<RootStackParamsList>();

const FavoritesStack = () => {
  const screens: ScreenType[] = [
    {
      name: ScreenNames.FAVORITES,
      component: FavoritesScreen,
      options: {
        headerTitle: 'Favorites',
        headerShown: true,
      },
    },
    {
      name: ScreenNames.DETAIL,
      component: DetailScreen,
      options: {
        headerShown: false,
      },
    },
  ];
  return (
    <Stack.Navigator>
      {screens.map(screenOptions => {
        return <Stack.Screen key={screenOptions.name} {...screenOptions} />;
      })}
    </Stack.Navigator>
  );
};

export default FavoritesStack;
