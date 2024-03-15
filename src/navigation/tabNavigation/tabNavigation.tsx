import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../stackNavigation/homeStack';
import FavoritesStack from '../stackNavigation/favoritesStack';
import HomeIcon from '../../assets/svg/HomeIcon';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import BookmarkIcon from '../../assets/svg/BookmarkIcon';
import BookmarkFilledIcon from '../../assets/svg/BookmarkFilledIcon';

const Tab = createBottomTabNavigator();

const renderIcons = ({
  focused,
  route,
}: {
  focused: boolean;
  route: RouteProp<ParamListBase>;
}) => {
  if (route.name === 'HomeStack') {
    return focused ? <HomeIcon stroke="#4B8DF9" /> : <HomeIcon />;
  } else if (route.name === 'FavoritesStack') {
    return focused ? <BookmarkFilledIcon /> : <BookmarkIcon />;
  }
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => renderIcons({focused, route}),
      })}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          // eslint-disable-next-line react/no-unstable-nested-components
        }}
      />
      <Tab.Screen
        name="FavoritesStack"
        component={FavoritesStack}
        options={{headerShown: false, tabBarLabel: 'Favorites'}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
