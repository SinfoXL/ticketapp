import { Server, Socket } from 'socket.io';
import { config } from './config/config';

export class WebSocketServer {
    private io: Server;

    constructor(httpServer: any) {
        this.io = new Server(httpServer, {
            cors: {
                origin: config.server.cors.origin,
                methods: ['GET', 'POST'],
            },
        });
        this.setupListeners();
    }

    private setupListeners() {
        this.io.on('connection', (socket: Socket) => {
            console.log(`🟢 Cliente conectado: ${socket.id}`);

            socket.on('disconnect', () => {
                console.log(`🔴 Cliente desconectado: ${socket.id}`);
            });

            // Puedes agregar más listeners personalizados aquí
            socket.on('ping', (msg) => {
                console.log(`📨 Ping recibido: ${msg}`);
                socket.emit('pong', 'Pong!');
            });
        });
    }

    public getSocketInstance(): Server {
        if (!this.io) throw new Error('Socket.io instance is not initialized');
        return this.io;
    }

    public emitToAll(event: string, data: any) {
        this.io.emit(event, data);
    }

    public emitToSocket(socketId: string, event: string, data: any) {
        const socket = this.io.sockets.sockets.get(socketId);
        if (socket) socket.emit(event, data);
    }
}
