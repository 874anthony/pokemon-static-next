import { FC } from 'react';
import { Grid } from '@nextui-org/react';

import { FavoriteCardPokemon } from './FavoriteCardPokemon';

type Props = {
  favoritesPokemon: number[];
};

export const FavoritePokemons: FC<Props> = ({ favoritesPokemon }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritesPokemon.map((id) => (
        <FavoriteCardPokemon key={id} pokemonId={id} />
      ))}
    </Grid.Container>
  );
};
