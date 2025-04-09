import { ApolloServer, BaseContext } from '@apollo/server';
import { typeDefs, resolvers } from './utils/graphql-loader';
import { startStandaloneServer } from '@apollo/server/standalone';

export class GraphQLServer {
    private apolloServer: ApolloServer<BaseContext>;
    public url: string = '';

    constructor() {
        this.apolloServer = new ApolloServer<BaseContext>({ typeDefs, resolvers });
    }

    public async start(): Promise<void> {
        const { url } = await startStandaloneServer(this.apolloServer);
        if (!url) throw new Error('Failed to start GraphQL server');
        this.url = url;
    }
}
