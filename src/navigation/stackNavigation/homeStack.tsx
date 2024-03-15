import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/homeScreen/homeScreen';

import {RootStackParamsList, ScreenType} from '../../types/routes';
import {ScreenNames} from '../screens.enum';
import DetailScreen from '../../screens/detailScreen/detailScreen';
const Stack = createNativeStackNavigator<RootStackParamsList>();

const HomeStack = () => {
  const screens: ScreenType[] = [
    {
      name: ScreenNames.HOME,
      component: HomeScreen,
      options: {
        headerShown: false,
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

export default HomeStack;
