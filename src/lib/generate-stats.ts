import { PokemonStats } from '../types/graphql';
import { mean, median, mode } from './stats';

export default function generateStats(pokemonList: any[] = []): PokemonStats {
  const heights = pokemonList.map((pokemon) => pokemon.height);
  const weights = pokemonList.map((pokemon) => pokemon.weight);

  return {
    heights,
    meanHeight: mean(heights),
    medianHeight: median(heights),
    modeHeight: mode(heights),
    weights,
    meanWeight: mean(weights),
    medianWeight: median(weights),
    modeWeight: mode(weights),
  };
}
