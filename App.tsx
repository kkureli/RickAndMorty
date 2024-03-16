import React from 'react';
import AppNavigation from './src/navigation/navigation';
import FavoritesProvider from './src/context/favoritesProvider';

const App = () => {
  return (
    <FavoritesProvider>
      <AppNavigation />
    </FavoritesProvider>
  );
};

export default App;
