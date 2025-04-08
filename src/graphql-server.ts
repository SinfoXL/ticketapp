import { ApolloServer, BaseContext } from '@apollo/server';
import { typeDefs, resolvers } from './utils/graphql-loader';
import { startStandaloneServer } from '@apollo/server/standalone';

async function bootstrapApolloServer() {
    const apolloServer = new ApolloServer<BaseContext>({ typeDefs, resolvers });
    const { url } = await startStandaloneServer(apolloServer);
    console.log(`🚀  graphql Server ready at: ${url}`);
}
bootstrapApolloServer(); //pnpm ts-node src/graphql-server.ts
