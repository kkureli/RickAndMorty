import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './stackNavigation/homeStack';
import FavoritesProvider from '../context/favoritesProvider';

const AppNavigation: FC = () => {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </FavoritesProvider>
  );
};

export default AppNavigation;
