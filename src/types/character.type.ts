export type CharacterType = {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
  episode: string[];
  gender: string;
  location: {
    name: string;
    url: string;
  };
  origin: {
    name: string;
    url: string;
  };
  created: string;
};
