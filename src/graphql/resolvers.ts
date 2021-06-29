import generateStats from '../lib/generate-stats';
import { Maybe } from '../types/common';
import { PokemonStats, Resolvers } from '../types/graphql';

const resolvers: Resolvers = {
  Query: {
    async pokemonStatsByNames(
      parent,
      { names },
      { dataSources },
    ): Promise<Maybe<PokemonStats>> {
      if (!names || !names.length)
        throw new Error('You must provide some names');

      const pokemonList =
        await dataSources?.pokemonDataSource.getPokemonByNames(names);

      return generateStats(pokemonList);
    },
  },
};

export default resolvers;
