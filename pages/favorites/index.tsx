import { useEffect, useState } from 'react';

import { Layout } from '../../components/layouts';
import { FavoritePokemons } from '../../components/pokemon';
import { NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';

const FavoritesPage = () => {
  const [favoritesPokemon, setFavoritesPokemon] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemon(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Favorites Pokemon">
      {favoritesPokemon.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons favoritesPokemon={favoritesPokemon} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
