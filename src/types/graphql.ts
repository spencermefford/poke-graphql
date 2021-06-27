import { GraphQLResolveInfo } from 'graphql';
import PokemonDataSource from '../graphql/PokemonDataSource';
import { Maybe } from './common';

export type PokemonStats = {
  meanHeight: Number;
  medianHeight: Number;
  modeHeight: Number;
  meanWeight: Number;
  medianWeight: Number;
  modeWeight: Number;
};

export type DataSources = {
  pokemonDataSource: PokemonDataSource;
};

export type ResolverContext = {
  dataSources?: DataSources;
};

export type ResolverFn = (
  parent: any,
  args: any,
  ctx: ResolverContext,
  info: Maybe<GraphQLResolveInfo>,
) => Promise<any> | any;

export interface ResolverMap {
  [field: string]: ResolverFn;
}

export interface Resolvers {
  [field: string]: ResolverMap;
}
