const toggleFavorite = (idPokemon: number) => {
  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  if (favorites.includes(idPokemon)) {
    favorites = favorites.filter((pokemon) => pokemon !== idPokemon);
  } else {
    favorites.push(idPokemon);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const isPokemonInFavorites = (idPokemon: number): boolean => {
  const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
  return favorites.includes(idPokemon);
};

const pokemons = (): number[] => JSON.parse(localStorage.getItem('favorites') || '[]');

const exportedFunctions = { toggleFavorite, isPokemonInFavorites, pokemons };

export default exportedFunctions;
