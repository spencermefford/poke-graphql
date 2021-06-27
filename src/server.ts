import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import { DataSources } from './types/graphql';
import PokemonDataSource from './graphql/PokemonDataSource';

export default async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: (): DataSources => ({
      pokemonDataSource: new PokemonDataSource(),
    }),
  });
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  await new Promise<void>((resolve) => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}
