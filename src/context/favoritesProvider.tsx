import React, {ReactNode, createContext, useState} from 'react';
import {FavoritedCharactersType} from '../types/favoritedCharacters.type';

// Define the type for the context
type FavoritesContextType = {
  favoritedCharacters: FavoritedCharactersType;
  setFavoritedCharacters: React.Dispatch<
    React.SetStateAction<FavoritedCharactersType>
  >;
};

// Create the context with initial value as an empty array
export const FavoritesContext = createContext<FavoritesContextType>({
  favoritedCharacters: [],
  setFavoritedCharacters: () => {},
});

type Props = {
  children: ReactNode;
};

const FavoritesProvider = (props: Props) => {
  const {children} = props;
  const [favoritedCharacters, setFavoritedCharacters] =
    useState<FavoritedCharactersType>([]);

  // Pass the state and setState function as the value to the context
  const contextValue: FavoritesContextType = {
    favoritedCharacters,
    setFavoritedCharacters,
  };

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
