import express from 'express';
import { ApolloServer, AuthenticationError } from 'apollo-server-express';
import rateLimit from 'express-rate-limit';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import { DataSources } from './types/graphql';
import PokemonDataSource from './graphql/PokemonDataSource';

// Normally these keys would live in a DB table, but this works for a simple example
const PARTNERS = [
  { id: 'partner-a', apiKey: '123-ABC' },
  { id: 'partner-b', apiKey: '456-DEF' },
];

const getApiKey = (req: express.Request): string => req.get('X-Api-Key') ?? '';

export default async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: (): DataSources => ({
      pokemonDataSource: new PokemonDataSource(),
    }),
    context: ({ req }) => {
      // API Key Validation
      const partner = PARTNERS.find((p) => p.apiKey === getApiKey(req));
      if (!partner)
        throw new AuthenticationError(
          'You do not have permission to access this resource.',
        );
    },
  });
  await server.start();

  const app = express();

  // Setup Rate Limiting
  const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes
    max: 5, // Limit each IP to X requests per windowMs
    keyGenerator: (req) => getApiKey(req), // Limit based on partner
  });
  app.use(limiter);

  server.applyMiddleware({ app });

  await new Promise<void>((resolve) => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}
