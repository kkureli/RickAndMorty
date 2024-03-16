import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './tabNavigation/tabNavigation';

const AppNavigation: FC = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default AppNavigation;
