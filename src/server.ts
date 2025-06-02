import http from 'http';
import app from './app';
import { config } from './config/config';
import { WebSocketServer } from './ws-server';
import { GraphQLServer } from './graphql-server';

export const server = http.createServer(app);
export const socketServer = new WebSocketServer(server);
const graphqlServer = new GraphQLServer();

const bootstrapGraphqlServer = async () => {
    await graphqlServer.start();
    
    server.listen(config.server.port, () => {
        console.log(`💻 Http Server is running on http://${config.server.host}:${config.server.port}`);
        console.log(`🚀 Graphql Server ready at: ${graphqlServer.url}`);
        console.log(`💬 WebSocket Server ready at: ws://${config.server.host}:${config.server.port}`);
    });
};

bootstrapGraphqlServer();
