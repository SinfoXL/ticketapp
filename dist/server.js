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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketServer = exports.server = void 0;
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
const config_1 = require("./config/config");
const ws_server_1 = require("./ws-server");
const graphql_server_1 = require("./graphql-server");
exports.server = http_1.default.createServer(app_1.default);
exports.socketServer = new ws_server_1.WebSocketServer(exports.server);
const graphqlServer = new graphql_server_1.GraphQLServer();
const bootstrapGraphqlServer = () => __awaiter(void 0, void 0, void 0, function* () {
    yield graphqlServer.start();
    exports.server.listen(config_1.config.server.port, () => {
        console.log(`💻 Http Server is running on http://${config_1.config.server.host}:${config_1.config.server.port}`);
        console.log(`🚀 Graphql Server ready at: ${graphqlServer.url}`);
        console.log(`💬 WebSocket Server ready at: ws://${config_1.config.server.host}:${config_1.config.server.port}`);
    });
});
bootstrapGraphqlServer();
//# sourceMappingURL=server.js.map