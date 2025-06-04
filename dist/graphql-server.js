"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphQLServer = void 0;
const server_1 = require("@apollo/server");
const graphql_loader_1 = require("./utils/graphql-loader");
const standalone_1 = require("@apollo/server/standalone");
class GraphQLServer {
    constructor() {
        this.url = '';
        this.apolloServer = new server_1.ApolloServer({ typeDefs: graphql_loader_1.typeDefs, resolvers: graphql_loader_1.resolvers });
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            const { url } = yield (0, standalone_1.startStandaloneServer)(this.apolloServer);
            if (!url)
                throw new Error('Failed to start GraphQL server');
            this.url = url;
        });
    }
}
exports.GraphQLServer = GraphQLServer;
//# sourceMappingURL=graphql-server.js.map