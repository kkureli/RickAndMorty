import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FavoritesProvider from '../context/favoritesProvider';
import TabNavigation from './tabNavigation/tabNavigation';

const AppNavigation: FC = () => {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </FavoritesProvider>
  );
};

export default AppNavigation;
