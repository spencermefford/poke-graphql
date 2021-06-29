import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type PokemonStats {
    heights: [Float]
    meanHeight: Float
    medianHeight: Float
    modeHeight: [Float]
    weights: [Float]
    meanWeight: Float
    medianWeight: Float
    modeWeight: [Float]
  }

  type Query {
    pokemonStatsByNames(names: [String]): PokemonStats
  }
`;

export default typeDefs;
