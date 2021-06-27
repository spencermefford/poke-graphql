import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type PokemonStats {
    meanHeight: Float
    medianHeight: Float
    modeHeight: Float
    meanWeight: Float
    medianWeight: Float
    modeWeight: Float
  }

  type Query {
    pokemonStatsByNames(names: [String]): PokemonStats
  }
`;

export default typeDefs;
