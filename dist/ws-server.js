"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketServer = void 0;
const socket_io_1 = require("socket.io");
const config_1 = require("./config/config");
class WebSocketServer {
    constructor(httpServer) {
        this.io = new socket_io_1.Server(httpServer, {
            cors: {
                origin: config_1.config.server.cors.origin,
                methods: ['GET', 'POST'],
            },
        });
        this.setupListeners();
    }
    setupListeners() {
        this.io.on('connection', (socket) => {
            console.log(`🟢 Cliente conectado: ${socket.id}`);
            socket.on('disconnect', () => {
                console.log(`🔴 Cliente desconectado: ${socket.id}`);
            });
            socket.on('ping', (msg) => {
                console.log(`📨 Ping recibido: ${msg}`);
                socket.emit('pong', 'Pong!');
            });
        });
    }
    getSocketInstance() {
        if (!this.io)
            throw new Error('Socket.io instance is not initialized');
        return this.io;
    }
    emitToAll(event, data) {
        this.io.emit(event, data);
    }
    emitToSocket(socketId, event, data) {
        const socket = this.io.sockets.sockets.get(socketId);
        if (socket)
            socket.emit(event, data);
    }
}
exports.WebSocketServer = WebSocketServer;
//# sourceMappingURL=ws-server.js.map