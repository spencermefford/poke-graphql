import { GraphQLResolveInfo } from 'graphql';
import PokemonDataSource from '../graphql/PokemonDataSource';
import { Maybe } from './common';

export type PokemonStats = {
  heights: Maybe<Number[]>;
  meanHeight: Maybe<Number>;
  medianHeight: Maybe<Number>;
  modeHeight: Maybe<Number[]>;
  weights: Maybe<Number[]>;
  meanWeight: Maybe<Number>;
  medianWeight: Maybe<Number>;
  modeWeight: Maybe<Number[]>;
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
